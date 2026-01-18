"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Google Apps Script Web App URL
            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6F_BPeq9zPJutJ7eSWppOyJEKzH97eu0a6A3iSyX6Kab5jJ8Q_szd2lBOsYUzrvp_/exec";

            // Determine if we are sending JSON or FormData
            // Apps Script doPost with JSON payload is best handled with text/plain to avoid CORS preflight issues sometimes,
            // or we use 'no-cors' mode but then we can't read response. 
            // Standard fetch with simple POST often works best.

            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                // specific content type for Apps Script to handle JSON.parse
                // Using 'no-cors' allows the request to go through from browser to Google Script
                // but obtaining the response status is opaque. However, for a contact form, 
                // fire-and-forget (or assume success if no network error) is often acceptable 
                // if we want to avoid complex CORS setups.
                // BUT, my script has `ContentService.createTextOutput`, so it SHOULD support CORS if I added headers?
                // Actually my script didn't explicitly add Access-Control-Allow-Origin headers in doOptions.
                // The safest way from a client-side component to Apps Script is sending valid JSON 
                // with 'application/json' (triggering CORS) OR 'text/plain' (simple request, no CORS preflight).
                // Let's use 'text/plain' to trick it into a simple request, but the body is JSON.
                // My script does JSON.parse(e.postData.contents), which works for text/plain too!
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Even with text/plain, if headers aren't perfect, response might be opaque or have issues.
                // But usually wait for it to complete.
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => setSuccess(false), 5000);
            } else {
                throw new Error("Network response was not ok");
            }

        } catch (error) {
            console.error("Error submitting form", error);
            // Even if CORS fails to return a readable response, the request often reached the server.
            // But let's assume if it throws it failed.
            // For now, let's treat "opaque" responses or successful fetches as success for the user UX 
            // unless we strictly need to read the "success" JSON from the script.
            // Given the 'text/plain' hack usually avoids CORS preflight, it should return 200 OK.

            // Fallback for user feedback
            alert("Something went wrong. Please try again or contact us directly on WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="rounded-lg bg-white p-6 shadow-md md:p-8">
            {success ? (
                <div className="mb-6 rounded-md bg-green-50 p-4 text-green-800">
                    <p className="font-semibold">Thank you for reaching out!</p>
                    <p>We've received your message and will get back to you soon.</p>
                </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block font-semibold text-sharo-dark"
                    >
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-gray-300 p-3 focus:border-sharo-gold focus:outline-none focus:ring-1 focus:ring-sharo-gold"
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block font-semibold text-sharo-dark"
                    >
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-gray-300 p-3 focus:border-sharo-gold focus:outline-none focus:ring-1 focus:ring-sharo-gold"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block font-semibold text-sharo-dark"
                    >
                        Phone (Optional)
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 p-3 focus:border-sharo-gold focus:outline-none focus:ring-1 focus:ring-sharo-gold"
                        placeholder="+27 00 000 0000"
                    />
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className="mb-2 block font-semibold text-sharo-dark"
                    >
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-gray-300 p-3 focus:border-sharo-gold focus:outline-none focus:ring-1 focus:ring-sharo-gold"
                        placeholder="How can we help?"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block font-semibold text-sharo-dark"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-md border border-gray-300 p-3 focus:border-sharo-gold focus:outline-none focus:ring-1 focus:ring-sharo-gold"
                        placeholder="Your message here..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-sharo-gold py-3 font-semibold text-sharo-brown transition-opacity hover:opacity-90 disabled:opacity-70"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}
