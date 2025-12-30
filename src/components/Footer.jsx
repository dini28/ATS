import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand-section">
                        <div className="footer-brand">
                            ATS <span style={{ color: '#888' }}>Analyzer</span>
                        </div>
                        <p style={{ marginTop: '16px', fontSize: '0.9rem', color: '#888', maxWidth: '300px' }}>
                            Precision-engineered resume analysis to help you beat the algorithms.
                        </p>
                    </div>

                    {/* Navigation Groups */}
                    <div className="footer-links-group">
                        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.1em' }}>Product</h4>
                        <a href="#features" className="f-link">Features</a>
                        <a href="#pricing" className="f-link">Pricing</a>
                        <a href="#api" className="f-link">API Docs</a>
                    </div>

                    <div className="footer-links-group">
                        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.1em' }}>Legal</h4>
                        <a href="#privacy" className="f-link">Privacy Policy</a>
                        <a href="#terms" className="f-link">Terms of Service</a>
                        <a href="#security" className="f-link">Security</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} ATS ANALYZER. ALL RIGHTS RESERVED.
                    </div>
                    <div className="footer-socials">
                        {/* You can add SVG icons here later */}
                        <span style={{ cursor: 'pointer' }}>TWITTER</span>
                        <span style={{ cursor: 'pointer', marginLeft: '20px' }}>LINKEDIN</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;