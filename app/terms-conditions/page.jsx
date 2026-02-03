// components/TermsAndConditions.jsx
"use client";

import React from 'react';

const termsSections = [
    {
        title: '1. Introduction',
        content: (
            <>These Terms & Conditions govern your use of Neat’s website and services. By accessing or using our platform, you agree to be bound by these terms.</>
        ),
    },
    {
        title: '2. Acceptance of Terms',
        content: (
            <>You must be at least 18 years old to use our services. By creating an account, you affirm that you meet this requirement and agree to comply with all terms.</>
        ),
    },
    {
        title: '3. Account Registration',
        items: [
            'Provide accurate and complete information when registering.',
            'Maintain the confidentiality of your account credentials.',
            'Notify us immediately of any unauthorized access to your account.',
        ],
    },
    {
        title: '4. User Conduct',
        content: (
            <>Users may not engage in unlawful, abusive, or disruptive behavior on the platform. Prohibited conduct includes impersonation, harassment, or posting illegal content.</>
        ),
    },
    {
        title: '5. Service Providers',
        content: (
            <>Providers are independent contractors and set their own rates and schedules. Neat does not employ service providers and is not responsible for their actions.</>
        ),
    },
    {
        title: '6. Payments & Refunds',
        items: [
            'All payments are processed via our third-party payment gateway.',
            'Fees are held in escrow and released upon service completion.',
            'Refund requests are handled according to our Refund Policy.',
        ],
    },
    {
        title: '7. Intellectual Property',
        content: (
            <>All content on Neat (text, graphics, logos) is our property or licensed to us. You may not reproduce or distribute any material without our prior written consent.</>
        ),
    },
    {
        title: '8. Limitation of Liability',
        content: (
            <>Neat is not liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability will not exceed the fees paid by you in the previous six months.</>
        ),
    },
    {
        title: '9. Indemnification',
        content: (
            <>You agree to indemnify and hold Neat harmless from any claims, losses, or damages resulting from your violation of these Terms.</>
        ),
    },
    {
        title: '10. Governing Law',
        content: (
            <>These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts located in [City, Country].</>
        ),
    },
    {
        title: '11. Changes to Terms',
        content: (
            <>We may update these Terms at any time. We will post the updated Terms on this page and notify you of significant changes via email.</>
        ),
    },
    {
        title: '12. Contact Information',
        content: (
            <>If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:support@neat.com" className="text-green-700 underline">support@neat.com</a>.</>
        ),
    },
];

export default function TermsAndConditions() {
    return (
        <article className="prose lg:prose-lg max-w-3xl mx-auto py-16 px-4">
            <header>
                <h1 className="text-4xl font-extrabold mb-4">Terms & Conditions</h1>
                <p className="text-gray-600 mb-8">
                    Please read these terms carefully before using our website and services.
                </p>
            </header>

            {termsSections.map((sec, idx) => (
                <section key={idx} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">{sec.title}</h2>
                    {sec.content && <p className="text-gray-700 mb-4">{sec.content}</p>}
                    {sec.items && (
                        <ul className="list-disc pl-6 text-gray-700">
                            {sec.items.map((item, i) => (
                                <li key={i} className="mb-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </article>
    );
}
