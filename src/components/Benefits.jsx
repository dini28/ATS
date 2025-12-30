import './Benefits.css';

const Benefits = () => {
    const benefitData = [
        {
            num: "01",
            title: "Beat the Bots",
            desc: "Over 75% of resumes are filtered out before a human even sees them. Our engine helps you bypass these digital gatekeepers."
        },
        {
            num: "02",
            title: "Recruiter Priority",
            desc: "ATS systems rank candidates by score. We ensure you land at the top of the pile where visibility is 10x higher."
        },
        {
            num: "03",
            title: "Data-Driven Confidence",
            desc: "Stop guessing if your resume works. Get a quantitative score and actionable steps to reach 100% compatibility."
        }
    ];

    return (
        <section id="benefits" className="benefits-section section-padding">
            <div className="container benefits-grid">
                {/* Left Column: Heading */}
                <div className="benefits-sticky-header">
                    <h2 className="heading-lg">
                        The Cost of <br />
                        <span className="text-highlight">Invisibility</span>
                    </h2>
                    <p className="text-lead" style={{ marginTop: '24px', maxWidth: '400px' }}>
                        In a modern job market, your skills are only as good as the code that reads them.
                    </p>
                </div>

                {/* Right Column: List Items */}
                <div className="benefits-list">
                    {benefitData.map((item, index) => (
                        <div key={index} className="benefit-item fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                            <span className="benefit-number">{item.num}</span>
                            <div className="benefit-text">
                                <h3 className="heading-md">{item.title}</h3>
                                <p className="benefit-description">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;