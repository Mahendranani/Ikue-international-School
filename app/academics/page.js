export const metadata = {
    title: 'ICSE School Academics | IKUE International School',
    description: 'Explore the world-class ICSE curriculum at IKUE International School, Sindhanur.',
};

export default function Academics() {
    return (
        <>
            <div
                className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/School images/academics_lab.webp') center/cover no-repeat" }}
            >
                <div className="container" data-aos="fade-up">
                    <h1>ICSE School — Academics</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>Academics</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-2 align-center" style={{ gap: '60px' }}>
                        <div data-aos="fade-right">
                            <div className="section-label">ICSE Affiliated · KA453</div>
                            <h2 className="section-title">World-Class ICSE School Education</h2>
                            <p className="section-text" style={{ fontSize: '16.5px', marginBottom: '22px', lineHeight: 1.8 }}>
                                IKUE's school wing follows the prestigious ICSE (Indian Certificate of Secondary Education) curriculum—widely
                                regarded as one of the most academically rigorous and globally recognised educational tracks in India. Our
                                ICSE affiliation code is <strong>KA453</strong>. This world-standard curriculum is specifically distinguished
                                by its analytical depth, prioritizing immersive, concept-based learning over traditional rote memorization.
                                This approach is designed to cultivate genuine critical thinking and advanced problem-solving skills in every
                                child from their foundational years.
                            </p>

                            <a href="/admissions" className="btn btn-primary btn-large">Apply to ICSE School</a>
                        </div>
                        <div className="image-stack" data-aos="fade-left">
                            <img src="/School images/academics_lab.webp" alt="ICSE Academics" className="main-img" />
                            <div className="image-accent"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="section-label">School Structure</div>
                        <h2 className="section-title">Academic Wings</h2>
                    </div>

                    <div className="programs-grid" style={{ marginTop: '50px' }}>
                        <div className="program-card" data-aos="fade-up">
                            <div className="card-img-wrap" style={{ height: '180px' }}>
                                <img
                                    src="/Acadamics wings/Preprimary.webp"
                                    alt="Pre-Primary"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-content">
                                <h3>Pre-Primary Wing</h3>
                                <p>Play-based, activity-centred learning focused on motor skills, sensory development, and early language
                                    acquisition.</p>
                                <div className="btn-text">Age 3-5 Years</div>
                            </div>
                        </div>

                        <div className="program-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="card-img-wrap" style={{ height: '180px' }}>
                                <img
                                    src="/Acadamics wings/Primary.webp"
                                    alt="Primary School"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-content">
                                <h3>Primary School</h3>
                                <p>Foundational learning through the Karadi Path English Program, structured mathematics, and environmental
                                    science.</p>
                                <div className="btn-text">Grades 1-5</div>
                            </div>
                        </div>

                        <div className="program-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="card-img-wrap" style={{ height: '180px' }}>
                                <img
                                    src="/Acadamics wings/School.webp"
                                    alt="High School"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-content">
                                <h3>High School (ICSE)</h3>
                                <p>Full ICSE curriculum with emphasis on critical thinking, project-based learning, and board examination
                                    excellence.</p>
                                <div className="btn-text">Grades 6-10</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-banner" data-aos="fade-up">
                <div className="container">
                    <h2>Join IKUE — The Best ICSE School in Sindhanur</h2>
                    <p>Admissions open for all grades from LKG to Grade 10. Enroll your child today.</p>
                    <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="/admissions" className="btn btn-primary btn-large">Apply Now</a>
                        <a href="/pu-college" className="btn btn-outline-white btn-large">View PU College</a>
                    </div>
                </div>
            </div>
        </>
    );
}
