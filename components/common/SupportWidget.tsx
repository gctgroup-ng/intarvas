"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * IntarvAS Support Widget Component
 * Loads the support widget script on all pages EXCEPT the home page
 */
const SupportWidget = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Don't load the widget on the home page
    if (pathname === '/') {
      return;
    }

    // Check if script already exists to prevent duplicate loads
    const existingScript = document.querySelector(
      'script[src*="support.ccaas.intarvas.com"]'
    );

    if (existingScript) {
      // Script already loaded via previous render
      return;
    }

    // Create and inject the script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://support.ccaas.intarvas.com/callback.js?uid=14626ee5-9eb1-4d63-8152-2d98cef8d037';
    script.charset = 'utf-8';

    // Add error handling
    script.onerror = () => {
      console.error('Failed to load IntarvAS support widget');
    };

    script.onload = () => {
      console.log('IntarvAS support widget loaded successfully');
    };

    // Append to body
    document.body.appendChild(script);

    // Cleanup function (optional - keeps script for SPA navigation)
    return () => {
      // We don't remove the script on unmount to keep it persistent across routes
      // If you want to remove it on unmount, uncomment the line below:
      // document.body.removeChild(script);
    };
  }, [pathname]); // Re-run when pathname changes

  // This component renders nothing visible
  return null;
};

export default SupportWidget;
