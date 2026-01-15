
import FAQAccordion from '@/app/components/FAQAccordion';

export default function FAQPage() {
    const faqs = [
        {
            question: "What makes Sharo Bread healthy?",
            answer: "Sharo bread is made with high-quality ingredients, high fiber content, healthy seeds for protein and antioxidants. It beats constipation and helps with digestion."
        },
        {
            question: "Do you offer gluten-free options?",
            answer: "Yes! We offer gluten-free bread options. Please contact us for availability and bulk orders."
        },
        {
            question: "Can I order in bulk?",
            answer: "Absolutely! We supply to retail stores and businesses. Contact us at info@sharobakery.co.za for bulk pricing."
        },
        {
            question: "What is your delivery area?",
            answer: "Currently based in Ulundi, KZN. We supply locally and can arrange delivery for bulk orders."
        },
        {
            question: "Are your products organic?",
            answer: "While we use premium ingredients, please contact us to discuss our sourcing practices."
        },
        {
            question: "How far in advance should I order?",
            answer: "Fresh products daily! Contact us directly for orders and availability."
        }
    ];

    return (
        <div className="min-h-screen bg-sharo-light">
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-3xl px-4 md:px-8">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-sharo-brown md:text-5xl">
                            Frequently Asked Questions
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Everything you need to know about Sharo Bakery
                        </p>
                    </div>

                    <FAQAccordion faqs={faqs} />
                </div>
            </section>
        </div>
    );
}
