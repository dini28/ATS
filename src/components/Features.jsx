import './Features.css';

const Features = () => {
    const features = [
        {
            title: "AI Scoring",
            description: "Instant compatibility score based on modern algorithm standards used by Fortune 500 recruiters.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        },
        {
            title: "Keyword Check",
            description: "Deep-scan your industry's most in-demand skills and automatically find missing keywords.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
        },
        {
            title: "Format Fixer",
            description: "Detect invisible formatting errors, tables, and fonts that cause 70% of resume parsing failures.",
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h10M7 12h10M7 17h10" /></svg>
        }
    ];

    return (
        <section id="features" className="features-section section-padding">
            <div className="container">
                {/* Section Header */}
                <div className="features-header fade-in-up">
                    <h2 className="heading-lg">Engineered for <span className="text-highlight">Success</span></h2>
                    <p className="text-lead">Our analysis engine mirrors the logic used by top-tier ATS platforms.</p>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((f, index) => (
                        <div key={index} className="feature-card fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="feature-icon-wrapper">
                                {f.icon}
                            </div>
                            <h3 className="heading-md">{f.title}</h3>
                            <p className="feature-description">{f.description}</p>
                            <div className="feature-card-footer">
                                <span className="learn-more">Learn System &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;