import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: 'Free',
            description: 'Perfect for small teams getting started',
            icon: Sparkles,
            features: [
                'Up to 25 employees',
                'Basic attendance tracking',
                'Leave management',
                'Employee profiles',
                'Email support',
                'Mobile app access'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Professional',
            price: '$99',
            period: '/month',
            description: 'For growing teams that need more',
            icon: Zap,
            features: [
                'Up to 200 employees',
                'Advanced attendance & GPS',
                'Complete leave workflows',
                'Task management',
                'AI Assistant',
                'Payroll system',
                'Analytics & reports',
                'Priority support',
                'Custom branding'
            ],
            cta: 'Start Free Trial',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large organizations with specific needs',
            icon: Crown,
            features: [
                'Unlimited employees',
                'All Professional features',
                'Multi-location support',
                'Custom integrations',
                'Dedicated account manager',
                'SLA guarantee',
                'On-premise deployment',
                'Training & onboarding',
                'Custom development'
            ],
            cta: 'Contact Sales',
            popular: false
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
                        Simple, <span style={{ color: 'var(--primary-color)' }}>Transparent Pricing</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.3rem', color: '#6b7280', lineHeight: '1.7' }}
                    >
                        Choose the plan that's right for your organization. No hidden fees, cancel anytime.
                    </motion.p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section style={{ padding: '4rem 2rem 8rem', background: 'white' }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    background: 'white',
                                    padding: '3rem',
                                    borderRadius: '16px',
                                    border: plan.popular ? '3px solid var(--primary-color)' : '2px solid #e5e7eb',
                                    boxShadow: plan.popular ? '0 20px 40px rgba(123, 31, 162, 0.15)' : '0 4px 15px rgba(0,0,0,0.05)',
                                    position: 'relative',
                                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)'
                                }}
                            >
                                {plan.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold'
                                    }}>
                                        MOST POPULAR
                                    </div>
                                )}
                                
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: plan.popular ? 'var(--primary-color)' : '#f3f4f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <plan.icon size={30} color={plan.popular ? 'white' : 'var(--primary-color)'} />
                                </div>

                                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                                    {plan.name}
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                                    {plan.description}
                                </p>

                                <div style={{ marginBottom: '2rem' }}>
                                    <span style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span style={{ fontSize: '1.2rem', color: '#6b7280' }}>{plan.period}</span>
                                    )}
                                </div>

                                <Link
                                    to="/register"
                                    className={plan.popular ? 'btn btn-primary' : 'btn btn-secondary'}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        fontSize: '1.1rem',
                                        borderRadius: '10px',
                                        fontWeight: '600',
                                        marginBottom: '2rem',
                                        display: 'block',
                                        textAlign: 'center',
                                        background: plan.popular ? 'var(--primary-color)' : 'white',
                                        border: plan.popular ? 'none' : '2px solid #e5e7eb'
                                    }}
                                >
                                    {plan.cta}
                                </Link>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {plan.features.map((feature, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                            <Check size={20} color="var(--primary-color)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{ fontSize: '0.95rem', color: '#374151', lineHeight: '1.5' }}>
                                                {feature}
                                            </span>
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

export default Pricing;
