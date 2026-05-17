import Counter from '../../components/Counter';

export const metadata = {
    title: 'About Us | IKUE International School & PU College',
    description: 'Learn about our story, vision, mission, and leadership at IKUE International School.',
};

export default function About() {
    return (
        <>
            <div
                className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/pamplets/aboutbanner.webp') center/cover no-repeat" }}
            >
                <div className="container" data-aos="fade-up">
                    <h1>About IKUE International</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-2 align-center" style={{ alignItems: 'stretch', gap: '4rem' }}>
                        <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="section-label">Our Story</div>
                            <h2 className="section-title">A Premier Educational Institution in Sindhanur</h2>
                            <p className="section-text">
                                IKUE International School & PU College stands as a beacon of academic excellence in
                                Sindhanur, Karnataka. With our prestigious <strong>ICSE affiliation (KA453)</strong>, we uphold world-class
                                educational standards.
                            </p>
                            <p className="section-text secondary">
                                Established by the <strong>Sri Nekkanti Suryanarayana Educational Trust</strong>, our institution was founded on the belief that every child deserves access to high-quality
                                education.
                            </p>

                            <div className="about-features" style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                                <div
                                    className="feat-item"
                                    style={{
                                        background: 'white',
                                        padding: '30px',
                                        borderRadius: '15px',
                                        textAlign: 'center',
                                        flex: 1,
                                        border: '1px solid var(--border)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <strong
                                        style={{ fontSize: '36px', color: 'var(--maroon)', display: 'block', marginBottom: '5px' }}
                                    >
                                        <Counter target={1200} suffix="+" />
                                    </strong>
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            color: 'var(--text-mid)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        Active Students
                                    </span>
                                </div>
                                <div
                                    className="feat-item"
                                    style={{
                                        background: 'white',
                                        padding: '30px',
                                        borderRadius: '15px',
                                        textAlign: 'center',
                                        flex: 1,
                                        border: '1px solid var(--border)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <strong
                                        style={{ fontSize: '36px', color: 'var(--maroon)', display: 'block', marginBottom: '5px' }}
                                    >
                                        <Counter target={50} suffix="+" />
                                    </strong>
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            color: 'var(--text-mid)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        Expert Faculty
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="image-stack" data-aos="fade-right" style={{ height: '100%', padding: 0 }}>
                            <img
                                src="/School images/students_joy.webp"
                                alt="IKUE Students"
                                className="main-img"
                                style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '20px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="vision-mission-grid">
                        {/* Vision Card */}
                        <div className="modern-vision-card" data-aos="fade-right">
                            <div className="card-icon-wrap">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>"To develop disciplined, confident, and socially responsible learners who are prepared for global challenges
                                — through an environment that values curiosity and integrity."</p>
                        </div>

                        {/* Mission Card */}
                        <div className="modern-vision-card mission" data-aos="fade-left">
                            <div className="card-icon-wrap">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>"To achieve unwavering academic excellence through innovative teaching, structured assessments, and holistic
                                student development programs."</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="section-label">Leadership</div>
                        <h2 className="section-title">Messages from Our Leadership</h2>
                    </div>
                    <div className="grid-2" style={{ gap: '30px' }}>
                        <div
                            className="success-card"
                            style={{
                                flexDirection: 'column',
                                padding: '40px',
                                textAlign: 'center',
                                borderLeft: 'none',
                                borderTop: '4px solid var(--maroon)'
                            }}
                            data-aos="zoom-in"
                        >
                            <div
                                className="student-avatar"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    fontSize: '40px',
                                    marginBottom: '20px',
                                    background: 'var(--maroon)',
                                    color: 'white'
                                }}
                            >
                                N
                            </div>
                            <p className="section-text" style={{ fontStyle: 'italic', fontSize: '16px' }}>
                                "Our vision is to empower every student with the knowledge and character needed to excel in a rapidly changing global landscape. At IKUE, we inspire a lifelong love of learning."
                            </p>
                            <h4 style={{ marginTop: '20px', color: 'var(--maroon)' }}>Sri Nekkanti Suryanarayana</h4>
                            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Founder & Chairman</p>
                        </div>
                        <div
                            className="success-card"
                            style={{
                                flexDirection: 'column',
                                padding: '40px',
                                textAlign: 'center',
                                borderLeft: 'none',
                                borderTop: '4px solid var(--maroon)'
                            }}
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <div
                                className="student-avatar"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    fontSize: '40px',
                                    marginBottom: '20px',
                                    background: 'var(--maroon)',
                                    color: 'white'
                                }}
                            >
                                A
                            </div>
                            <p className="section-text" style={{ fontStyle: 'italic', fontSize: '16px' }}>
                                "Academic rigour and personal growth are the hallmarks of an IKUE education. We build strong foundations through concept-based teaching ensures students understand the world."
                            </p>
                            <h4 style={{ marginTop: '20px', color: 'var(--maroon)' }}>Mrs. Anupama Sharma</h4>
                            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Principal</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-banner" data-aos="fade-up">
                <div className="container">
                    <h2>Experience IKUE Excellence Firsthand</h2>
                    <p>Admissions are now open for 2026–27. Schedule a campus visit today.</p>
                    <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="/admissions" className="btn btn-primary btn-large">Apply Now</a>
                        <a href="/contact" className="btn btn-outline-white btn-large">Schedule a Visit</a>
                    </div>
                </div>
            </div>
        </>
    );
}
