// components/ProviderFAQs.jsx
"use client"
import { useEffect } from 'react';

const faqList = [
    {
        q: 'How do I register as a service provider?',
        a: 'Click “Become a Provider” or “Sign up as Provider,” complete your profile, upload required documents (ID, proof of address, professional certifications), and submit for verification. You’ll get an email when your account is approved.',
    },
    {
        q: 'What information appears on my public profile?',
        a: 'Your name, photo, service categories, pricing, ratings, completed jobs count, years of experience, and a brief bio go live. Make sure your bio highlights your specialties and certifications.',
    },
    {
        q: 'How and when do I get paid?',
        a: 'Payments are held in escrow and released instantly to your linked bank account or digital wallet once you mark a job “Completed.” Withdrawals happen in real-time—no weekly batching or delays.',
    },
    {
        q: 'Can I set my own availability and pricing?',
        a: 'Yes—you control your hourly or flat-rate pricing and block off dates/times when you’re unavailable. You can also offer add-on services at custom rates.',
    },
    {
        q: 'What happens in case of a dispute or refund request?',
        a: 'Our partner success team reviews disputes within 24 hours. If a refund is approved, funds are returned to the customer and you keep 80% of the job total as goodwill. For full details, see our Dispute Policy.',
    },
    {
        q: 'Do I need insurance or certifications?',
        a: 'Some categories (e.g. electrical, gas work) legally require you to hold valid trade licenses and insurance. Upload these documents during sign-up; your account stays inactive until we verify them.',
    },
    {
        q: 'How can I improve my ratings and visibility?',
        a: 'Respond quickly to incoming requests, deliver high-quality work, communicate proactively in chat, and ask satisfied customers to leave a review. Higher ratings unlock “Top Pro” badges and more booking priority.',
    },
    {
        q: 'Can I expand my service area later?',
        a: 'Absolutely—go to your Profile → Service Areas, add new cities or postal codes, then set travel fees if needed. Your updated coverage shows instantly to nearby customers.',
    },
];

export default function ProviderFAQs() {
    useEffect(() => {
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('svg');
                if (answer.classList.contains('hidden')) {
                    document.querySelectorAll('.faq-answer').forEach(el => {
                        if (!el.classList.contains('hidden')) {
                            el.classList.add('hidden');
                            el.previousElementSibling.querySelector('svg')?.classList.remove('rotate-180');
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
                <h2 className="text-3xl font-bold text-center mb-8">FAQs for Service Providers</h2>
                <p className="text-gray-600 text-center mb-8 text-md">
                    Everything you need to know to succeed on our platform
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
