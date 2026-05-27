import Counter from '../components/Counter';
import PopupModal from '../components/PopupModal';

export default function Home() {
    return (
        <>
            <PopupModal />
            {/* HERO SECTION */}
            <section className="home-hero">
                <video 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src="/IKUE School.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-massive-title">Reimagining <br />Education</h1>
                        <p className="hero-subtitle">
                            Excellence in Education. Building Tomorrow's Leaders Today. <br />
                            ICSE School & PU Science College, Sindhanur.
                        </p>
                        <div className="hero-btns">
                            <a href="/admissions" className="btn btn-primary btn-large">Apply Now</a>
                            <a href="/academics" className="btn btn-outline-white btn-large">Explore Programs &gt;</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="section about-home" id="about">
                <div className="container">
                    <div className="grid-about align-center">
                        <div className="about-text" data-aos="fade-right">
                            <div className="section-label">Your Future Campus</div>
                            <h2 className="section-title">About Ikeu International</h2>
                            <p className="section-text">
                                Nestled in the heart of Sindhanur, IKUE International School & PU College is more than just an
                                institution—it's a sanctuary of learning. Established with a vision to merge rigorous academics with holistic
                                development, we provide a state-of-the-art campus where innovation meet's tradition.
                            </p>
                            <p className="section-text secondary">
                                From our ICSE-affiliated primary school to our integrated PU Science College with focused NEET/JEE coaching,
                                we are dedicated to shaping India's future leaders through quality technical and value-based education.
                            </p>
                            <div className="about-features">
                                <div className="feat-item"><strong>15+</strong> Years Excellence</div>
                                <div className="feat-item"><strong>ICSE</strong> Affiliated</div>
                                <div className="feat-item"><strong>NEET/JEE</strong> Integrated</div>
                            </div>
                            <a href="/about" className="btn btn-outline">View More</a>
                        </div>
                        <div className="about-image" data-aos="fade-left">
                            <div className="image-single">
                                <img src="/School images/ikeu inag2.webp" alt="Ikeu Campus" className="main-img-large" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAMS SECTION */}
            <section className="section programs-home section-alt">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <div className="section-label">Departments</div>
                        <h2 className="section-title">Explore our programs</h2>
                        <p className="section-sub">Divergent educational pathways from early years to professional career preparation.</p>
                    </div>

                    <div className="programs-grid">
                        <div className="program-card" data-aos="fade-up">
                            <div className="card-img-wrap">
                                <img src="/School images/ikeu1.webp" alt="Primary School" />
                            </div>
                            <div className="card-content">
                                <h3>Primary School (ICSE)</h3>
                                <p>LKG to Grade 5. Conceptual learning foundations with global standards.</p>
                                <a href="/academics" className="btn-text">Explore Program →</a>
                            </div>
                        </div>

                        <div className="program-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="card-img-wrap">
                                <img src="/School images/ikeu ing.webp" alt="High School" />
                            </div>
                            <div className="card-content">
                                <h3>High School (ICSE)</h3>
                                <p>Grade 6 to 10. Rigorous academic framework for board excellence.</p>
                                <a href="/academics" className="btn-text">Explore Program →</a>
                            </div>
                        </div>

                        <div className="program-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="card-img-wrap">
                                <img src="/School images/ikeu s1.webp" alt="PU College" />
                            </div>
                            <div className="card-content">
                                <h3>PU Science College</h3>
                                <p>Integrated Coaching for NEET, JEE, and CET with PCMB/PCMC streams.</p>
                                <a href="/pu-college" className="btn-text">Explore Program →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PLACEMENTS & SUCCESS SECTION */}
            <section className="section placements-home">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <div className="section-label">Success Metrics</div>
                        <h2 className="section-title">Navigating Success at Ikeu</h2>
                        <p className="section-sub">Our students consistently set benchmarks in board exams and competitive entries.</p>
                    </div>

                    <div className="stats-grid" data-aos="fade-up">
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={98} />
                            </div>
                            <div className="stat-unit">%</div>
                            <div className="stat-desc">ICSE Board Results</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={100} />
                            </div>
                            <div className="stat-unit">%</div>
                            <div className="stat-desc">PU Board Pass Rate</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={1200} suffix="+" />
                            </div>
                            <div className="stat-desc">Students Enrolled</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-val">
                                <Counter target={793} suffix=" AIR" />
                            </div>
                            <div className="stat-desc">Top NEET Rank</div>
                        </div>
                    </div>

                    <h3 className="subsection-title" data-aos="fade-up">Narratives of Excellence</h3>
                    <div className="success-grid">
                        <div className="success-card" data-aos="fade-up">
                            <div className="student-info">
                                <div className="student-avatar" style={{ backgroundColor: '#eee' }}>P</div>
                                <div className="student-details">
                                    <h4>Priya Sharma</h4>
                                    <p>NEET Qualifier 2024</p>
                                </div>
                            </div>
                            <div className="success-logo">
                                <span>PCMB Topper</span>
                            </div>
                        </div>
                        <div className="success-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="student-info">
                                <div className="student-avatar" style={{ backgroundColor: '#eee' }}>R</div>
                                <div className="student-details">
                                    <h4>Rahul Kumar</h4>
                                    <p>JEE Qualifier 2024</p>
                                </div>
                            </div>
                            <div className="success-logo">
                                <span>PCMC Merit</span>
                            </div>
                        </div>
                        <div className="success-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="student-info">
                                <div className="student-avatar" style={{ backgroundColor: '#eee' }}>S</div>
                                <div className="student-details">
                                    <h4>Suresh Patil</h4>
                                    <p>ICSE District Topper</p>
                                </div>
                            </div>
                            <div className="success-logo">
                                <span>98.6% Score</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAMPHLETS SECTION */}
            <section className="pamphlets-section">
                <div className="container">
                    <div className="section-header center" data-aos="fade-up">
                        <div className="section-label">Academic Excellence</div>
                        <h2 className="section-title">Official Brochures & Results</h2>
                        <p className="section-sub">
                            Witness our path to success. Explore our official pamphlets showcasing <br /> our PU College
                            performance, ICSE school highlights, and academic journey.
                        </p>
                    </div>

                    <div className="pamphlets-grid">
                        <div className="pamphlet-card" data-aos="zoom-in">
                            <img
                                src="/pamplets/2025-26.webp"
                                alt="Pamphlet 2025-26"
                                className="pamphlet-img"
                            />
                            <div className="pamphlet-overlay">
                                <a href="/pamplets/2025-26.webp" className="btn-zoom" target="_blank">View Large</a>
                            </div>
                        </div>

                        <div className="pamphlet-card" data-aos="zoom-in" data-aos-delay="100">
                            <img
                                src="/pamplets/pamplet1.webp"
                                alt="Pamphlet Front"
                                className="pamphlet-img"
                            />
                            <div className="pamphlet-overlay">
                                <a href="/pamplets/pamplet1.webp" className="btn-zoom" target="_blank">View Large</a>
                            </div>
                        </div>

                        <div className="pamphlet-card" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/pamplets/pamplet2.webp" alt="Pamphlet Back" className="pamphlet-img" />
                            <div className="pamphlet-overlay">
                                <a href="/pamplets/pamplet2.webp" className="btn-zoom" target="_blank">View Large</a>
                            </div>
                        </div>

                        <div className="pamphlet-card" data-aos="zoom-in" data-aos-delay="300">
                            <img
                                src="/pamplets/pamplet3.webp"
                                alt="Pamphlet Results"
                                className="pamphlet-img"
                            />
                            <div className="pamphlet-overlay">
                                <a href="/pamplets/pamplet3.webp" className="btn-zoom" target="_blank">View Large</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INQUIRY & MAP SECTION */}
            <section className="inquiry-section">
                <div className="inquiry-grid">
                    <div className="inquiry-form-side" data-aos="fade-right">
                        <div className="inquiry-content">
                            <h2 className="section-title light">Admissions Inquiry</h2>
                            <p className="section-sub light">Chart your course to success at Ikeu International. Fill out the form below to
                                start your journey.</p>

                            <form action="https://formsubmit.co/ikueinternationalschool@gmail.com" method="POST" className="quick-inquiry" suppressHydrationWarning>
                                <div className="form-row">
                                    <input type="text" name="name" placeholder="Your Name" className="inquiry-input" required suppressHydrationWarning />
                                    <input type="email" name="email" placeholder="Email Address" className="inquiry-input" required suppressHydrationWarning />
                                </div>
                                <div className="form-row">
                                    <input type="tel" name="phone" placeholder="Phone Number" className="inquiry-input" required suppressHydrationWarning />
                                    <select name="course" className="inquiry-input" required suppressHydrationWarning>
                                        <option value="">Select Course</option>
                                        <option value="icse">ICSE School</option>
                                        <option value="pu">PU Science College</option>
                                    </select>
                                </div>
                                <textarea name="message" placeholder="Your Message" className="inquiry-textarea" required suppressHydrationWarning></textarea>
                                <input type="hidden" name="_subject" value="New Admissions Inquiry from Website!" />
                                <button type="submit" className="btn btn-primary" suppressHydrationWarning>Submit Inquiry</button>
                            </form>
                        </div>
                    </div>
                    <div className="inquiry-map-side" data-aos="fade-left">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.629731633513!2d76.7262!3d15.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb83bAAAAAA%3A0x88888888888888!2sIKUE%20International%20School%2C%20Sindhanur!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(100%) contrast(1.2) opacity(0.8)' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}
