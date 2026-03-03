"use client";

import React from "react"

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch!</h2>
          <p className="text-gray-600 text-lg">
            We're here to help—share your questions, ideas, or concerns with us. Our team reads every message and responds quickly, so you'll get clear answers and support to keep you moving.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={6}
              className="w-full px-4 py-3 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Your message"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
