'use client';

import { useState } from 'react';

export default function Admissions() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("_subject", "New Admissions Application Interest!");
    formData.append("_captcha", "false"); // Disables captcha for AJAX

    try {
        const response = await fetch("https://formsubmit.co/ajax/ikueinternationalschool@gmail.com", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success === "true" || data.success === true) {
            setFormSubmitted(true);
            e.target.reset();
            alert("Form submitted Successfully!");
        } else {
            alert("Error submitting form.");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
};

    return (
        <>
            <div
                className="page-hero page-hero--admissions"
                style={{
                    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/pamplets/admission_banner.webp') center center / 100% auto no-repeat"
                }}
            >
                <div className="container" data-aos="fade-up">
                    <div className="page-hero__label">Admission 2026–27</div>
                    <h1>Shaping Your Child's Future with Excellence</h1>
                    <p className="page-hero__text">Join the top-rated ICSE school in Sindhanur. We offer a holistic environment where technology meets tradition to build global leaders.</p>
                    <div className="page-hero__btns">
                        <a href="#enquiry-form" className="btn btn-primary btn-large">Apply Now</a>
                        <a href="/about" className="btn btn-outline-white btn-large">Our Philosophy</a>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Philosophy & Highlights */}
            <section className="split-section">
                <div className="container">
                    <div className="split-header" data-aos="fade-up">
                        <div className="left">
                            <div className="vencap-hero-label" style={{ color: '#276419' }}>The IKUE Advantage</div>
                            <h2 style={{ fontSize: '42px', marginTop: '10px', lineHeight: 1.2, fontWeight: 800, color: 'var(--maroon)' }}>
                                Holistic Environment for Shaping Future Leaders
                            </h2>
                        </div>
                        <div className="right">
                            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8 }}>Our ecosystem is designed to nurture creativity,
                                discipline, and analytical thinking. We provide the best-in-class facilities and a curriculum that evolves
                                with the world.</p>
                        </div>
                    </div>

                    <div className="split-grid-vcap">
                        <div data-aos="fade-right">
                            <div className="vcap-feature-box blue">
                                <div className="vcap-icon-wrap">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <h4>Safe & Nurturing Environment</h4>
                                <p>We provide a secure campus with 24/7 monitoring and a culture that values every child's safety and
                                    well-being.</p>
                            </div>
                            <div className="vcap-feature-box" style={{ marginTop: '30px' }}>
                                <div className="vcap-icon-wrap">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <h4>Karadi Path English Program</h4>
                                <p>Revolutionary language learning that builds natural fluency from a young age through immersive stories and
                                    music.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <div className="vcap-img-block">
                                <img src="/School images/learning_env_ai.webp" alt="Collaborative Learning" />
                            </div>
                            <div className="vcap-feature-box" style={{ marginTop: '30px', background: '#fafafa', border: '1.5px dashed #ccc' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <img src="/School images/pu_student_ai.webp" alt="PU Student"
                                        style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--white)', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                                    <div>
                                        <h5 style={{ fontWeight: 800, color: 'var(--maroon)' }}>PU College Excellence</h5>
                                        <p style={{ fontSize: '13px', margin: 0 }}>Our graduates consistently secure top ranks in state boards and
                                            national competitive exams.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: ADMISSION PROCESS (GRID STYLE) */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="vencap-hero-label" style={{ color: 'var(--maroon)' }}>Steps to Join</div>
                        <h2 className="section-title">The Enrollment Journey</h2>
                    </div>

                    <div className="split-grid-vcap" style={{ marginTop: '40px' }}>
                        <div className="vcap-feature-box dark" data-aos="zoom-in">
                            <div className="vcap-icon-wrap" style={{ background: 'var(--maroon)' }}>01</div>
                            <h4>Digital Enquiry</h4>
                            <p>Submit your interest via our online portal. It takes less than 2 minutes. Our team will get back to you
                                within 24 business hours.</p>
                            <a href="#enquiry-form" className="btn-text" style={{ marginTop: '15px', display: 'inline-block' }}>Fill Form Now →</a>
                        </div>
                        <div className="vcap-feature-box dark" data-aos="zoom-in" data-aos-delay="100">
                            <div className="vcap-icon-wrap" style={{ background: 'var(--maroon)' }}>02</div>
                            <h4>Campus Discovery</h4>
                            <p>Visit our Sindhanur campus for a personalized tour. Meet our counselors and explore our labs, classrooms, and
                                sports facilities.</p>
                        </div>
                        <div className="vcap-feature-box dark" data-aos="zoom-in" data-aos-delay="200">
                            <div className="vcap-icon-wrap" style={{ background: 'var(--maroon)' }}>03</div>
                            <h4>Strategic Interaction</h4>
                            <p>A friendly interaction session to understand the student's academic background and align them with the right
                                program.</p>
                        </div>
                        <div className="vcap-feature-box dark" data-aos="zoom-in" data-aos-delay="300">
                            <div className="vcap-icon-wrap" style={{ background: 'var(--maroon)' }}>04</div>
                            <h4>Secure Enrollment</h4>
                            <p>Upon selection, confirm your seat by submitting the required documentation and completing the initial fee
                                formalities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: OPEN POSITIONS (ADMISSIONS LIST) */}
            <section className="section">
                <div className="container">
                    <div className="split-header" data-aos="fade-up">
                        <div className="left">
                            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--maroon)' }}>Keep Updated With Our Open Slots</h2>
                            <p style={{ color: 'var(--text-mid)', marginTop: '15px' }}>Real-time seat availability for the 2026-27 academic
                                session. Secure your child's spot before the slots fill up.</p>
                        </div>
                        <div className="right">
                            <a href="/contact" className="btn btn-outline-dark">Contact Admissions</a>
                        </div>
                    </div>

                    <div className="admissions-table-wrap" data-aos="fade-up">
                        {/* Row 1 */}
                        <div className="admission-line">
                            <div className="adm-title">
                                <h4>Primary Wing</h4>
                                <span>LKG to Grade 5 · ICSE Curriculum</span>
                            </div>
                            <div className="adm-stat">
                                <div className="pulse-dot-vcap active"></div>
                                Accepting Applications
                            </div>
                            <div className="adm-btn-vcap">
                                <a href="#enquiry-form" className="vcap-btn-outline">Apply For Admission</a>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="admission-line">
                            <div className="adm-title">
                                <h4>High School</h4>
                                <span>Grade 6 to Grade 10 · ICSE Curriculum</span>
                            </div>
                            <div className="adm-stat">
                                <div className="pulse-dot-vcap active"></div>
                                Accepting Applications
                            </div>
                            <div className="adm-btn-vcap">
                                <a href="#enquiry-form" className="vcap-btn-outline">Apply For Admission</a>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="admission-line">
                            <div className="adm-title">
                                <h4>PU Science (PCMB)</h4>
                                <span>Specialized Entrance Coaching Available</span>
                            </div>
                            <div className="adm-stat">
                                <div className="pulse-dot-vcap warning"></div>
                                Filling Fast
                            </div>
                            <div className="adm-btn-vcap">
                                <a href="#enquiry-form" className="vcap-btn-outline">Apply For Admission</a>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="admission-line">
                            <div className="adm-title">
                                <h4>PU Science (PCMC)</h4>
                                <span>Advanced Computer Science Labs</span>
                            </div>
                            <div className="adm-stat">
                                <div className="pulse-dot-vcap warning"></div>
                                Filling Fast
                            </div>
                            <div className="adm-btn-vcap">
                                <a href="#enquiry-form" className="vcap-btn-outline">Apply For Admission</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: DOCUMENTATION & FORM */}
            <section className="section section-alt" id="enquiry-form">
                <div className="container">
                    <div className="grid-2" style={{ gap: '60px', alignItems: 'start' }}>
                        <div data-aos="fade-right">
                            <h2 className="section-title">Required Documentation</h2>
                            <p className="section-text">Please ensure you have high-quality copies of the following documents during the final
                                onboarding phase.</p>

                            <div className="doc-list" style={{ marginTop: '30px', display: 'grid', gap: '15px' }}>
                                <div className="doc-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, fontSize: '14.5px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#820000" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Birth Certificate (Municipal)
                                </div>
                                <div className="doc-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, fontSize: '14.5px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#820000" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Previous 2 Year Reports
                                </div>
                                <div className="doc-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, fontSize: '14.5px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#820000" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Original Transfer Certificate
                                </div>
                                <div className="doc-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, fontSize: '14.5px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#820000" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Aadhar Card (Student & Parent)
                                </div>
                                <div className="doc-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, fontSize: '14.5px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#820000" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    6 Passport Size Photos
                                </div>
                            </div>

                            <div className="vcap-feature-box" style={{ marginTop: '40px', borderLeft: '5px solid var(--maroon)' }}>
                                <h4 style={{ marginBottom: '10px' }}>Scholarship Program</h4>
                                <p>We offer merit-based scholarships up to 50% for outstanding performers in academics and sports.</p>
                            </div>
                        </div>

                        <div className="vcap-feature-box" data-aos="fade-left" style={{ padding: '50px' }}>
                            <h3 style={{ marginBottom: '30px', fontWeight: 800 }}>Digital Enquiry Portal</h3>
                            {formSubmitted && (
                                <div className="alert alert-success" style={{ display: 'block' }}>
                                    ✓ Your enquiry has been received. Our team will contact you shortly!
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="admissions-form">
                                <div className="form-group">
                                    <label className="form-label">Full Name of Student *</label>
                                    <input type="text" name="studentName" className="form-control" placeholder=" राहुल शर्मा" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Applying for Grade *</label>
                                    <select name="grade" className="form-control" required>
                                        <option value="">Choose Class</option>
                                        <option>Pre-Primary (LKG/UKG)</option>
                                        <option>Grade 1 - 5</option>
                                        <option>Grade 6 - 8</option>
                                        <option>High School (9 & 10)</option>
                                        <option>PU 11th Science (PCMB)</option>
                                        <option>PU 11th Science (PCMC)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Parent's Mobile *</label>
                                    <input type="tel" name="phone" className="form-control" placeholder="+91 00000 00000" required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%', marginTop: '20px' }}>
                                    Submit Application Interest
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
