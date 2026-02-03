// components/FAQs.jsx
"use client"
import { useEffect } from 'react';

const faqList = [
    {
        q: 'How do I register as a service provider?',
        a: 'To register as a service provider, click “Become a Provider” or “Sign up as Provider,” fill in your details, submit required documents, and wait for verification. Once approved, you can list your services.',
    },
    {
        q: 'How do I book a service?',
        a: 'Browse available services, select your desired provider and time slot, confirm details, and complete payment securely.',
    },
    {
        q: 'What payment methods are accepted?',
        a: 'We accept credit/debit cards with bank-grade encryption and select crypto wallets where available.',
    },
    {
        q: 'How do I become a top-rated provider?',
        a: 'Provide excellent service, respond promptly, maintain good ratings, and complete jobs reliably. Encourage satisfied customers to leave reviews.',
    },
    {
        q: 'What is your cancellation policy?',
        a: 'You can cancel or reschedule up to 24 hours before your appointment without penalty. Later cancellations may incur fees; see full policy in Terms & Conditions.',
    },
];

export default function FAQs() {
    useEffect(() => {
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('svg');
                if (answer.classList.contains('hidden')) {
                    document.querySelectorAll('.faq-answer').forEach(el => {
                        if (!el.classList.contains('hidden')) {
                            el.classList.add('hidden');
                            const btn2 = el.previousElementSibling;
                            btn2.querySelector('svg')?.classList.remove('rotate-180');
                        }
                    });
                    answer.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                } else {
                    answer.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                }
            });
        });
    }, []);

    return (
        <section id="faqs" className="scroll-mt-16 py-24">
            <div className="mx-auto px-4 max-w-[1100px] duration-800 ease-out">
                <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
                <p className="text-gray-600 text-center mb-8 text-md">
                    Have questions? We have answers!
                </p>
                <div className="max-w-2xl mx-auto space-y-4">
                    {faqList.map(({ q, a }) => (
                        <div key={q} className="border border-gray-200 rounded hover:shadow-lg transition-shadow duration-300">
                            <button className="w-full flex justify-between items-center px-4 py-3 text-left faq-question">
                                <span className="font-medium">{q}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="px-4 py-2 faq-answer hidden">
                                <p className="text-gray-600">{a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
