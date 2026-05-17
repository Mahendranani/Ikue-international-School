"use client";

import { useState, useEffect } from 'react';

export default function LifeSkills() {
    const images = [
        "/life skills/Science (1).jpg",
        "/life skills/Science (2).jpg",
        "/life skills/Science (10).jpg",
        "/life skills/Science (11).jpg",
        "/life skills/Science (12).jpg"
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
                    <h1>Life Skills</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a><span>/</span><span>Life Skills</span>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <div className="section-label">Holistic Development</div>
                            <h2 className="section-title">Life Skills at IKUE</h2>
                            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
                                At IKUE International School, we believe that education extends far beyond the classroom. Our comprehensive life skills program empowers students to discover their passions and develop essential abilities through active participation in sports, cultural activities, science exhibitions, and innovative projects. We foster critical thinking, teamwork, creativity, and leadership, ensuring our students are well-rounded individuals prepared to navigate the challenges of the modern world.
                            </p>
                            <a href="/contact" className="btn btn-primary">Contact Us for More Information</a>
                        </div>
                        <div>
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
                                {images.map((src, index) => (
                                    <img 
                                        key={index} 
                                        src={src} 
                                        alt={`Life Skills Activity ${index + 1}`} 
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
