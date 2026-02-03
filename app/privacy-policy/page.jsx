// components/PrivacyPolicy.jsx
"use client";

import React from 'react';

const policySections = [
    {
        title: 'Effective Date',
        content: 'June 28, 2025',
        isParagraph: true,
    },
    {
        title: '1. Information We Collect',
        items: [
            { label: 'Personal Information', text: 'Name, email address, phone number, and address when you create an account or book a service.' },
            { label: 'Usage Data', text: 'Information about how you use our website and services.' },
            { label: 'Payment Information', text: 'Payment details are processed securely by our payment providers and are not stored on our servers.' },
        ],
    },
    {
        title: '2. How We Use Your Information',
        items: [
            { text: 'To provide and maintain our services' },
            { text: 'To process bookings and payments' },
            { text: 'To communicate with you about your account or services' },
            { text: 'To improve our website and offerings' },
            { text: 'To comply with legal obligations' },
        ],
    },
    {
        title: '3. Sharing Your Information',
        items: [
            { text: 'With service providers to fulfill your bookings' },
            { text: 'With third-party vendors for payment processing and analytics' },
            { text: 'When required by law or to protect our rights' },
        ],
    },
    {
        title: '4. Your Choices',
        items: [
            { text: 'Update or delete your account information at any time' },
            { text: 'Opt out of marketing communications via unsubscribe link in emails' },
        ],
    },
    {
        title: '5. Security',
        paragraph: 'We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the Internet is 100% secure.',
    },
    {
        title: '6. Children’s Privacy',
        paragraph: 'Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.',
    },
    {
        title: '7. Changes to This Policy',
        paragraph: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.',
    },
    {
        title: '8. Contact Us',
        paragraph: (
            <>If you have any questions about this Privacy Policy, contact us at <a href="mailto:support@neat.com" className="text-green-700 underline">support@neat.com</a>.</>
        ),
    },
];

export default function PrivacyPolicy() {
    return (
        <article className="prose lg:prose-lg max-w-3xl mx-auto py-16 px-4">
            <header>
                <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">
                    Neat (<em>“we”, “us”, “our”</em>) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Effective Date</h2>
                <p className="text-gray-700 mb-6">June 28, 2025</p>

                {policySections.slice(1).map((sec, idx) => (
                    <div key={idx} className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">{sec.title}</h3>

                        {sec.paragraph && <p className="text-gray-700 mb-4">{sec.paragraph}</p>}

                        {sec.isParagraph && <p className="text-gray-700 mb-4">{sec.content}</p>}

                        {sec.items && (
                            <ul className="list-disc pl-6 text-gray-700">
                                {sec.items.map((item, i) => (
                                    <li key={i} className="mb-2">
                                        {item.label && <strong>{item.label}:</strong>} {item.text}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>
        </article>
    );
}
