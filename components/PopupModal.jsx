"use client";

import { useState, useEffect } from 'react';

export default function PopupModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup shortly after page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99999,
            padding: '20px'
        }}>
            <div style={{
                position: 'relative',
                maxWidth: '650px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                animation: 'popupFadeIn 0.4s ease-out'
            }}>
                <button 
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '-16px',
                        right: '-16px',
                        background: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '1',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#333',
                        zIndex: 2,
                        paddingBottom: '2px' // optical alignment
                    }}
                    aria-label="Close"
                >
                    &times;
                </button>
                <img 
                    src="/pop%20up%20poster.webp" 
                    alt="Important Announcement" 
                    style={{
                        width: '100%',
                        maxHeight: '90vh',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '8px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                        backgroundColor: '#fff' // In case the image has transparency
                    }} 
                />
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes popupFadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}} />
        </div>
    );
}
