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

            // Apps Script requires strict CORS settings or Simple Request to work perfectly.
            // Using 'no-cors' mode sends the request but returns an Opaque response.
            // This prevents us from reading the status, but guarantees the request is sent without 
            // the browser blocking it due to missing CORS headers on 302 redirects.
            // This is the most reliable way for simple forms.
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Since mode is no-cors, we assume success if no network error occurred.
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setTimeout(() => setSuccess(false), 5000);

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
