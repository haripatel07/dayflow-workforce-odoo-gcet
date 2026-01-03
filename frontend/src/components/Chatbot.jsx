import { useState, useRef, useEffect, useContext } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthContext from '../context/AuthContext';

const Chatbot = () => {
    const { user } = useContext(AuthContext); // Get user directly from context
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm the Dayflow Assistant. How can I help you manage your workforce today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // User Message
        const userMsg = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');

        const token = user?.token;

        if (!token) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "Please log in to chat with me.", sender: 'bot' }]);
            return;
        }

        try {
            // Call Backend AI (RAG)
            const res = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message: userMsg.text })
            });

            const data = await res.json();
            setMessages(prev => [...prev, { id: Date.now() + 1, text: data.reply, sender: 'bot' }]);

        } catch (err) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I'm having trouble connecting to the server.", sender: 'bot' }]);
        }
    };

    return (
        <>
            {/* Chat Trigger Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem', // Standard placement
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(113, 75, 103, 0.4)',
                    display: isOpen ? 'none' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    cursor: 'pointer'
                }}
            >
                <MessageSquare size={28} />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        style={{
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            width: '350px',
                            height: '500px',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                            display: 'flex',
                            flexDirection: 'column',
                            zIndex: 1000,
                            border: '1px solid #e9ecef',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1rem', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '50%' }}>
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>Dayflow Assistant</h3>
                                    <p style={{ fontSize: '0.75rem', opacity: 0.9, marginTop: '2px' }}>Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', color: 'white', opacity: 0.8 }}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    style={{
                                        display: 'flex',
                                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {msg.sender === 'bot' && (
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Bot size={16} color="#495057" />
                                        </div>
                                    )}
                                    <div style={{
                                        maxWidth: '80%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '12px',
                                        backgroundColor: msg.sender === 'user' ? 'var(--primary-color)' : 'white',
                                        color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                                        boxShadow: msg.sender === 'bot' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                                        border: msg.sender === 'bot' ? '1px solid #dee2e6' : 'none',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.4'
                                    }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} style={{ padding: '1rem', borderTop: '1px solid #e9ecef', backgroundColor: 'white', display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Ask a question..."
                                style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    borderRadius: '20px',
                                    border: '1px solid #dee2e6',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    backgroundColor: '#f8f9fa'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: 'var(--primary-color)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'transform 0.1s'
                                }}
                                disabled={!inputText.trim()}
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
