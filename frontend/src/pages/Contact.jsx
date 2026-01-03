import { useState } from 'react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
    };

    return (
        <div style={{ minHeight: '100vh', background: 'white' }}>
            <PublicNavbar />
            
            {/* Hero */}
            <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '4rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}
                    >
                        Get in <span style={{ color: 'var(--primary-color)' }}>Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.3rem', color: '#6b7280', lineHeight: '1.7' }}
                    >
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section style={{ padding: '4rem 2rem 8rem', background: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
                            Contact Information
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '3rem', lineHeight: '1.8' }}>
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Email */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, var(--primary-color), #c084fc)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Mail size={24} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                                        Email
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#6b7280' }}>
                                        omchoksi99@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, var(--primary-color), #c084fc)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <MapPin size={24} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                                        Address
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#6b7280' }}>
                                        Odoo
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, var(--primary-color), #c084fc)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Phone size={24} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                                        Phone
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: '#6b7280' }}>
                                        Available via email
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            background: '#faf5ff',
                            padding: '3rem',
                            borderRadius: '16px',
                            border: '2px solid #e9d5ff'
                        }}
                    >
                        {submitted ? (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '400px',
                                textAlign: 'center'
                            }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--primary-color), #c084fc)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '2rem'
                                    }}
                                >
                                    <CheckCircle size={48} color="white" />
                                </motion.div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                                    Message Sent!
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: '1.7' }}>
                                    Thank you! Your message has been sent. We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>
                                    Send us a Message
                                </h3>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem',
                                            fontSize: '1rem',
                                            border: '2px solid #e9d5ff',
                                            borderRadius: '8px',
                                            background: 'white'
                                        }}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem',
                                            fontSize: '1rem',
                                            border: '2px solid #e9d5ff',
                                            borderRadius: '8px',
                                            background: 'white'
                                        }}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem',
                                            fontSize: '1rem',
                                            border: '2px solid #e9d5ff',
                                            borderRadius: '8px',
                                            background: 'white'
                                        }}
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem',
                                            fontSize: '1rem',
                                            border: '2px solid #e9d5ff',
                                            borderRadius: '8px',
                                            background: 'white',
                                            resize: 'vertical'
                                        }}
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Contact;
