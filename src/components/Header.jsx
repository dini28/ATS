import Button from "./ui/Button";
import "./Header.css";

const Header = ({ onLoginClick }) => {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="/" className="logo">
                    ATS <span className="logo-span">Analyzer</span>
                </a>

                <nav className="nav">
                    <div className="nav-links">
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#benefits" className="nav-link">Why Us</a>
                    </div>
                    <div className="nav-actions">
                        <Button variant="secondary" size="sm" onClick={onLoginClick}>Log In</Button>
                        <Button variant="primary" size="sm">Try Now</Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
