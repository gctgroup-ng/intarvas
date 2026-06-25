"use client";

import { useState, useEffect } from "react";
import { Headphones, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generatePuzzle, type Puzzle } from "@/lib/puzzle";
import PuzzleModal from "@/components/ui/PuzzleModal";
// import ChatWidget from "@/components/ChatWidget";

interface ServiceItem {
  name: string;
  value: string;
}
const SERVICES: ServiceItem[] = [
  { name: "IntarvAS PBX", value: "pbx" },
  { name: "All In one Solution", value: "all-in-solution" },
  { name: "inVAS", value: "invas" },
  { name: "Bulk Messaging", value: "bulk-messaging" },
  { name: "Vanity & toll free numbers", value: "numbers" },
  // { name: "Others", value: "others" },
];

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [showPuzzleModal, setShowPuzzleModal] = useState(false);

  // Generate puzzle on component mount
  useEffect(() => {
    setPuzzle(generatePuzzle());
  }, []);

  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (serviceName) => {
    setStatusMessage("");
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // service: selectedServices,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setStatusMessage("❌ Please select at least one service.");
      setTimeout(() => setStatusMessage(""), 5000);
      return;
    }

    // Show puzzle modal before submitting
    setShowPuzzleModal(true);
  };

  const handlePuzzleSuccess = async (answer: number) => {
    // Close modal
    setShowPuzzleModal(false);

    // Now submit the form
    setIsLoading(true);
    setStatusMessage("");

    if (!puzzle) {
      setStatusMessage("❌ Security verification failed. Please try again.");
      setIsLoading(false);
      setTimeout(() => setStatusMessage(""), 5000);
      return;
    }

    console.log("Form submitted:", formData);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          service: selectedServices,
          puzzleQuestion: puzzle.question,
          puzzleAnswer: answer,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage("✅ Message sent successfully!");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          service: "",
          message: "",
        });
        setSelectedServices([]);
        // Reset puzzle and generate a new one
        setPuzzle(generatePuzzle());
      } else {
        setStatusMessage(`❌ ${result.message || "Failed to send message. Please try again."}`);
        // Generate new puzzle on error
        setPuzzle(generatePuzzle());
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("❌ Failed to send message. Please try again.");
      // Generate new puzzle on error
      setPuzzle(generatePuzzle());
    }

    setIsLoading(false);

    // Clear message after 5 seconds
    setTimeout(() => setStatusMessage(""), 5000);
  };

  const handlePuzzleClose = () => {
    setShowPuzzleModal(false);
  };

  return (
    <section className="bg-gray-50 py-20 px-8 md:pt-32 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="animate-fade-in-up text-5xl lg:text-6xl font-bold mb-6">
            Get In
            <br />
            Touch With Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-300 ">
            Explore our commitment to exceptional customer support. Our team is
            ready to assist you around the clock, ensuring a smooth and reliable
            experience with IntarvAS services.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-left delay-300">
            <h2 className="text-2xl font-bold mb-6">How can we help you?</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your First and Last name"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@intarvas.com"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234700134000"
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Services */}
              <div>
                <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                  Services <span className="text-red-500">*</span> <span className="text-xs text-gray-500">(Select what you are interested in)</span>
                </label>
                <div className="border border-gray-200 rounded-lg overflow-hidden grid grid-cols-2">
                  {SERVICES.map((service) => {
                    const isSelected = selectedServices.includes(service.name);
                    return (
                      <button
                        key={service.name}
                        type="button"
                        disabled={isLoading}
                        onClick={() => toggleService(service.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors border border-gray-100
                          disabled:cursor-not-allowed disabled:opacity-50
                          ${isSelected
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        <span>{service.name}</span>
                        {isSelected && (
                          <svg className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedServices.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedServices.map(s => (
                      <span key={s} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {s}
                        <button type="button" onClick={() => toggleService(s)} className="hover:text-blue-900">✕</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What can we help you with?"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="A detailed explanation on your request"
                  rows={4}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className="text-center p-3 rounded-lg bg-gray-100">
                  <p className="text-sm font-medium">{statusMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 text-white bg-[#0A0F8F] hover:bg-[#0056b3] transition-colors duration-300 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Info & Map */}
          <div className="space-y-6 animate-fade-in-right delay-500">
            {/* Contact Info Card */}
            <div className=" rounded-3xl p-8 ">
              <h2 className="text-2xl font-bold mb-6">
                Prefer a direct approach?
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact Us</h3>
                    <p className="text-gray-600">07001340000</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">support@intarvas.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri 9.am-5pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card with Overlay */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg relative">
              {/* Google Maps Embed */}
              <div className="h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9bb!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IntarvAS Office Location - Victoria Island, Lagos"
                ></iframe>

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl w-[300px] md:w-[580px]">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    Visit Our Office
                  </h3>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      <p>Churchgate Tower 2,</p>
                      <p>PC 30 Churchgate Street (formerly Afribank </p>
                      <p>Street) Victoria Island Lagos, Nigeria.</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Churchgate+Tower+2,+30+Churchgate+Street,+Victoria+Island,+Lagos,+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Get direction
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Puzzle Modal */}
      <PuzzleModal
        isOpen={showPuzzleModal}
        puzzle={puzzle}
        onClose={handlePuzzleClose}
        onSuccess={handlePuzzleSuccess}
      />
      {/* <ChatWidget/> */}
    </section>
  );
};

export default ContactUsSection;
