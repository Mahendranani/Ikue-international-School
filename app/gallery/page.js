'use client';

import { useState, useRef } from 'react';

const photoGallery = [
    // Sports
    ...Array.from({ length: 23 }, (_, i) => ({ src: `/gallery/Sports (${i + 1}).jpg`, category: 'sports', alt: 'Sports' })),
    // Cultural
    ...Array.from({ length: 12 }, (_, i) => ({ src: `/gallery/christmass (${i + 1}).jpg`, category: 'cultural', alt: 'Christmas' })),
    ...Array.from({ length: 9 }, (_, i) => ({ src: `/gallery/food fest (${i + 1}).JPG`, category: 'cultural', alt: 'Food Fest' })),
    ...Array.from({ length: 5 }, (_, i) => ({ src: `/gallery/Krishna (${i + 1}).JPG`, category: 'cultural', alt: 'Krishna' })),
    ...Array.from({ length: 15 }, (_, i) => ({ src: `/gallery/Independence Day (${i + 1}).JPG`, category: 'cultural', alt: 'Independence Day' })),
    // School / Other
    ...Array.from({ length: 22 }, (_, i) => ({ src: `/gallery/Real exposure  (${i + 1}).jpg`, category: 'other', alt: 'School Exposure' })),
    ...Array.from({ length: 10 }, (_, i) => ({ src: `/gallery/welfare (${i + 1}).jpg`, category: 'other', alt: 'Welfare' })),
    { src: "/gallery/childrens (1).JPG", category: 'other', alt: 'Childrens' },
    { src: "/gallery/childrens (2).JPG", category: 'other', alt: 'Childrens' },
    { src: "/gallery/Group faculty.jpg", category: 'other', alt: 'Faculty' }
];

const videoPlaylist = [
    { src: "/IKUE School.mp4", poster: "/School images/ikeu inag4.JPG" }
];

export default function Gallery() {
    const [activeTab, setActiveTab] = useState('photo-gallery');
    const [photoCategory, setPhotoCategory] = useState('all');
    const [lightboxImg, setLightboxImg] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(videoPlaylist[0].src);
    const videoRef = useRef(null);

    const handleVideoSelect = (src) => {
        setCurrentVideo(src);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
            videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <div
                className="page-hero"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/School images/ikeu inag4.JPG') center/cover no-repeat" }}
            >
                <div className="container" data-aos="fade-up">
                    <h1>Gallery</h1>
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span>/</span>
                        <span>Gallery</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="gallery-tabs" data-aos="fade-up">
                        <div
                            className={`gallery-tab-btn ${activeTab === 'photo-gallery' ? 'active' : ''}`}
                            onClick={() => setActiveTab('photo-gallery')}
                        >
                            Photos
                        </div>
                        <div
                            className={`gallery-tab-btn ${activeTab === 'video-gallery' ? 'active' : ''}`}
                            onClick={() => setActiveTab('video-gallery')}
                        >
                            Videos
                        </div>
                    </div>

                    {/* PHOTO GALLERY */}
                    {activeTab === 'photo-gallery' && (
                        <div id="photo-gallery" className="gallery-content active">
                            <div className="category-filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                                <button className={`btn ${photoCategory === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setPhotoCategory('all')}>All</button>
                                <button className={`btn ${photoCategory === 'cultural' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setPhotoCategory('cultural')}>Cultural Events</button>
                                <button className={`btn ${photoCategory === 'sports' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setPhotoCategory('sports')}>Sports</button>
                                <button className={`btn ${photoCategory === 'other' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setPhotoCategory('other')}>School & Other</button>
                            </div>
                            <div className="photo-grid" data-aos="fade-up">
                                {photoGallery.filter(img => photoCategory === 'all' || img.category === photoCategory).map((item, index) => (
                                    <div
                                        key={index}
                                        className="photo-item"
                                        onClick={() => setLightboxImg(item.src)}
                                    >
                                        <img src={item.src} alt={item.alt} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* VIDEO GALLERY */}
                    {activeTab === 'video-gallery' && (
                        <div id="video-gallery" className="gallery-content active">
                            <div className="video-player-container" data-aos="fade-up">
                                <div className="main-video-wrap">
                                    <video ref={videoRef} controls poster="/School images/ikeu inag4.JPG">
                                        <source src={currentVideo} type="video/mp4" />
                                    </video>
                                </div>

                                <div className="section-label center">Video Playlist</div>
                                <div className="video-playlist">
                                    {videoPlaylist.map((video, index) => (
                                        <div
                                            key={index}
                                            className={`playlist-item ${currentVideo === video.src ? 'active' : ''}`}
                                            onClick={() => handleVideoSelect(video.src)}
                                        >
                                            <video muted>
                                                <source src={video.src} type="video/mp4" />
                                            </video>
                                            <div className="play-btn-mini">▶</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImg && (
                <div className="lightbox-modal active" onClick={() => setLightboxImg(null)}>
                    <span className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</span>
                    <div className="lightbox-content">
                        <img src={lightboxImg} alt="Lightbox Image" />
                    </div>
                </div>
            )}
        </>
    );
}
