"use client";

import {
    MagnifyingGlassIcon,
    CalendarDaysIcon,
    CreditCardIcon,
} from "@heroicons/react/24/outline";

const steps = [
    {
        title: "Search Services",
        desc: "Instantly browse vetted pros in your area – from car detailing to home repairs.",
        icon: MagnifyingGlassIcon,
    },
    {
        title: "Book in 60 Seconds",
        desc: "Pick a time and confirm in a few clicks – no back-and-forth needed.",
        icon: CalendarDaysIcon,
    },
    {
        title: "Pay Securely",
        desc: "Pay with card or crypto – all transactions are end-to-end encrypted.",
        icon: CreditCardIcon,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    How it Works
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    From search to secure payment, getting help is fast and effortless.
                </p>

                <div className="relative flex flex-col md:flex-row items-center justify-center gap-16">
                    {/* Connector line */}
                    {/* <div className="hidden md:block absolute top-[52px] left-0 right-0 mx-auto w-[80%] z-0">
                        <svg
                            className="w-full h-6"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <line
                                x1="0"
                                y1="5"
                                x2="100"
                                y2="5"
                                stroke="#D1D5DB"
                                strokeWidth="1.5"
                                strokeDasharray="4,6"
                            />
                        </svg>
                    </div> */}

                    {steps.map(({ title, desc, icon: Icon }, i) => (
                        <div
                            key={i}
                            className="z-10 max-w-xs text-center bg-tertiary rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6"
                        >
                            <div className="relative mb-4 flex items-center justify-center">
                                <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center shadow">
                                    <Icon className="w-12 h-12 text-primary" />
                                </div>
                                <span className="absolute top-0 right-18 bg-green-500 text-white text-xl font-semibold-200 rounded-full px-4 py-2 ">
                                    {i + 1}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-600">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
