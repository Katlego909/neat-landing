// components/ProviderBenefits.jsx
import React from 'react';
import {
    CreditCardIcon,
    BriefcaseIcon,
    MegaphoneIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Benefit items data
const benefits = [
    {
        id: 1,
        Icon: CreditCardIcon,
        title: 'Secure, Fast Payouts',
        description:
            'We hold customer payments in escrow and release your revenue instantly after each completed job, so you always get paid on time.',
    },
    {
        id: 2,
        Icon: BriefcaseIcon,
        title: 'Grow Your Business',
        description:
            'Tap into our rapidly expanding user base and boost your bookings with in-app promotions and visibility.',
    },
    {
        id: 3,
        Icon: MegaphoneIcon,
        title: 'Dedicated Support',
        description:
            'Our Partner Success team is on-call to help you with onboarding, dispute resolution, and optimizing your profile.',
    },
];

// Simple phone mockup component
const PhoneMockup = ({ src, alt, className, style }) => (
    <img
        src={src}
        alt={alt}
        className={`rounded-xl ${className}`}
        style={style}
    />
);

// Single benefit rendering
const BenefitItem = ({ Icon, title, description }) => (
    <li className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
            <Icon className="h-6 w-6 text-green-600" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm mt-1 text-gray-700">{description}</p>
        </div>
    </li>
);

export default function ProviderBenefits() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto px-4 max-w-[1100px] lg:flex lg:items-center lg:space-x-4">

                {/* Left Column: Phone Mockup */}
                <div className="relative w-full lg:w-1/2 flex justify-start px-4 lg:px-0 mb-8 lg:mb-0">
                    <PhoneMockup
                        src="/images/provider-app.png"
                        alt="Provider Dashboard"
                        className="w-80 "
                    />
                </div>

                {/* Right Column: Benefits & CTA */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">
                        Benefits of Becoming a Neat Partner
                    </h2>

                    <ul className="space-y-6">
                        {benefits.map(item => (
                            <BenefitItem
                                key={item.id}
                                Icon={item.Icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>

                    <div className="mt-12">
                        <Link
                            href={'/provider-signup'}
                            type="button"
                            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md text-base font-medium hover:bg-green-700 transition"
                        >
                            Apply Now
                            <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
