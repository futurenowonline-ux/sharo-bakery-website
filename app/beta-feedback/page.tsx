"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function BetaFeedbackPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        designRating: "",
        feels: "",
        designComments: "",
        products: [] as string[],
        productComments: "",
        navRating: "",
        pages: "",
        navComments: "",
        device: "",
        mobileRating: "",
        mobileComments: "",
        contact: "",
        contactComments: "",
        overall: "",
        priority: "",
        suggestions: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checkbox = e.target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                products: checkbox.checked
                    ? [...prev.products, value]
                    : prev.products.filter(p => p !== value)
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleRatingClick = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: "✓ Thank you! Your feedback has been sent." });
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    designRating: "",
                    feels: "",
                    designComments: "",
                    products: [],
                    productComments: "",
                    navRating: "",
                    pages: "",
                    navComments: "",
                    device: "",
                    mobileRating: "",
                    mobileComments: "",
                    contact: "",
                    contactComments: "",
                    overall: "",
                    priority: "",
                    suggestions: "",
                });
            } else {
                const errorData = await response.json();
                const specificError = errorData.error || errorData.message || "Submission failed";
                setStatus({ type: 'error', message: `Error: ${specificError}` });
            }
        } catch (error) {
            setStatus({ type: 'error', message: "Failed to connect to the server. Please check your connection." });
        } finally {
            setIsSubmitting(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const SectionTitle = ({ icon, children }: { icon: string, children: React.ReactNode }) => (
        <div className="mb-6 flex items-center text-lg font-semibold text-sharo-brown">
            <div className="mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-sharo-gold text-sm font-bold text-white">
                {icon}
            </div>
            {children}
        </div>
    );

    const RatingGroup = ({ name, currentValue }: { name: string, currentValue: string }) => (
        <div className="mt-2 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
                <button
                    key={num}
                    type="button"
                    onClick={() => handleRatingClick(name, num.toString())}
                    className={`h-11 w-11 rounded-lg border-2 font-semibold transition-all ${currentValue === num.toString()
                        ? "border-sharo-brown bg-sharo-brown text-white"
                        : "border-gray-200 bg-white text-gray-500 hover:border-sharo-gold hover:bg-sharo-gold/10"
                        }`}
                >
                    {num}
                </button>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-[#FFF8F3] py-8 px-4 md:py-16">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg border border-[#E8DCC8]">
                {/* Header */}
                <div className="border-b-4 border-sharo-gold p-8 text-center md:pb-6">
                    <h1 className="mb-2 text-2xl font-bold text-sharo-brown md:text-3xl">
                        🥐 Sharo Bakery Feedback
                    </h1>
                    <p className="text-sm text-gray-600">
                        Help us improve your bakery website! Your feedback is valuable.
                    </p>
                </div>

                <div className="p-8">
                    {status && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`mb-8 rounded-lg p-4 text-center font-medium ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                }`}
                        >
                            {status.message}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* Section 1: Information */}
                        <section>
                            <SectionTitle icon="1">Your Information</SectionTitle>
                            <div className="space-y-4">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Design */}
                        <section>
                            <SectionTitle icon="2">Design & Appearance</SectionTitle>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        How do you feel about the overall look and feel of the website?
                                    </label>
                                    <RatingGroup name="designRating" currentValue={formData.designRating} />
                                    <p className="mt-2 text-xs text-gray-500 italic">1 = Not great, 5 = Excellent</p>
                                </div>
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-gray-700">
                                        Does the website feel like Sharo Bakery to you?
                                    </label>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'feels-yes', val: 'yes', label: 'Yes, it represents Sharo Bakery well' },
                                            { id: 'feels-somewhat', val: 'somewhat', label: 'Somewhat, but could be improved' },
                                            { id: 'feels-no', val: 'no', label: "Not really, doesn't feel like Sharo" }
                                        ].map(opt => (
                                            <div key={opt.id} className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    id={opt.id}
                                                    name="feels"
                                                    value={opt.val}
                                                    checked={formData.feels === opt.val}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 accent-sharo-brown"
                                                    required
                                                />
                                                <label htmlFor={opt.id} className="text-sm text-gray-700">{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Design Feedback (Optional)</label>
                                    <textarea
                                        name="designComments"
                                        value={formData.designComments}
                                        onChange={handleChange}
                                        placeholder="Colors, fonts, logo, layout... anything that stands out?"
                                        rows={3}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Products */}
                        <section>
                            <SectionTitle icon="3">Products & Information</SectionTitle>
                            <div className="space-y-6">
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-gray-700">Are the products described accurately?</label>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'prod-bread', val: 'bread', label: 'Brown health bread description is accurate' },
                                            { id: 'prod-sandwiches', val: 'sandwiches', label: 'Sandwich options are correct' },
                                            { id: 'prod-cinnamon', val: 'cinnamon', label: 'Cinnamon buns info is accurate' },
                                            { id: 'prod-missing', val: 'missing', label: "There's a product missing" }
                                        ].map(opt => (
                                            <div key={opt.id} className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    id={opt.id}
                                                    name="products"
                                                    value={opt.val}
                                                    checked={formData.products.includes(opt.val)}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 accent-sharo-brown rounded"
                                                />
                                                <label htmlFor={opt.id} className="text-sm text-gray-700">{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Product Details Feedback (Optional)</label>
                                    <textarea
                                        name="productComments"
                                        value={formData.productComments}
                                        onChange={handleChange}
                                        placeholder="Anything about pricing, descriptions, or products?"
                                        rows={3}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Navigation */}
                        <section>
                            <SectionTitle icon="4">Navigation & Features</SectionTitle>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Was it easy to navigate the website?</label>
                                    <RatingGroup name="navRating" currentValue={formData.navRating} />
                                    <p className="mt-2 text-xs text-gray-500 italic">1 = Very confusing, 5 = Very easy</p>
                                </div>
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-gray-700">Can you find all the pages you expect?</label>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'pages-yes', val: 'yes', label: 'Yes, all pages are there' },
                                            { id: 'pages-missing', val: 'missing', label: 'No, something is missing' }
                                        ].map(opt => (
                                            <div key={opt.id} className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    id={opt.id}
                                                    name="pages"
                                                    value={opt.val}
                                                    checked={formData.pages === opt.val}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 accent-sharo-brown"
                                                />
                                                <label htmlFor={opt.id} className="text-sm text-gray-700">{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Navigation Feedback (Optional)</label>
                                    <textarea
                                        name="navComments"
                                        value={formData.navComments}
                                        onChange={handleChange}
                                        placeholder="Missing pages? Confusing sections? Links that don't work?"
                                        rows={3}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Mobile */}
                        <section>
                            <SectionTitle icon="5">Mobile Experience</SectionTitle>
                            <div className="space-y-6">
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-gray-700">What device did you test on?</label>
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                        {[
                                            { id: 'device-phone', val: 'phone', label: 'Smartphone' },
                                            { id: 'device-tablet', val: 'tablet', label: 'Tablet' },
                                            { id: 'device-desktop', val: 'desktop', label: 'Desktop' },
                                            { id: 'device-multiple', val: 'multiple', label: 'Multiple' }
                                        ].map(opt => (
                                            <div key={opt.id} className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    id={opt.id}
                                                    name="device"
                                                    value={opt.val}
                                                    checked={formData.device === opt.val}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 accent-sharo-brown"
                                                    required
                                                />
                                                <label htmlFor={opt.id} className="text-sm text-gray-700">{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">How did the website look and work on your device?</label>
                                    <RatingGroup name="mobileRating" currentValue={formData.mobileRating} />
                                    <p className="mt-2 text-xs text-gray-500 italic">1 = Broken/unusable, 5 = Perfect</p>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Mobile Feedback (Optional)</label>
                                    <textarea
                                        name="mobileComments"
                                        value={formData.mobileComments}
                                        onChange={handleChange}
                                        placeholder="Layout issues? Text too small? Buttons hard to click?"
                                        rows={3}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Contact */}
                        <section>
                            <SectionTitle icon="6">Contact & Business Info</SectionTitle>
                            <div className="space-y-6">
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-gray-700">Is your contact information correct?</label>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'contact-yes', val: 'yes', label: 'Yes, all correct' },
                                            { id: 'contact-update', val: 'update', label: 'No, needs updating' },
                                            { id: 'contact-missing', val: 'missing', label: 'Missing something' }
                                        ].map(opt => (
                                            <div key={opt.id} className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    id={opt.id}
                                                    name="contact"
                                                    value={opt.val}
                                                    checked={formData.contact === opt.val}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 accent-sharo-brown"
                                                />
                                                <label htmlFor={opt.id} className="text-sm text-gray-700">{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Contact Info Updates (Optional)</label>
                                    <textarea
                                        name="contactComments"
                                        value={formData.contactComments}
                                        onChange={handleChange}
                                        placeholder="What needs to be updated or added?"
                                        rows={3}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Priority */}
                        <section>
                            <SectionTitle icon="7">Ready to Launch?</SectionTitle>
                            <div className="space-y-6">
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-gray-700">Overall impression?</label>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'overall-launch', val: 'ready', label: 'Ready to launch!' },
                                            { id: 'overall-fixes', val: 'fixes', label: 'Needs some fixes first' },
                                            { id: 'overall-redesign', val: 'redesign', label: 'Needs more work' }
                                        ].map(opt => (
                                            <div key={opt.id} className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    id={opt.id}
                                                    name="overall"
                                                    value={opt.val}
                                                    checked={formData.overall === opt.val}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 accent-sharo-brown"
                                                    required
                                                />
                                                <label htmlFor={opt.id} className="text-sm text-gray-700">{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Top priority to fix? (Optional)</label>
                                    <textarea
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                        placeholder="The one thing that needs attention most..."
                                        rows={3}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">Other suggestions? (Optional)</label>
                                    <textarea
                                        name="suggestions"
                                        value={formData.suggestions}
                                        onChange={handleChange}
                                        placeholder="Any other ideas?"
                                        rows={3}
                                        className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] p-3 text-sm transition-all focus:border-sharo-brown focus:bg-white focus:outline-none focus:ring-4 focus:ring-sharo-brown/5"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Submit Button */}
                        <div className="pt-8 border-t-2 border-gray-100">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-lg bg-sharo-brown py-4 text-center text-lg font-bold text-white shadow-md transition-all hover:bg-sharo-brown/90 hover:shadow-xl active:scale-[0.98] disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Submit Feedback"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
