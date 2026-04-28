"use client";
import { useEffect } from "react";

const WIDGET_SCRIPT_SRC =
  "https://support.ccaas.intarvas.com/callback.js?uid=14626ee5-9eb1-4d63-8152-2d98cef8d037";

/**
 * IntarvAS Support Widget
 * Injects the support chat script once across all pages (SPA-safe).
 *
 */
const SupportWidget = () => {
  useEffect(() => {
    // Guard: don't inject if the script is already in the DOM
    if (document.querySelector(`script[src="${WIDGET_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.charset = "utf-8";
    script.src = WIDGET_SCRIPT_SRC;

    script.onload = () =>
      console.log("IntarvAS support widget loaded successfully.");
    script.onerror = () =>
      console.error("Failed to load IntarvAS support widget.");

    document.body.appendChild(script);

  }, []); // Empty deps → runs once on initial mount only

  return null;
};

export default SupportWidget;