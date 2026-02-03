// components/ProviderHeroSection.jsx
"use client"
import { useEffect, useRef } from "react";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ProviderHeroSection() {
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.animate(
                [
                    { transform: "translateY(0px)" },
                    { transform: "translateY(-16px)" },
                    { transform: "translateY(0px)" },
                ],
                {
                    duration: 3500,
                    iterations: Infinity,
                    easing: "ease-in-out",
                }
            );
        }
    }, []);

    return (
        <section id="provider-hero" className="scroll-mt-16 bg-green-50 py-24">
            <div className="mx-auto px-4 md:flex md:items-center md:justify-between max-w-[1100px]">
                {/* Text Column */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                        Power Your Business with Neat
                    </h1>
                    <p className="text-lg text-gray-700">
                        Join our network of top-rated professionals and earn more by offering cleaning, repairs, gardening, and more to customers nearby.
                    </p>

                    {/* Key Benefits */}
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                            <span className="ml-3 text-gray-800">
                                <strong>Instant Payouts:</strong> Receive payments directly to your account immediately after job completion.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                            <span className="ml-3 text-gray-800">
                                <strong>Full Control:</strong> Set your own availability, pricing, and service areas to fit your schedule.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                            <span className="ml-3 text-gray-800">
                                <strong>Dedicated Support:</strong> Get personalized help from our Partner Success team whenever you need it.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Image Column */}
                <div className="mt-10 md:mt-0 flex justify-center ">
                    <img
                        ref={imgRef}
                        src="/images/provider.png"
                        alt="App mockup showing provider dashboard"
                        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl rounded-md"
                    />
                </div>
            </div>
        </section>
    );
}
