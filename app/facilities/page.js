'use client';

import { useState } from 'react';

export default function Facilities() {
    const [activeTab, setActiveTab] = useState('academic-tab');

    return (
        <>
            <div className="page-hero">
                <div className="container">
                    <h1>Campus Facilities</h1>
                    <div className="breadcrumb"><a href="/">Home</a><span>/</span><span>Campus Facilities</span></div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="section-header center">
                        <div className="section-label">World-Class Infrastructure</div>
                        <h2 className="section-title">State-of-the-Art Facilities</h2>
                        <p className="section-sub">Every facility at IKUE is designed to inspire learning, encourage exploration, and support
                            the holistic development of our students.</p>
                    </div>

                    <div data-tabs>
                        <div className="tab-nav" style={{ justifyContent: 'center', marginBottom: '40px' }}>
                            <button
                                className={`tab-btn ${activeTab === 'academic-tab' ? 'active' : ''}`}
                                onClick={() => setActiveTab('academic-tab')}
                            >
                                Academic
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'sports-tab' ? 'active' : ''}`}
                                onClick={() => setActiveTab('sports-tab')}
                            >
                                Sports & Co-Curricular
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'safety-tab' ? 'active' : ''}`}
                                onClick={() => setActiveTab('safety-tab')}
                            >
                                Safety & Transport
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'welfare-tab' ? 'active' : ''}`}
                                onClick={() => setActiveTab('welfare-tab')}
                            >
                                Student Welfare
                            </button>
                        </div>

                        {/* Academic Tab */}
                        {activeTab === 'academic-tab' && (
                            <div id="academic-tab" className="tab-pane active">
                                <div className="programs-grid">
                                    <div className="program-card" data-aos="fade-up">
                                        <div className="card-img-wrap" style={{ height: '200px' }}>
                                            <img src="/state-Arts/scienc_labs.webp" alt="Advanced Science Labs"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Advanced Science Labs</h3>
                                            <p>Separate Physics, Chemistry, and Biology labs with the latest apparatus and digital microscopes.</p>
                                            <div className="btn-text" style={{ color: 'var(--maroon)', fontWeight: 700, marginTop: 'auto' }}>EXPLORE LABS →</div>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card-img-wrap" style={{ height: '200px' }}>
                                            <img src="/state-Arts/digital_class.webp" alt="Smart Classrooms"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Smart Classrooms</h3>
                                            <p>Interactive digital boards and high-speed internet in every classroom for enhanced learning.</p>
                                            <div className="btn-text" style={{ color: 'var(--maroon)', fontWeight: 700, marginTop: 'auto' }}>TECH-ENABLED LEARNING →</div>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="200">
                                        <div className="card-img-wrap" style={{ height: '200px' }}>
                                            <img src="/state-Arts/digital_libraries.webp" alt="Modern Library"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Modern Library</h3>
                                            <p>5,000+ volumes including NCERT, reference texts, journals, and a dedicated digital research zone.</p>
                                            <div className="btn-text" style={{ color: 'var(--maroon)', fontWeight: 700, marginTop: 'auto' }}>READING ZONE →</div>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="300">
                                        <div className="card-img-wrap" style={{ height: '200px' }}>
                                            <img src="/state-Arts/computerlab.webp" alt="Computer Lab"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Computer Lab</h3>
                                            <p>60-workstation hi-tech lab with latest systems, coding software, and broadband connectivity.</p>
                                            <div className="btn-text" style={{ color: 'var(--maroon)', fontWeight: 700, marginTop: 'auto' }}>HI-TECH LAB →</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Sports Tab */}
                        {activeTab === 'sports-tab' && (
                            <div id="sports-tab" className="tab-pane active">
                                <div className="programs-grid" style={{ marginTop: '40px' }}>
                                    <div className="program-card" data-aos="fade-up">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp1.webp" alt="Football & Cricket" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Football & Cricket</h3>
                                            <p>Full-size sports ground with coaching from professional coaches for competitive-level training.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="50">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp2.webp" alt="Swimming Pool" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Swimming Pool</h3>
                                            <p>Indoor heated pool with certified swimming instructors for all age groups.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp3.webp" alt="Karate & Martial Arts"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Karate & Martial Arts</h3>
                                            <p>Dedicated dojo with certified instructors focusing on discipline and self-defence.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="150">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp4.webp" alt="Auditorium" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Auditorium</h3>
                                            <p>500-seat state-of-the-art auditorium with professional sound and lighting for events.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="200">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp5.webp" alt="Music Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Music Studio</h3>
                                            <p>Soundproofed studio with instruments for vocal and instrumental music training.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="250">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp6.webp" alt="Dance & Arts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Dance & Arts</h3>
                                            <p>Dedicated dance hall and art studio for classical, folk, and contemporary expression.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="300">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp7.webp" alt="Indoor Sports" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Indoor Sports</h3>
                                            <p>Badminton, Table Tennis, Chess, and Carrom facilities for year-round indoor sports.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="350">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/Sports/Sp8.webp" alt="Robotics Club" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Robotics Club</h3>
                                            <p>Dedicated space for robotics, AI exploration, and participation in national science fairs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Safety Tab */}
                        {activeTab === 'safety-tab' && (
                            <div id="safety-tab" className="tab-pane active">
                                <div className="grid-2" style={{ gap: '32px' }}>
                                    <div>
                                        <div className="feature-list">
                                            <div className="feature-item">
                                                <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M23 7l-7 5 7 5V7z" />
                                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                                </svg></div>
                                                <div>
                                                    <h4>24/7 CCTV Surveillance</h4>
                                                    <p>Complete 360° campus coverage with high-definition cameras monitored round the clock by
                                                        professional security staff.</p>
                                                </div>
                                            </div>
                                            <div className="feature-item">
                                                <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                </svg></div>
                                                <div>
                                                    <h4>Secure Gated Campus</h4>
                                                    <p>Single-point entry with biometric access control. All visitors are registered and escorted at all
                                                        times.</p>
                                                </div>
                                            </div>
                                            <div className="feature-item">
                                                <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                    <circle cx="9" cy="7" r="4" />
                                                </svg></div>
                                                <div>
                                                    <h4>Trained Female Attendants</h4>
                                                    <p>Every school bus and hostel wing has dedicated female attendants for student safety and welfare.</p>
                                                </div>
                                            </div>
                                            <div className="feature-item">
                                                <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg></div>
                                                <div>
                                                    <h4>GPS-Enabled Transport</h4>
                                                    <p>Real-time bus tracking through a parent app. Speed governors and trained drivers for all routes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ background: 'var(--maroon)', borderRadius: '4px', padding: '32px', color: 'white', marginBottom: '20px' }}>
                                            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--gold-light)', marginBottom: '12px' }}>School Transport Fleet</h4>
                                            <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: 1.7, marginBottom: '16px' }}>Our fleet of 12 air-conditioned
                                                school buses covers all major routes across Sindhanur and surrounding villages. Every bus is GPS-tracked
                                                and parents receive real-time notifications.</p>
                                            <div style={{ fontSize: '13px', opacity: 0.75 }}>Trusted by 800+ parents across 24 routes.</div>
                                        </div>
                                        <div style={{ background: 'var(--off-white)', borderRadius: '4px', padding: '24px', border: '1px solid var(--border)' }}>
                                            <h4 style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px' }}>Emergency Preparedness</h4>
                                            <ul style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 2, listStyle: 'disc', paddingLeft: '18px' }}>
                                                <li>Trained first-aid staff on campus daily</li>
                                                <li>Tie-up with Sindhanur Government Hospital</li>
                                                <li>Annual fire safety drills</li>
                                                <li>Earthquake preparedness training</li>
                                                <li>Child Protection Policy in place</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Welfare Tab */}
                        {activeTab === 'welfare-tab' && (
                            <div id="welfare-tab" className="tab-pane active">
                                <div className="programs-grid" style={{ marginTop: '40px' }}>
                                    <div className="program-card" data-aos="fade-up">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/studentwellfare/Counselling_Services.webp" alt="Counselling Services"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Counselling Services</h3>
                                            <p>Certified school counsellors available for academic stress, career guidance, and personal wellbeing.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/studentwellfare/Hostel.webp" alt="Hostel Facility"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Hostel Facility</h3>
                                            <p>Separate boys' and girls' hostels with hygienic meals, 24-hour security, and dedicated wardens.</p>
                                        </div>
                                    </div>

                                    <div className="program-card" data-aos="fade-up" data-aos-delay="200">
                                        <div className="card-img-wrap" style={{ height: '180px' }}>
                                            <img src="/studentwellfare/Cantenn.webp" alt="Nutritious Canteen"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-content">
                                            <h3>Nutritious Canteen</h3>
                                            <p>Hygienic, freshly prepared vegetarian meals. Special diet options available on request.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="cta-banner">
                <div className="container">
                    <h2>Come See Our Campus for Yourself</h2>
                    <p>Schedule a free guided campus tour and meet our faculty and students.</p>
                    <div className="btn-group">
                        <a href="/contact" className="btn btn-leaf">Book a Campus Visit</a>
                        <a href="/admissions" className="btn btn-outline-white">Apply for Admission</a>
                    </div>
                </div>
            </div>
        </>
    );
}
