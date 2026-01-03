import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { motion } from 'framer-motion';

const Privacy = () => {
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
                        Privacy <span style={{ color: 'var(--primary-color)' }}>Policy</span>
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
                            1. Information We Collect
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>
                            We collect information that you provide directly to us, including:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Name, email address, and contact information</li>
                            <li>Company name and employee details</li>
                            <li>Attendance records and location data (with your consent)</li>
                            <li>Leave requests and task information</li>
                            <li>Profile information and preferences</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            2. How We Use Your Information
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>
                            We use the information we collect to:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process attendance and leave management</li>
                            <li>Send notifications and updates</li>
                            <li>Respond to your requests and support inquiries</li>
                            <li>Monitor and analyze trends and usage</li>
                            <li>Protect against fraudulent or illegal activity</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            3. Data Security
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We implement industry-standard security measures to protect your data, including:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Encryption of data in transit and at rest</li>
                            <li>Secure authentication using JWT tokens</li>
                            <li>Password hashing with bcrypt</li>
                            <li>Regular security audits and updates</li>
                            <li>Company-based data isolation</li>
                            <li>Role-based access control</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            4. Data Sharing
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We do not sell your personal information. We may share your information only:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>With your company administrators and HR personnel</li>
                            <li>With service providers who assist our operations</li>
                            <li>When required by law or legal process</li>
                            <li>To protect our rights and prevent fraud</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            5. Your Rights
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>
                            You have the right to:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Access and update your personal information</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of certain data collection</li>
                            <li>Export your data in a portable format</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            6. Cookies and Tracking
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We use cookies and similar technologies to enhance your experience, analyze usage, and improve our services. You can control cookie preferences through your browser settings.
                        </p>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>
                            7. Contact Us
                        </h2>
                        <p style={{ marginBottom: '2rem' }}>
                            If you have questions about this Privacy Policy, please contact us at:
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

export default Privacy;
