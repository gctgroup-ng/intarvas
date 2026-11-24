"use client";
import { useEffect } from "react";

const WIDGET_SCRIPT_SRC = "https://aiagent.intarvas.com/widget-loader.js";
const WIDGET_KEY = "wgt_E9dbTDCOYxxm6dIB6jeP2NKWET05vWCW";
const WIDGET_POSITION = "bottom-left";

/**
 * IntarvAS AI Agent Widget
 * Injects the AI agent widget script once across all pages (SPA-safe),
 * positioned on the bottom-left side of the website.
 */
const AiWidget = () => {
  useEffect(() => {
    // Guard: don't inject if the script is already in the DOM
    if (document.querySelector(`script[src="${WIDGET_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = WIDGET_SCRIPT_SRC;
    script.dataset.widgetKey = WIDGET_KEY;
    script.dataset.position = WIDGET_POSITION;

    script.onload = () =>
      console.log("IntarvAS AI widget loaded successfully.");
    script.onerror = () =>
      console.error("Failed to load IntarvAS AI widget.");

    document.body.appendChild(script);
  }, []);

  return null;
};

export default AiWidget;
