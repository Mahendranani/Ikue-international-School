'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setOpenSubMenu(null);
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!!isMenuOpen) {
            setOpenSubMenu(null);
        }
    };

    const handleSubMenuToggle = (e, menuName) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setOpenSubMenu(openSubMenu === menuName ? null : menuName);
        }
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="nav-inner">
                    <a href="/" className="nav-logo">
                        <img src="/School images/Logo.webp" alt="IKUE Logo" className="logo-img" />
                        <div className="logo-text">
                            <span className="logo-name">IKUE International</span>
                            <span className="logo-sub">School &amp; PU College, Sindhanur</span>
                        </div>
                    </a>

                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
                        <li><a href="/">Home</a></li>

                        <li className={`has-mega ${openSubMenu === 'about' ? 'open' : ''}`}>
                            <a href="/about" onClick={(e) => handleSubMenuToggle(e, 'about')}>
                                About Us <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: openSubMenu === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </a>
                            <div className="mega-menu">
                                <div className="mega-inner">
                                    <div className="mega-card">
                                        <img src="/School images/ikeu1.webp" alt="About IKUE" />
                                        <h4>About IKUE</h4>
                                        <p>Reimagining education with a focus on excellence and holistic development.</p>
                                        <a href="/about" className="text-link">Read More →</a>
                                    </div>
                                    <div className="mega-card">
                                        <img src="/pamplets/chairman.webp" alt="Our Chairman" style={{ objectPosition: 'top' }} />
                                        <h4>Our Chairman</h4>
                                        <p>Dedicated to providing quality education for the next generation of leaders.</p>
                                        <a href="/management" className="text-link">View Profile →</a>
                                    </div>
                                    <div className="mega-card">
                                        <img src="/School images/ikeu inag3.webp" alt="Our Principal" />
                                        <h4>Our Principal</h4>
                                        <p>Fostering an environment of innovation, discipline, and academic success.</p>
                                        <a href="/management" className="text-link">View Profile →</a>
                                    </div>
                                    <div className="mega-card">
                                        <img src="/School images/ikeu inag5.webp" alt="Campus" />
                                        <h4>Vision & Mission</h4>
                                        <p>Empowering students through values, technology, and global standards.</p>
                                        <a href="/vision" className="text-link">Our Goal →</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={`has-sub ${openSubMenu === 'admissions' ? 'open' : ''}`}>
                            <a href="/admissions" onClick={(e) => handleSubMenuToggle(e, 'admissions')}>
                                Admissions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: openSubMenu === 'admissions' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </a>
                            <ul className="sub-menu">
                                <li><a href="/admissions">Admission Process</a></li>
                                <li><a href="/life-skills">Life Skills</a></li>
                                <li><a href="/achievements">Student Achievements</a></li>
                            </ul>
                        </li>

                        <li className={`has-mega ${openSubMenu === 'academics' ? 'open' : ''}`}>
                            <a href="/academics" onClick={(e) => handleSubMenuToggle(e, 'academics')}>
                                Academics <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: openSubMenu === 'academics' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </a>
                            <div className="mega-menu">
                                <div className="mega-inner">
                                    <div className="mega-card">
                                        <img src="/School images/ikeu ing.webp" alt="ICSE School" />
                                        <h4>ICSE School</h4>
                                        <p>Comprehensive curriculum for foundational excellence in primary and secondary education.</p>
                                        <a href="/academics" className="text-link">Explore →</a>
                                    </div>
                                    <div className="mega-card">
                                        <img src="/School images/ikeu s1.webp" alt="PU College" />
                                        <h4>PU College (Science)</h4>
                                        <p>Specialized programs in PCMB, PCMC, and more to prepare for competitive careers.</p>
                                        <a href="/pu-college" className="text-link">Explore →</a>
                                    </div>
                                    <div className="mega-card">
                                        <img src="/faculty/Faculty3%20(1).jpg" alt="Faculty" />
                                        <h4>Faculty & Staff</h4>
                                        <p>Experienced educators committed to student growth and academic mentorship.</p>
                                        <a href="/faculty" className="text-link">View Team →</a>
                                    </div>
                                    <div className="mega-card">
                                        <img src="/School images/ikeu inag4.JPG" alt="Resources" />
                                        <h4>Academic Resources</h4>
                                        <p>State-of-the-art labs and libraries to support advanced learning.</p>
                                        <a href="/facilities" className="text-link">View Facilities →</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={`has-sub ${openSubMenu === 'gallery' ? 'open' : ''}`}>
                            <a href="/gallery" onClick={(e) => handleSubMenuToggle(e, 'gallery')}>
                                Gallery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: openSubMenu === 'gallery' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </a>
                            <ul className="sub-menu">
                                <li><a href="/gallery?type=photos">Photos</a></li>
                                <li><a href="/gallery?type=videos">Videos</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    <div className="nav-cta">
                        <a href="/admissions" className="btn btn-leaf">Apply Now</a>
                    </div>

                    <button
                        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                        id="hamburger"
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </nav>

            <div
                className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
                id="navOverlay"
                onClick={() => setIsMenuOpen(false)}
            ></div>
        </>
    );
};

export default Navbar;
