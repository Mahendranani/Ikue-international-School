export default function Campus() {
    return (
        <>
            <div className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/School images/campus_facilities.png') center/cover no-repeat" }}>
                <div className="container" data-aos="fade-up">
                    <h1>Our Campus</h1>
                    <div className="breadcrumb"><a href="/">Home</a><span>/</span><span>Campus</span></div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-2 align-center" style={{ gap: '60px' }}>
                        <div data-aos="fade-right">
                            <div className="section-label">A Hub of Innovation</div>
                            <h2 className="section-title">Modern Infrastructure for Modern Minds</h2>
                            <p className="section-text">The IKUE campus in Sindhanur is designed to provide a safe, inspiring, and
                                technologically-advanced environment for students. From spacious classrooms to specialized labs, every corner
                                is built for excellence.</p>

                            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--maroon)', fontSize: '24px' }}>🏢</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Smart Classrooms</div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--maroon)', fontSize: '24px' }}>🔬</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Science Labs</div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--maroon)', fontSize: '24px' }}>💻</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>ICT Centers</div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--maroon)', fontSize: '24px' }}>⚽</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Sports Complex</div>
                                </div>
                            </div>
                        </div>
                        <div className="image-stack" data-aos="fade-left">
                            <img src="/School images/campus_facilities.png" alt="IKUE Campus" className="main-img" />
                            <div className="image-accent"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="section-label">Safe & Secure</div>
                        <h2 className="section-title">Campus Highlights</h2>
                    </div>

                    <div className="programs-grid" style={{ marginTop: '50px' }}>
                        <div className="program-card" data-aos="fade-up">
                            <div className="card-img-wrap" style={{ height: '180px' }}><img src="/School images/about_hero.png" alt="Exterior" /></div>
                            <div className="card-content">
                                <h3>Green Campus</h3>
                                <p>Lush surroundings and open spaces that promote mental wellness and focused learning.</p>
                            </div>
                        </div>
                        <div className="program-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="card-img-wrap" style={{ height: '180px' }}><img src="/School images/campus_facilities.png"
                                alt="Auditorium" /></div>
                            <div className="card-content">
                                <h3>Digital Auditorium</h3>
                                <p>A multi-purpose hall for events, seminars, and cultural exchange with advanced acoustics.</p>
                            </div>
                        </div>
                        <div className="program-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="card-img-wrap" style={{ height: '180px' }}><img src="/School images/academics_lab.webp" alt="Lab" /></div>
                            <div className="card-content">
                                <h3>Advanced Labs</h3>
                                <p>Hands-on learning environments for Physics, Chemistry, and Biology consistent with ICSE/PU standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-banner" data-aos="fade-up">
                <div className="container">
                    <h2>Take a Physical Tour</h2>
                    <p>We invite you to experience the atmosphere of IKUE International in person.</p>
                    <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="/contact" className="btn btn-primary btn-large">Schedule a Visit</a>
                        <a href="/admissions" className="btn btn-outline-white btn-large">Apply Now</a>
                    </div>
                </div>
            </div>
        </>
    );
}
