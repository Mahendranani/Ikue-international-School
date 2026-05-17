"use client";

import { useState, useEffect } from 'react';

export default function Faculty() {
    const images = [
        "/faculty/Faculty3 (1).jpg",
        "/faculty/Faculty3 (2).jpg",
        "/faculty/Faculty3 (3).jpg"
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
                    <h1>Faculty</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a><span>/</span><span>Faculty</span>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <div className="section-label">Expert Educators</div>
                            <h2 className="section-title">Our Faculty & Staff</h2>
                            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
                                At IKUE International School, our greatest asset is our exceptional team of highly experienced and dedicated teachers. They bring a wealth of knowledge and a deep passion for education into the classroom every day. Known for their outstanding, student-centric way of explanation, our faculty members simplify complex concepts and inspire a love for lifelong learning. They serve not just as educators, but as professional mentors who nurture the intellectual and personal growth of each student.
                            </p>
                            <a href="/contact" className="btn btn-primary">Contact Us for More Information</a>
                        </div>
                        <div>
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
                                {images.map((src, index) => (
                                    <img 
                                        key={index} 
                                        src={src} 
                                        alt={`Faculty Member ${index + 1}`} 
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
