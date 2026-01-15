"use client";

import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                        aria-expanded={openIndex === index}
                    >
                        <span className="text-lg font-semibold text-sharo-dark">
                            {faq.question}
                        </span>
                        <span
                            className={`transform text-sharo-gold transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                        >
                            {/* Simple chevron icon using SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </span>
                    </button>

                    <div
                        className={`transition-[max-height] duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
                            } overflow-hidden`}
                    >
                        <div className="border-t border-gray-100 bg-gray-50 p-6 text-gray-700">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
