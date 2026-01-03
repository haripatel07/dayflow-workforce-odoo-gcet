const Footer = () => {
    return (
        <footer style={{
            background: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            padding: '2rem 3rem',
            marginTop: 'auto',
            color: '#6b7280',
            fontSize: '0.9rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', opacity: 1 }}>
                    <div style={{ background: '#f3f4f6', borderRadius: '6px', padding: '4px', display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Dayflow" style={{ height: '24px', width: '24px', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#374151' }}>Dayflow</span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#9ca3af', marginTop: '0.5rem' }}>
                    &copy; {new Date().getFullYear()} Dayflow Inc.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
