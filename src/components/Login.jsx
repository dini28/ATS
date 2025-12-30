import React, { useState } from 'react';
import Button from './ui/Button';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Attempt:", formData);
    };

    return (
        <div className="login-page fade-in-up">
            <div className="login-card">
                {/* Brand Identity */}
                <div className="login-header">
                    <a href="/" className="login-logo">
                        ATS <span className="logo-span">Analyzer</span>
                    </a>
                    <h2 className="heading-md">Access Dashboard</h2>
                    <p className="login-subtitle">Secure entry for resume optimization</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@company.com"
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <div className="label-wrapper">
                            <label htmlFor="password">Password</label>
                            <a href="#forgot" className="forgot-link">Forgot?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            required
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <Button type="submit" variant="primary" className="btn-login-submit">
                        Sign In &rarr;
                    </Button>
                </form>

                <div className="login-divider">
                    <span>OR</span>
                </div>

                <div className="social-login">
                    <Button variant="secondary" className="btn-social">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" width="18" />
                        Continue with Google
                    </Button>
                </div>

                <p className="login-footer">
                    Don't have an account? <a href="#signup">Create one for free</a>
                </p>
            </div>
        </div>
    );
};

export default Login;