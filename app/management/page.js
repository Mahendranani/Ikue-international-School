
export default function Management() {
    return (
        <>
            <div className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/School images/management_team.webp') center/cover no-repeat" }}>
                <div className="container" data-aos="fade-up">
                    <h1>Our Management</h1>
                    <div className="breadcrumb"><a href="/">Home</a><span>/</span><span>Management</span></div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="section-label">The Visionaries</div>
                        <h2 className="section-title">Sri Nekkanti Suryanarayana Educational Trust</h2>
                        <p className="section-text" style={{ maxWidth: '800px', margin: '0 auto' }}>An initiative dedicated to raising the bar for
                            education in Sindhanur. Our trust is built on integrity, foresight, and a commitment to student success.</p>
                    </div>

                    <div className="grid-2 align-center" style={{ gap: '60px', marginTop: '60px' }}>
                        <div data-aos="fade-right">
                            <h3 className="section-title" style={{ fontSize: '28px' }}>Foundational Leadership</h3>
                            <p className="section-text">The trust oversees IKUE International School and PU College with a focus on long-term
                                sustainability and academic excellence. By integrating modern infrastructure with traditional values, we
                                ensure a balanced growth for every student.</p>
                            <div
                                style={{ marginTop: '30px', padding: '30px', background: 'var(--off-white)', borderRadius: '12px', borderLeft: '5px solid var(--maroon)' }}>
                                <p style={{ fontStyle: 'italic', color: 'var(--text-dark)' }}>"Our mission is to provide an educational ecosystem
                                    where rural talent meets global opportunities."</p>
                                <p style={{ marginTop: '15px', fontWeight: 700 }}>— The Board of Trustees</p>
                            </div>
                        </div>
                        <div className="image-stack" data-aos="fade-left">
                            <img src="/School images/management_team.webp" alt="Management Team" className="main-img" />
                            <div className="image-accent"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="section-label">Academic Pillars</div>
                        <h2 className="section-title">Our Administrative Council</h2>
                    </div>

                    <div className="programs-grid" style={{ marginTop: '40px' }}>
                        <a href="/chairman" className="program-card" style={{ textAlign: 'center', padding: '40px', display: 'block', height: '100%' }}
                            data-aos="fade-up">
                            <div className="student-avatar"
                                style={{ width: '120px', height: '120px', margin: '0 auto 20px', overflow: 'hidden', border: '3px solid var(--maroon)', background: 'var(--maroon)' }}>
                                <img src="/pamplets/chairman.webp" alt="Chairman"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            </div>
                            <h4 style={{ fontSize: '20px', color: 'var(--maroon)' }}>The Chairman</h4>
                            <p className="section-text" style={{ fontSize: '13px' }}>Strategic vision and infrastructure governance.</p>
                            <span
                                style={{ display: 'block', marginTop: '15px', fontSize: '12px', fontWeight: 800, color: 'var(--maroon)', letterSpacing: '1px' }}>
                                VIEW MESSAGE →
                            </span>
                        </a>
                        <div className="program-card" style={{ textAlign: 'center', padding: '40px' }} data-aos="fade-up" data-aos-delay="100">
                            <div className="student-avatar"
                                style={{ width: '100px', height: '100px', margin: '0 auto 20px', fontSize: '40px', background: 'var(--maroon)', color: 'white' }}>
                                P</div>
                            <h4 style={{ fontSize: '20px', color: 'var(--maroon)' }}>The Principal</h4>
                            <p className="section-text" style={{ fontSize: '14px' }}>Academic excellence and student welfare.</p>
                        </div>
                        <div className="program-card" style={{ textAlign: 'center', padding: '40px' }} data-aos="fade-up" data-aos-delay="200">
                            <div className="student-avatar"
                                style={{ width: '100px', height: '100px', margin: '0 auto 20px', fontSize: '40px', background: 'var(--maroon)', color: 'white' }}>
                                D</div>
                            <h4 style={{ fontSize: '20px', color: 'var(--maroon)' }}>The Dean</h4>
                            <p className="section-text" style={{ fontSize: '14px' }}>Curriculum design and faculty coordination.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-banner" data-aos="fade-up">
                <div className="container">
                    <h2>Connect with Our Leadership</h2>
                    <p>We value transparency and open communication with our community.</p>
                    <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="/contact" className="btn btn-primary btn-large">Request a Meeting</a>
                        <a href="/about" className="btn btn-outline-white btn-large">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
}
