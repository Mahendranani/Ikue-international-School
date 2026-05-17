'use client';

import { useState } from 'react';
import Counter from '../../components/Counter';

export default function PUCollege() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <>
            <div
                className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/School images/academics_lab.webp') center/cover no-repeat" }}
            >
                <div className="container" data-aos="fade-up">
                    <h1>PU College — Science Streams</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <a href="/academics">Academics</a>
                        <span>/</span>
                        <span>PU College</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-2 align-center" style={{ gap: '60px' }}>
                        <div data-aos="fade-right">
                            <div className="section-label">Excellence in Pre-University Education</div>
                            <h2 className="section-title">Mastering Boards. Conquering Competitions.</h2>
                            <p className="section-text" style={{ fontSize: '16.5px', lineHeight: 1.8, marginBottom: '30px' }}>
                                IKUE's PU College offers a premier integrated learning experience specifically designed to navigate the dual
                                challenge of Karnataka State PU Board excellence and high-stakes national entrance examinations. Our students
                                benefit from a meticulously crafted curriculum that bridges the gap between theoretical knowledge and
                                competitive mastery, delivered by a world-class faculty composed of distinguished alumni from prestigious
                                IITs, NITs, and leading medical institutions. This synergy of deep academic expertise and dedicated mentorship
                                ensures that every student builds the advanced analytical skills and resilience required to secure top ranks
                                while simultaneously achieving their professional aspirations in the fields of Science, Engineering, and
                                Medicine.
                            </p>
                            <div className="about-features" style={{ marginTop: '30px' }}>
                                <a href="/admissions" className="btn btn-primary btn-large">Apply to PU College</a>
                            </div>
                        </div>
                        <div className="image-stack" data-aos="fade-left">
                            <img src="/School images/academics_lab.webp" alt="PU Science Lab" className="main-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="stats-grid" style={{ marginBottom: 0 }} data-aos="fade-up">
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={100} suffix="%" />
                            </div>
                            <div className="stat-desc">PU Board Results</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={793} />
                            </div>
                            <div className="stat-desc">Best NEET AIR</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={40} suffix=":1" />
                            </div>
                            <div className="stat-desc">Student:Teacher</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={50} suffix="+" />
                            </div>
                            <div className="stat-desc">Expert Faculty</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="section-label">Academic Streams</div>
                        <h2 className="section-title">Choose Your Path to Success</h2>
                        <p className="section-text" style={{ maxWidth: '700px', margin: '0 auto' }}>Both streams include integrated coaching for
                            national competitive examinations alongside the full state board curriculum.</p>
                    </div>

                    <div className="grid-2" style={{ gap: '40px', marginTop: '50px' }}>
                        <div className="program-card" style={{ borderTop: '6px solid #005a30' }} data-aos="fade-up">
                            <div className="card-content" style={{ padding: '40px' }}>
                                <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', color: '#005a30', marginBottom: '10px' }}>
                                    Medical & Research</div>
                                <h3 style={{ fontSize: '36px', color: 'var(--text-dark)' }}>PCMB</h3>
                                <p className="section-text" style={{ fontSize: '15px' }}>Physics · Chemistry · Mathematics · Biology</p>
                                <p className="section-text secondary" style={{ marginTop: '20px' }}>Ideal for students targeting Medicine, Dentistry,
                                    and Biotechnology at premier institutions like AIIMS and JIPMER.</p>
                                <div style={{ marginTop: '30px' }}>
                                    <div style={{ fontWeight: 700, fontSize: '12px', marginBottom: '15px', color: 'var(--maroon)' }}>COVERED ENTRANCE EXAMS:</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        <span className="badge" style={{ background: '#e6f4ea', color: '#005a30' }}>NEET UG</span>
                                        <span className="badge" style={{ background: '#e6f4ea', color: '#005a30' }}>AIIMS</span>
                                        <span className="badge" style={{ background: '#e6f4ea', color: '#005a30' }}>KCET</span>
                                    </div>
                                </div>
                                <a href="/admissions" className="btn btn-primary btn-large" style={{ marginTop: '40px', width: '100%' }}>Apply for PCMB</a>
                            </div>
                        </div>

                        <div className="program-card" style={{ borderTop: '6px solid #003a7a' }} data-aos="fade-up" data-aos-delay="100">
                            <div className="card-content" style={{ padding: '40px' }}>
                                <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', color: '#003a7a', marginBottom: '10px' }}>
                                    Engineering & Technology</div>
                                <h3 style={{ fontSize: '36px', color: 'var(--text-dark)' }}>PCMC</h3>
                                <p className="section-text" style={{ fontSize: '15px' }}>Physics · Chemistry · Mathematics · Comp. Science</p>
                                <p className="section-text secondary" style={{ marginTop: '20px' }}>Designed for aspiring Engineers and Data
                                    Scientists targeting IITs, NITs, and top global institutions.</p>
                                <div style={{ marginTop: '30px' }}>
                                    <div style={{ fontWeight: 700, fontSize: '12px', marginBottom: '15px', color: 'var(--maroon)' }}>COVERED ENTRANCE EXAMS:</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        <span className="badge" style={{ background: '#e8f0fe', color: '#003a7a' }}>JEE Mains</span>
                                        <span className="badge" style={{ background: '#e8f0fe', color: '#003a7a' }}>JEE Advanced</span>
                                        <span className="badge" style={{ background: '#e8f0fe', color: '#003a7a' }}>COMEDK</span>
                                    </div>
                                </div>
                                <a href="/admissions" className="btn btn-primary btn-large" style={{ marginTop: '40px', width: '100%' }}>Apply for PCMC</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="grid-2 align-center" style={{ gap: '60px' }}>
                        <div data-aos="fade-right">
                            <div className="section-label">Our Methodology</div>
                            <h2 className="section-title">The Integrated Coaching Model</h2>
                            <p className="section-text">Our special pedagogy blends the State PU Board curriculum with rigorous preparation for
                                national entrance exams.</p>

                            <div className="accordion" style={{ marginTop: '30px' }}>
                                <div className="accordion-item" style={{ borderBottom: '1px solid var(--border)' }}>
                                    <button
                                        className={`accordion-header ${openAccordion === 0 ? 'open' : ''}`}
                                        onClick={() => toggleAccordion(0)}
                                        style={{ padding: '20px 0', fontWeight: 700, fontFamily: 'var(--font-display)', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer' }}
                                    >
                                        <span>Board + Competitive Unified Approach</span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            style={{ transform: openAccordion === 0 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                                        >
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div
                                        className="accordion-body"
                                        style={{
                                            paddingBottom: '20px',
                                            fontSize: '15px',
                                            color: 'var(--text-mid)',
                                            display: openAccordion === 0 ? 'block' : 'none'
                                        }}
                                    >
                                        Every topic is taught with dual objectives — satisfying PU Board requirements while building the deep
                                        conceptual understanding needed for NEET/JEE.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-2" style={{ gap: '20px' }} data-aos="fade-left">
                            <div
                                className="program-card"
                                style={{ padding: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div style={{ width: '80px', height: '80px', marginBottom: '20px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                                    <img src="/School images/faculty_card.webp" alt="Expert Faculty" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ color: 'var(--maroon)', fontWeight: 700, marginBottom: '5px' }}>Expert Faculty</h4>
                                <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0 }}>IIT & NIT Alumni</p>
                            </div>
                            <div
                                className="program-card"
                                style={{ padding: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div style={{ width: '80px', height: '80px', marginBottom: '20px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                                    <img src="/School images/batches_card.webp" alt="Small Batches" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ color: 'var(--maroon)', fontWeight: 700, marginBottom: '5px' }}>Small Batches</h4>
                                <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0 }}>Limited to 40</p>
                            </div>
                            <div
                                className="program-card"
                                style={{ padding: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div style={{ width: '80px', height: '80px', marginBottom: '20px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                                    <img src="/School images/tests_card.webp" alt="Weekly Tests" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ color: 'var(--maroon)', fontWeight: 700, marginBottom: '5px' }}>Weekly Tests</h4>
                                <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0 }}>NEET/JEE Pattern</p>
                            </div>
                            <div
                                className="program-card"
                                style={{ padding: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div style={{ width: '80px', height: '80px', marginBottom: '20px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                                    <img src="/School images/track_record_card.webp" alt="Track Record" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ color: 'var(--maroon)', fontWeight: 700, marginBottom: '5px' }}>Track Record</h4>
                                <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0 }}>100% Results</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-banner" data-aos="fade-up">
                <div className="container">
                    <h2>Secure Your Seat in PU College 2026–27</h2>
                    <p>Applications are now open for PCMB and PCMC streams. Limited seats available.</p>
                    <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <a href="/admissions" className="btn btn-primary btn-large">Apply Now Today</a>
                        <a href="/contact" className="btn btn-outline-white btn-large">Enquire Now</a>
                    </div>
                </div>
            </div>
        </>
    );
}
