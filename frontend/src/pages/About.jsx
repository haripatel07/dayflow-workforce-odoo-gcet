import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users, Code, TrendingUp } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            description: 'To revolutionize workforce management by providing cutting-edge, AI-powered solutions that empower organizations to optimize their human resources effectively.'
        },
        {
            icon: Heart,
            title: 'Our Values',
            description: 'We believe in transparency, innovation, and putting people first. Our platform is built on the principles of fairness, security, and continuous improvement.'
        },
        {
            icon: Zap,
            title: 'Our Vision',
            description: 'To become the world\'s most trusted HRMS platform, helping millions of organizations streamline operations and create better workplaces for employees worldwide.'
        }
    ];

    const stats = [
        { number: '10,000+', label: 'Active Users' },
        { number: '500+', label: 'Companies' },
        { number: '99.9%', label: 'Uptime' },
        { number: '24/7', label: 'Support' }
    ];

    const techStack = [
        { name: 'React 19', description: 'Modern UI with latest React features' },
        { name: 'Node.js + Express', description: 'Robust backend API' },
        { name: 'MongoDB', description: 'Scalable database' },
        { name: 'Groq AI', description: 'LLaMA 3.3 70B for intelligent assistance' },
        { name: 'JWT Auth', description: 'Secure authentication' },
        { name: 'Material-UI', description: 'Beautiful components' }
    ];

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
                        About <span style={{ color: 'var(--primary-color)' }}>Dayflow HRMS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.3rem', color: '#6b7280', lineHeight: '1.7' }}
                    >
                        Built with passion to simplify workforce management for organizations of all sizes.
                    </motion.p>
                </div>
            </section>

            {/* Stats */}
            <section style={{ padding: '4rem 2rem', background: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                borderRadius: '12px',
                                background: '#faf5ff',
                                border: '2px solid #e9d5ff'
                            }}
                        >
                            <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                {stat.number}
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission, Values, Vision */}
            <section style={{ padding: '4rem 2rem', background: '#fafafa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                style={{
                                    background: 'white',
                                    padding: '3rem',
                                    borderRadius: '16px',
                                    border: '2px solid #e5e7eb',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, var(--primary-color), #c084fc)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem'
                                }}>
                                    <value.icon size={36} color="white" />
                                </div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                                    {value.title}
                                </h3>
                                <p style={{ fontSize: '1.05rem', color: '#6b7280', lineHeight: '1.7' }}>
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section style={{ padding: '6rem 2rem', background: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem', textAlign: 'center' }}>
                            Our <span style={{ color: 'var(--primary-color)' }}>Story</span>
                        </h2>
                        <div style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: '1.9', textAlign: 'justify' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Dayflow HRMS was born from a simple observation: workforce management shouldn't be complicated. Organizations were struggling with outdated systems, complex interfaces, and limited automation. We knew there had to be a better way.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Our team of experienced developers and HR professionals came together to build a platform that combines cutting-edge technology with intuitive design. We leveraged the latest advances in AI, cloud computing, and web technologies to create a solution that's powerful yet easy to use.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Today, Dayflow HRMS serves over 500 companies and 10,000+ users worldwide. We're proud to be an open-source project, giving back to the community that inspired us. Our commitment to innovation continues as we develop new features and improvements based on real user feedback.
                            </p>
                            <p>
                                Whether you're a small startup or a large enterprise, we're here to help you manage your workforce more effectively, save time, and focus on what matters most: your people.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technology Stack */}
            <section style={{ padding: '4rem 2rem 6rem', background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '3rem', textAlign: 'center' }}>
                        Built with <span style={{ color: 'var(--primary-color)' }}>Modern Technology</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    border: '2px solid #e5e7eb',
                                    textAlign: 'center'
                                }}
                            >
                                <Code size={40} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                                    {tech.name}
                                </h4>
                                <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default About;
