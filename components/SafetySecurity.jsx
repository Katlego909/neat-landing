// components/SafetySecurity.jsx
'use client'

import {
    StarIcon,
    UserGroupIcon,
    ClockIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export default function SafetySecurity() {
    const features = [
        {
            icon: <StarIcon className="w-12 h-12 text-primary mb-4" />,
            label: 'User ratings & reviews',
        },
        {
            icon: <UserGroupIcon className="w-12 h-12 text-primary mb-4" />,
            label: 'Background checks',
        },
        {
            icon: <ClockIcon className="w-12 h-12 text-primary mb-4" />,
            label: '2+ Years of experience',
        },
        {
            icon: <ShieldCheckIcon className="w-12 h-12 text-primary mb-4" />,
            label: 'Payment Protection',
        },
    ]

    return (
        <section
            id="safety-security"
            className="scroll-mt-16 bg-secondary py-24"
        >
            <div className="mx-auto px-4 flex flex-col items-center justify-between max-w-[1100px] duration-800 ease-out">
                <div className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold">Safety &amp; Security</h2>
                    <p className="text-gray-700 text-md">
                        Connecting you with trustworthy professionals
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
                    {features.map(({ icon, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center bg-white p-6 rounded-lg shadow transform duration-800 ease-out"
                        >
                            {icon}
                            <p className="text-center font-medium text-gray-800">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
