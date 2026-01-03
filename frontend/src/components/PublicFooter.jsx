import { Link } from 'react-router-dom';

const PublicFooter = () => {
    return (
        <footer style={{ 
            padding: '4rem 2rem 2rem', 
            background: '#111827', 
            color: '#9ca3af' 
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <img src="/logo.png" alt="Dayflow" style={{ height: '36px' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white' }}>Dayflow</h3>
                        </div>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Modern HRMS platform for the next generation of businesses.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '1rem' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/features" style={{ color: '#9ca3af', textDecoration: 'none' }}>Features</Link>
                            <Link to="/pricing" style={{ color: '#9ca3af', textDecoration: 'none' }}>Pricing</Link>
                            <Link to="/documentation" style={{ color: '#9ca3af', textDecoration: 'none' }}>Documentation</Link>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '1rem' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none' }}>About Us</Link>
                            <Link to="/contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '1rem' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/privacy" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</Link>
                            <Link to="/terms" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</Link>
                            <Link to="/license" style={{ color: '#9ca3af', textDecoration: 'none' }}>License</Link>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Dayflow HRMS. Open Source & Enterprise Ready.</p>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;
