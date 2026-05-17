
export default function Vision() {
    return (
        <>
            <div className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/School images/vision_mission.webp') center/cover no-repeat" }}>
                <div className="container" data-aos="fade-up">
                    <h1>Vision & Mission</h1>
                    <div className="breadcrumb"><a href="/">Home</a><span>/</span><span>Vision</span></div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-2 align-center" style={{ gap: '60px' }}>
                        <div data-aos="fade-right">
                            <div className="section-label">Future-Ready Education</div>
                            <h2 className="section-title">Our Vision for Excellence</h2>
                            <p className="section-text">At IKUE International, our vision is to be a globally recognized center of academic
                                excellence that nurtures the unique potential of every student.</p>
                            <div className="info-box" style={{ borderLeftColor: 'var(--maroon)', background: '#fff5f5', marginTop: '30px' }}>
                                <p style={{ fontStyle: 'italic', color: 'var(--maroon-dark)', fontSize: '18px' }}>"To develop disciplined, confident,
                                    and socially responsible learners who are prepared for global challenges — through an environment that
                                    values curiosity, integrity, and academic rigour."</p>
                            </div>
                        </div>
                        <div className="image-stack" data-aos="fade-left">
                            <img src="/School images/vision_mission.webp" alt="IKUE Vision" className="main-img"
                                style={{ filter: 'brightness(0.9)' }} />
                            <div className="image-accent" style={{ background: 'var(--gold)' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="grid-2 align-center" style={{ gap: '60px' }}>
                        <div className="image-stack" data-aos="fade-right">
                            <img src="/School images/students_joy.webp" alt="IKUE Mission" className="main-img" />
                            <div className="image-accent"></div>
                        </div>
                        <div data-aos="fade-left">
                            <div className="section-label">The Way Forward</div>
                            <h2 className="section-title">Our Mission</h2>
                            <p className="section-text">To achieve unwavering academic excellence through innovative teaching methods,
                                structured assessments, and holistic student development programs.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <div style={{ color: 'var(--maroon)', fontSize: '20px' }}>✓</div>
                                    <div><strong>Academic Rigour:</strong> High standards in ICSE and PU Science tracks.</div>
                                </li>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <div style={{ color: 'var(--maroon)', fontSize: '20px' }}>✓</div>
                                    <div><strong>Holistic Growth:</strong> Balancing sports, arts, and ethics with science.</div>
                                </li>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <div style={{ color: 'var(--maroon)', fontSize: '20px' }}>✓</div>
                                    <div><strong>Global Perspective:</strong> Preparing students for international opportunities.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-banner" data-aos="fade-up">
                <div className="container">
                    <h2>Ready to Join IKUE?</h2>
                    <p>Admissions open for 2026–27 academic year. Begin your journey today.</p>
                    <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="/admissions" className="btn btn-primary btn-large">Apply Now</a>
                        <a href="/contact" className="btn btn-outline-white btn-large">Contact Us</a>
                    </div>
                </div>
            </div>
        </>
    );
}
