import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { motion } from 'framer-motion';
import { Clock, Users, Shield, BarChart, CheckSquare, MessageSquare, Briefcase, Globe, Zap, TrendingUp, Award, Lock, CheckCircle } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Clock,
            title: 'Smart Attendance Tracking',
            description: 'Real-time check-in/out with GPS tracking, automated reports, and work hour calculations.',
            highlights: ['GPS-based tracking', 'Automatic reports', 'Overtime calculation', 'Mobile friendly']
        },
        {
            icon: Users,
            title: 'Employee Management',
            description: 'Centralized profiles with complete lifecycle tracking from onboarding to exit.',
            highlights: ['Profile management', 'Role-based access', 'Department hierarchy', 'Performance tracking']
        },
        {
            icon: Shield,
            title: 'Leave Management',
            description: 'Automated workflows with smart balance calculations and approval systems.',
            highlights: ['Multiple leave types', 'Auto-approval rules', 'Balance tracking', 'Calendar integration']
        },
        {
            icon: BarChart,
            title: 'Advanced Analytics',
            description: 'Real-time insights and predictive workforce analytics for better decision making.',
            highlights: ['Real-time dashboards', 'Custom reports', 'Predictive analytics', 'Export capabilities']
        },
        {
            icon: CheckSquare,
            title: 'Task Management',
            description: 'Assign, track, and collaborate on team tasks with priority management.',
            highlights: ['Task assignment', 'Progress tracking', 'Priority levels', 'Comments & collaboration']
        },
        {
            icon: MessageSquare,
            title: 'AI Assistant',
            description: 'Smart chatbot powered by LLaMA 3.3 70B for instant HR support and queries.',
            highlights: ['24/7 availability', 'Context-aware responses', 'Policy queries', 'Instant answers']
        },
        {
            icon: Briefcase,
            title: 'Payroll System',
            description: 'Automated salary calculations with detailed breakdowns and tax computations.',
            highlights: ['Salary breakdown', 'Tax calculations', 'Payslip generation', 'Bank integration']
        },
        {
            icon: Globe,
            title: 'Multi-tenant Architecture',
            description: 'Complete data isolation for unlimited organizations with enterprise security.',
            highlights: ['Data isolation', 'Unlimited companies', 'Custom branding', 'Scalable infrastructure']
        },
        {
            icon: Zap,
            title: 'Lightning Fast Performance',
            description: 'Built with React & MongoDB for blazing performance and smooth user experience.',
            highlights: ['React 19', 'MongoDB optimization', 'Fast load times', 'Responsive design']
        },
        {
            icon: Lock,
            title: 'Enterprise Security',
            description: 'JWT authentication with role-based access control and data encryption.',
            highlights: ['JWT tokens', 'RBAC', 'Data encryption', 'Audit logs']
        },
        {
            icon: TrendingUp,
            title: 'Scalable Solution',
            description: 'Grows with your business from 10 to 10,000+ employees seamlessly.',
            highlights: ['Horizontal scaling', 'Load balancing', 'Cloud-ready', 'Performance optimized']
        },
        {
            icon: Award,
            title: 'Open Source',
            description: 'Fully transparent codebase on GitHub with community-driven development.',
            highlights: ['MIT License', 'GitHub repository', 'Community support', 'Custom modifications']
        }
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
                        Powerful Features for <span style={{ color: 'var(--primary-color)' }}>Modern HR</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.3rem', color: '#6b7280', lineHeight: '1.7' }}
                    >
                        Everything you need to manage your workforce efficiently, all in one comprehensive platform.
                    </motion.p>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '6rem 2rem', background: 'white' }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                style={{
                                    background: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '12px',
                                    border: '2px solid #e5e7eb',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: 'var(--primary-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <feature.icon size={30} color="white" />
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    {feature.description}
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {feature.highlights.map((highlight, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <CheckCircle size={16} color="var(--primary-color)" />
                                            <span style={{ fontSize: '0.9rem', color: '#374151' }}>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Features;
