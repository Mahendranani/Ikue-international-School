
export default function Chairman() {
    return (
        <>
            <div className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/School images/management_team.webp') center/cover no-repeat" }}>
                <div className="container" data-aos="fade-up">
                    <h1>Chairman's Message</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a><span>/</span>
                        <a href="/management">Management</a><span>/</span>
                        <span>Chairman</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-2 align-center" style={{ gap: '60px' }}>
                        <div className="chairman-image-side" data-aos="fade-right">
                            <div className="image-stack">
                                <img src="/pamplets/chairman.webp" alt="Chairman — IKUE International" className="main-img"
                                    style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)', width: '100%' }} />
                                <div className="image-accent"
                                    style={{ background: 'var(--maroon)', bottom: '-15px', right: '-15px', width: '100px', height: '100px', borderRadius: '20px' }}>
                                </div>
                            </div>
                        </div>

                        <div className="chairman-text-side" data-aos="fade-left">
                            <div className="section-label">Leadership Profile</div>
                            <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px' }}>Sri Nekkanti Suryanarayana</h2>
                            <h4 style={{ color: 'var(--maroon)', fontWeight: 700, marginBottom: '25px', letterSpacing: '1px' }}>Chairman,
                                IKUE Group of Institutions</h4>

                            <p className="section-text">Welcome to IKUE International School & PU College. Our journey began with a
                                simple yet profound vision: to provide the children of Sindhanur and surrounding regions with access
                                to world-class education that doesn't compromise on our cultural roots.</p>

                            <p className="section-text">We believe that education is not just about academic grades but about the
                                holistic development of a child's character, intellect, and physical well-being. At IKUE, we have
                                invested in state-of-the-art infrastructure and a team of dedicated educators to ensure that every
                                student who passes through our gates is equipped to lead in a globalized world.</p>

                            <div style={{ marginTop: '40px', borderTop: '2px solid var(--border)', paddingTop: '30px' }}>
                                <p
                                    style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)' }}>
                                    "Our commitment is to nurture the leaders of tomorrow with integrity and innovation."</p>
                                <div style={{ marginTop: '15px', color: 'var(--maroon)', fontWeight: 700 }}>
                                    Best Regards,<br />
                                    <span style={{ fontSize: '18px' }}>Sri Nekkanti Suryanarayana</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <h2 className="section-title">Core Values & Vision</h2>
                    </div>
                    <div className="grid-3" style={{ marginTop: '40px' }}>
                        <div className="program-card" style={{ padding: '35px', background: 'white', borderRadius: '15px' }} data-aos="fade-up">
                            <h5 style={{ color: 'var(--maroon)', fontWeight: 800, marginBottom: '12px' }}>Academic Excellence</h5>
                            <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Implementing the rigorous ICSE curriculum with
                                modern pedagogical tools to ensure deep conceptual understanding.</p>
                        </div>
                        <div className="program-card" style={{ padding: '35px', background: 'white', borderRadius: '15px' }} data-aos="fade-up"
                            data-aos-delay="100">
                            <h5 style={{ color: 'var(--maroon)', fontWeight: 800, marginBottom: '12px' }}>Holistic Growth</h5>
                            <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Balanced focus on sports, arts, and life skills to
                                prepare students for real-world challenges beyond the classroom.</p>
                        </div>
                        <div className="program-card" style={{ padding: '35px', background: 'white', borderRadius: '15px' }} data-aos="fade-up"
                            data-aos-delay="200">
                            <h5 style={{ color: 'var(--maroon)', fontWeight: 800, marginBottom: '12px' }}>Global Citizenship</h5>
                            <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Nurturing empathy, social responsibility, and an
                                international outlook while staying rooted in local culture.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-banner" data-aos="fade-up">
                <div className="container">
                    <h2>Connect with Us</h2>
                    <p>Discover how we are re-imagining education for a better future.</p>
                    <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="/admissions" className="btn btn-primary btn-large">Join IKUE</a>
                        <a href="/contact" className="btn btn-outline-white btn-large">Contact Us</a>
                    </div>
                </div>
            </div>
        </>
    );
}
