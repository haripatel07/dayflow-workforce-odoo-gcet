import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { motion } from 'framer-motion';
import { Code, GitBranch, Users, FileText } from 'lucide-react';

const License = () => {
    return (
        <div style={{ minHeight: '100vh', background: 'white' }}>
            <PublicNavbar />
            
            <section style={{ padding: '6rem 2rem 4rem', background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '4rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}
                    >
                        Open Source <span style={{ color: 'var(--primary-color)' }}>License</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.3rem', color: '#6b7280', lineHeight: '1.7' }}
                    >
                        Dayflow HRMS is proudly open source under the MIT License
                    </motion.p>
                </div>
            </section>

            <section style={{ padding: '4rem 2rem', background: 'white' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                        {[
                            { icon: Code, title: 'Free to Use', desc: 'Use for any purpose' },
                            { icon: GitBranch, title: 'Modify', desc: 'Customize as needed' },
                            { icon: Users, title: 'Distribute', desc: 'Share with others' },
                            { icon: FileText, title: 'Commercial', desc: 'Use in your business' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    textAlign: 'center',
                                    padding: '2rem 1rem',
                                    borderRadius: '12px',
                                    background: '#faf5ff',
                                    border: '2px solid #e9d5ff'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, var(--primary-color), #c084fc)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem'
                                }}>
                                    <item.icon size={28} color="white" />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: '#1e293b',
                            color: '#e2e8f0',
                            padding: '3rem',
                            borderRadius: '16px',
                            border: '3px solid #334155'
                        }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>
                            MIT License
                        </h2>
                        <pre style={{
                            fontSize: '1rem',
                            lineHeight: '1.8',
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'monospace',
                            margin: 0
                        }}>
{`Copyright (c) 2024 Dayflow HRMS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                        </pre>
                    </motion.div>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: '#faf5ff', borderRadius: '16px', border: '2px solid #e9d5ff' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
                            What This Means
                        </h3>
                        <div style={{ fontSize: '1.05rem', color: '#374151', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong>✅ You CAN:</strong>
                            </p>
                            <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                                <li>Use the software commercially</li>
                                <li>Modify the source code</li>
                                <li>Distribute copies</li>
                                <li>Use privately without restrictions</li>
                                <li>Sublicense the software</li>
                            </ul>

                            <p style={{ marginBottom: '1rem' }}>
                                <strong>⚠️ You MUST:</strong>
                            </p>
                            <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                                <li>Include the original copyright notice</li>
                                <li>Include the MIT license text</li>
                            </ul>

                            <p style={{ marginBottom: '1rem' }}>
                                <strong>❌ You CANNOT:</strong>
                            </p>
                            <ul style={{ paddingLeft: '2rem' }}>
                                <li>Hold us liable for damages</li>
                                <li>Expect any warranty</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '16px', border: '2px solid #e5e7eb' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                            Contribute to Dayflow HRMS
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem' }}>
                            We welcome contributions from the community! Check out our GitHub repository.
                        </p>
                        <a
                            href="https://github.com/dayflow/hrms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                display: 'inline-block',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                borderRadius: '10px'
                            }}
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default License;
