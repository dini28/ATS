import { useState, useEffect } from 'react';
import Button from './ui/Button';
import './AnalysisResult.css';

const AnalysisResult = ({ file, onReset }) => {
    const [progress, setProgress] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(true);
    const [stepIndex, setStepIndex] = useState(0);

    const steps = [
        "Extracting raw text...",
        "Identifying industry keywords...",
        "Validating file structure...",
        "Calculating compatibility score..."
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsAnalyzing(false), 800);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    // Rotate through steps based on progress
    useEffect(() => {
        const currentStep = Math.floor((progress / 100) * steps.length);
        if (currentStep < steps.length) setStepIndex(currentStep);
    }, [progress]);

    if (isAnalyzing) {
        return (
            <div className="analysis-loader-container fade-in-up">
                <div className="loader-card">
                    <div className="scanner-line"></div>
                    <div className="loader-content">
                        <div className="tech-icon">ATS_v2.0</div>
                        <h3 className="heading-md">Analyzing {file.name}</h3>
                        <div className="progress-container">
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                            </div>
                            <div className="progress-stats">
                                <span className="step-text">{steps[stepIndex]}</span>
                                <span className="percentage-text">{progress}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="result-dashboard fade-in-up">
            <div className="result-header">
                <h2 className="heading-md">Analysis Report</h2>
                <span className="file-badge">{file.name}</span>
            </div>

            <div className="result-main">
                <div className="score-section">
                    <div className="score-visual">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="circle-main" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <text x="18" y="21" className="score-number">85</text>
                        </svg>
                    </div>
                    <div className="score-info">
                        <span className="label">Overall Match</span>
                        <span className="status-text success">Strong Candidate</span>
                    </div>
                </div>

                <div className="feedback-section">
                    <div className="feedback-group">
                        <h4 className="group-title">Critical Checks</h4>
                        <div className="check-item pass">
                            <span className="check-icon">✓</span>
                            <div className="check-text">
                                <strong>Standard Format</strong>
                                <p>PDF structure is perfectly parseable.</p>
                            </div>
                        </div>
                        <div className="check-item fail">
                            <span className="check-icon">!</span>
                            <div className="check-text">
                                <strong>Contact Placement</strong>
                                <p>Move email from header to body text.</p>
                            </div>
                        </div>
                        <div className="check-item pass">
                            <span className="check-icon">✓</span>
                            <div className="check-text">
                                <strong>Keyword Density</strong>
                                <p>12/15 target skills identified.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="result-footer">
                <Button variant="secondary" onClick={onReset} size="sm">← New Analysis</Button>
                <Button variant="primary" size="sm">Download Detailed PDF</Button>
            </div>
        </div>
    );
};

export default AnalysisResult;