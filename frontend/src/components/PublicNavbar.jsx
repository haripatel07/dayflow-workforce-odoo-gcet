import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PublicNavbar = () => {
    return (
        <nav style={{ 
            padding: '1.25rem 3rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            background: 'rgba(255,255,255,0.95)', 
            backdropFilter: 'blur(10px)',
            position: 'sticky', 
            top: 0, 
            zIndex: 100,
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                <img src="/logo.png" alt="Dayflow Logo" style={{ height: '40px' }} />
                <h1 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>Dayflow</h1>
            </Link>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to="/features" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>Features</Link>
                <Link to="/pricing" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>Pricing</Link>
                <Link to="/documentation" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>Documentation</Link>
                <Link to="/about" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>About</Link>
                <Link to="/contact" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>Contact</Link>
                <Link to="/login" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>Sign In</Link>
                <Link to="/register" className="btn btn-primary" style={{ padding: '0.65rem 1.75rem', borderRadius: '8px', fontWeight: '600' }}>
                    Get Started Free <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </Link>
            </div>
        </nav>
    );
};

export default PublicNavbar;
