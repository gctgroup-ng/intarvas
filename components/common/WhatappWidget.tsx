"use client";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "2349039555552"; 
const WHATSAPP_MESSAGE = "Hello! I'd like to get in touch."; 
const TOOLTIP_TEXT = "Chat with us on WhatsApp";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/**
 * WhatsAppWidget
 * A floating action button that opens a WhatsApp chat on all pages.
 * Place this in your root layout alongside SupportWidget.
 */
const WhatsAppWidget = () => {
    const [visible, setVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Fade in after a short delay so it doesn't flash on initial paint
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <style>{styles}</style>

        <div className={`wa-widget ${visible ? "wa-widget--visible" : ""}`} aria-label={TOOLTIP_TEXT}>
            {/* Tooltip */}
            {showTooltip && (
            <div className="wa-tooltip" role="tooltip">
                {TOOLTIP_TEXT}
            </div>
            )}

            {/* Floating button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn"
                aria-label="Open WhatsApp chat"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
            >
            {/* WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="28"
                height="28"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.04 7.8L.5 31.5l7.93-2.08A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a12.76 12.76 0 0 1-6.5-1.78l-.46-.28-4.71 1.23 1.26-4.58-.3-.48A12.8 12.8 0 1 1 16 28.8zm7.02-9.57c-.38-.19-2.26-1.11-2.61-1.24-.35-.13-.6-.19-.86.19s-.98 1.24-1.2 1.49c-.22.25-.44.28-.82.09a10.37 10.37 0 0 1-3.05-1.88 11.44 11.44 0 0 1-2.11-2.63c-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.86-2.07-1.18-2.83-.31-.74-.63-.64-.86-.65h-.73c-.25 0-.66.09-1 .47s-1.32 1.29-1.32 3.14 1.35 3.64 1.54 3.89c.19.25 2.66 4.06 6.44 5.69.9.39 1.6.62 2.15.79.9.29 1.72.25 2.37.15.72-.11 2.26-.92 2.58-1.82.32-.9.32-1.66.22-1.82-.09-.16-.35-.25-.73-.44z" />
            </svg>

            {/* Pulse ring */}
            <span className="wa-pulse" aria-hidden="true" />
            </a>
        </div>
        </>
    );
};

const styles = `
    .wa-widget {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        gap: 10px;
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 0.4s ease, transform 0.4s ease;
        pointer-events: none;
    }

    .wa-widget--visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }

    .wa-btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #25D366;
        color: #fff;
        box-shadow: 0 4px 16px rgba(37, 211, 102, 0.45);
        text-decoration: none;
        transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        outline-offset: 3px;
    }

    .wa-btn:hover,
    .wa-btn:focus-visible {
        background: #20bc5a;
        transform: scale(1.1);
        box-shadow: 0 6px 22px rgba(37, 211, 102, 0.55);
    }

    /* Animated pulse ring */
    .wa-pulse {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 2px solid #25D366;
        animation: wa-pulse-ring 2.2s ease-out infinite;
        pointer-events: none;
    }

    @keyframes wa-pulse-ring {
        0%   { transform: scale(1);   opacity: 0.7; }
        70%  { transform: scale(1.6); opacity: 0; }
        100% { transform: scale(1.6); opacity: 0; }
    }

    /* Tooltip */
    .wa-tooltip {
        background: #1a1a1a;
        color: #fff;
        font-family: system-ui, sans-serif;
        font-size: 13px;
        line-height: 1.4;
        padding: 6px 12px;
        border-radius: 6px;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        animation: wa-fade-in 0.15s ease;
        pointer-events: none;
    }

    @keyframes wa-fade-in {
        from { opacity: 0; transform: translateY(4px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    /* Keep widgets from overlapping each other if both are used */
    .wa-widget { bottom: 24px; right: 24px; }
`;

export default WhatsAppWidget;