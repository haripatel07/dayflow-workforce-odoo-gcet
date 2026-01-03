import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Users, BarChart, Server } from 'lucide-react';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'white' }}>
            {/* Navbar */}
            <nav style={{ padding: '1rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="/logo.png" alt="Dayflow Logo" style={{ height: '40px' }} />
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#212529' }}>Dayflow</h1>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Link to="/login" className="btn btn-secondary" style={{ border: 'none', fontWeight: '600' }}>Sign In</Link>
                    <Link to="/login" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', textAlign: 'center', background: 'white' }}>
                <div style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#f3e5f5', color: 'var(--primary-color)', borderRadius: '20px', fontWeight: '600', marginBottom: '2rem', fontSize: '0.85rem' }}
                    >
                        <Server size={16} /> HR Management System
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '2rem', color: '#212529', letterSpacing: '-0.02em' }}
                    >
                        Workforce Management <br />
                        <span style={{ color: 'var(--primary-color)' }}>Simplified.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.25rem', color: '#6c757d', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 3rem auto' }}
                    >
                        The open-source alternative for modern companies. Manage employees, payroll, and attendance in one unified, elegant interface.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
                    >
                        <Link to="/login" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1.1rem' }}>Start Now - It's Free</Link>
                        <Link to="/login" className="btn btn-secondary" style={{ padding: '0.8rem 2.5rem', fontSize: '1.1rem', background: '#f8f9fa' }}>Watch Demo</Link>
                    </motion.div>
                </div>
            </header>

            {/* Features Grid */}
            <section style={{ padding: '6rem 2rem', background: '#f8f9fa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        <FeatureCard
                            icon={<Clock size={28} color="var(--primary-color)" />}
                            title="Attendance"
                            desc="Real-time check-in/out logs"
                        />
                        <FeatureCard
                            icon={<Users size={28} color="var(--primary-color)" />}
                            title="Employees"
                            desc="Centralized profile directory"
                        />
                        <FeatureCard
                            icon={<Shield size={28} color="var(--primary-color)" />}
                            title="Leaves"
                            desc="Automated approval workflows"
                        />
                        <FeatureCard
                            icon={<BarChart size={28} color="var(--primary-color)" />}
                            title="Payroll"
                            desc="Salary structures & slips"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '3rem 2rem', background: 'white', borderTop: '1px solid #dee2e6', textAlign: 'center', color: '#6c757d', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Dayflow Systems. Open Source HRMS.</p>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -5 }}
        style={{ background: 'white', padding: '2rem', borderRadius: '4px', border: '1px solid #e9ecef', textAlign: 'center' }}
    >
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#f3e5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
            </div>
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#343a40' }}>{title}</h3>
        <p style={{ color: '#868e96', fontSize: '0.9rem' }}>{desc}</p>
    </motion.div>
);

export default Home;
