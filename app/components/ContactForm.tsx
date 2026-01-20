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

    const [submitType, setSubmitType] = useState<'whatsapp' | 'email'>('whatsapp');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const phoneNumber = "27717438989"; // Sharo Bakery WhatsApp
        const emailAddress = "sharongazu@icloud.com"; // Sharo Bakery Email

        if (submitType === 'whatsapp') {
            const text = `*New Contact Form Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone || "Not provided"}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
            window.open(whatsappUrl, '_blank');
        } else {
            const subject = encodeURIComponent(`${formData.subject} - Inquiry from ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`
            );
            window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
        }

        setSuccess(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });

        setIsSubmitting(false);
        setTimeout(() => setSuccess(false), 5000);
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

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <button
                        type="submit"
                        onClick={() => setSubmitType('whatsapp')}
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-70"
                    >
                        <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        WhatsApp
                    </button>

                    <button
                        type="submit"
                        onClick={() => setSubmitType('email')}
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-sharo-gold bg-transparent py-3 font-semibold text-sharo-brown transition-colors hover:bg-sharo-gold/10 disabled:opacity-70"
                    >
                        <svg fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                    </button>
                </div>
            </form>
        </div>
    );
}
