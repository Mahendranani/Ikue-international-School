"use client";

import { useState, useEffect } from 'react';

export default function Achievements() {
    const images = [
        "/achivements/Sports (8).jpg",
        "/achivements/Sports (10).jpg",
        "/achivements/Sports (11).jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="page-hero">
                <div className="container">
                    <h1>Achievements</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a><span>/</span><span>Achievements</span>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <div className="section-label">Excellence in Action</div>
                            <h2 className="section-title">Student Achievements</h2>
                            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
                                At IKUE International School, our students consistently demonstrate excellence beyond the classroom. They proudly represent our institution in various sports competitions and tournaments across other colleges, bringing home numerous prestigious prizes and accolades. Through their dedication, teamwork, and outstanding sportsmanship, they continuously elevate the value, dignity, and reputation of our school on a broader stage. We celebrate their hard work and are incredibly proud of their exceptional achievements.
                            </p>
                            <a href="/contact" className="btn btn-primary">Contact Us for More Information</a>
                        </div>
                        <div>
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
                                {images.map((src, index) => (
                                    <img 
                                        key={index} 
                                        src={src} 
                                        alt={`Student Achievement ${index + 1}`} 
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            opacity: currentImageIndex === index ? 1 : 0,
                                            transition: 'opacity 1s ease-in-out'
                                        }} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="cta-banner">
                <div className="container">
                    <h2>Ready to Join IKUE?</h2>
                    <p>Admissions open for 2026–27 academic year.</p>
                    <div className="btn-group">
                        <a href="/admissions" className="btn btn-leaf">Apply Now</a>
                        <a href="/contact" className="btn btn-outline-white">Contact Us</a>
                    </div>
                </div>
            </div>
        </>
    );
}
