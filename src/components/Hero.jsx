import { useState } from 'react';
import AnalysisResult from './AnalysisResult';
import Button from './ui/Button';
import './Hero.css';

const Hero = () => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState(null);
    const [showResult, setShowResult] = useState(false);

    // ... handlers remain the same ...
    const handleDragOver = (e) => { e.preventDefault(); setIsDragOver(true); };
    const handleDragLeave = (e) => { e.preventDefault(); setIsDragOver(false); };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) setFile(droppedFile);
    };
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    };
    const startAnalysis = () => { setShowResult(true); };
    const resetAnalysis = () => { setFile(null); setShowResult(false); };

    if (showResult && file) {
        return (
            <section className="hero-section">
                <div className="container hero-container">
                    <AnalysisResult file={file} onReset={resetAnalysis} />
                </div>
            </section>
        );
    }

    return (
        <section className="hero-section">
            {/* Added fade-in-up here for the whole container entrance */}
            <div className="container hero-container fade-in-up">

                {/* LEFT COLUMN: Content */}
                <div className="hero-content-left">
                    <h1 className="hero-title heading-xl">
                        Is Your Resume <br />
                        <span className="text-highlight">Robot-Ready?</span>
                    </h1>
                    <p className="hero-subtitle text-lead">
                        Get a free, instant ATS analysis. Stop getting rejected by algorithms. We check format, keywords, and compatibility scores used by top recruiters to help you get hired faster.
                    </p>
                    {/* Optional: Add social proof or trust badges here later */}
                    <div style={{ marginTop: '32px', opacity: 0.6, fontSize: '0.9rem' }}>
                        Used by job seekers at top tech companies.
                    </div>
                </div>

                {/* RIGHT COLUMN: Upload Card */}
                <div className="hero-upload-right">
                    <div
                        className={`upload-zone ${isDragOver ? 'upload-zone-active' : ''} ${file ? 'upload-zone-filled' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            id="resume-upload"
                            className="file-input"
                            accept=".pdf,.docx,.doc"
                            onChange={handleFileChange}
                            // Disable input if file is selected so clicking doesn't open dialog again immediately
                            disabled={file !== null}
                        />
                        <label htmlFor="resume-upload" className="upload-label">
                            {file ? (
                                <div className="file-selected fade-in-up">
                                    <div className="icon-doc">📄</div>
                                    <div className="file-info-group">
                                        <span className="filename text-truncate">{file.name}</span>
                                        <span className="file-status">Ready to Analyze</span>
                                    </div>
                                    {/* Optional: Add a small 'X' button here to clear selection */}
                                </div>
                            ) : (
                                <>
                                    <div className="upload-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 16V8M12 8L8 12M12 8L16 12M20 16.7428C21.2215 16.4344 21.8415 15.2289 21.9866 14.1206C22.1317 13.0123 21.7346 11.9079 20.9388 11.1121C20.143 10.3163 19.0838 9.95764 18.0229 10.1654C17.747 6.8488 15.1278 4.19525 11.8988 3.86877C8.66986 3.54228 5.60157 5.62319 4.70039 8.78363C2.8647 9.29023 1.57917 10.9669 1.55829 12.8727C1.53741 14.7785 2.78536 16.4719 4.60948 17.0124" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="upload-text-main">Click to upload or drag & drop</span>
                                    <span className="upload-text-sub">PDF or DOCX (Max 5MB)</span>
                                </>
                            )}
                        </label>
                    </div>

                    {/* Button is now inside the right column wrapper, not absolute */}
                    {file && (
                        <div className="btn-analyze-container fade-in-up">
                            <Button onClick={startAnalysis} size="lg" className="btn-full-width">Start Analysis</Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;