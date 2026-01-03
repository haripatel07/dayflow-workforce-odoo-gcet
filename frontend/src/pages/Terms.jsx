import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div style={{ minHeight: '100vh', background: 'white' }}>
            <PublicNavbar />
            
            <section style={{ padding: '6rem 2rem 4rem', background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '4rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem', textAlign: 'center' }}
                    >
                        Terms of <span style={{ color: 'var(--primary-color)' }}>Service</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.1rem', color: '#6b7280', textAlign: 'center', marginBottom: '1rem' }}
                    >
                        Last updated: January 2024
                    </motion.p>
                </div>
            </section>

            <section style={{ padding: '4rem 2rem 6rem', background: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ fontSize: '1.05rem', color: '#374151', lineHeight: '1.8' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            1. Acceptance of Terms
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            By accessing and using Dayflow HRMS, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            2. Description of Service
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            Dayflow HRMS provides a cloud-based human resource management system that includes attendance tracking, leave management, employee management, task assignment, and AI-powered assistance. The service is provided "as is" and we reserve the right to modify or discontinue features at any time.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            3. User Accounts
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>
                            To use our service, you must:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Provide accurate and complete registration information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Notify us immediately of any unauthorized access</li>
                            <li>Be responsible for all activities under your account</li>
                            <li>Not share your account with others</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            4. Acceptable Use
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>
                            You agree not to:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Use the service for any illegal or unauthorized purpose</li>
                            <li>Violate any laws in your jurisdiction</li>
                            <li>Infringe on intellectual property rights</li>
                            <li>Transmit malicious code or viruses</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Interfere with other users' access to the service</li>
                            <li>Scrape or copy content without permission</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            5. Data and Privacy
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            Your use of the service is also governed by our Privacy Policy. We implement company-based data isolation to ensure your data remains secure and separate from other organizations. You retain ownership of all data you submit to the service.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            6. Subscription and Payment
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            Some features require a paid subscription. Payment terms, refund policies, and pricing are available on our Pricing page. We reserve the right to change pricing with 30 days notice to existing subscribers.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            7. Intellectual Property
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            Dayflow HRMS is open source software licensed under the MIT License. While the source code is freely available, our branding, trademarks, and certain proprietary features remain our intellectual property. Commercial deployments should respect our license terms.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            8. Limitation of Liability
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We provide the service on an "as is" basis. We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability shall not exceed the amount you paid us in the last 12 months.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            9. Termination
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We may terminate or suspend your account at any time for violations of these terms. You may terminate your account at any time by contacting us. Upon termination, your right to use the service ceases immediately.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            10. Changes to Terms
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We reserve the right to modify these terms at any time. We will notify users of significant changes via email or in-app notification. Continued use of the service after changes constitutes acceptance of new terms.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            11. Contact Information
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            For questions about these Terms of Service, please contact us at:
                            <br />
                            <strong>Email:</strong> omchoksi99@gmail.com
                        </p>
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Terms;
