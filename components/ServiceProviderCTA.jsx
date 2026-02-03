// components/ServiceProviderCTA.jsx
"use client"
import Link from 'next/link';

export default function ServiceProviderCTA() {
    return (
        <section id="become-provider" className="bg-primary scroll-mt-16 py-24">
            <div className="mx-auto px-4 md:flex md:items-center md:justify-between max-w-[1100px]  duration-800 ease-out">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl text-white font-bold">Want to apply as a Service Provider?</h2>
                    <p className="text-gray-300 text-md">Become your own boss, choose your own schedule, and work in your preferred areas.</p>

                    <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-gray-100 text-md mt-4">
                        <li className="text-white flex items-center">✔ Fast payouts</li>
                        <li className="text-white flex items-center">✔ Flexible hours</li>
                        <li className="text-white flex items-center">✔ No joining fees</li>
                    </ul>

                    <Link
                        href="/service-provider"
                        className="inline-block px-6 py-3 bg-white text-black rounded font-medium hover:bg-green-700 hover:text-white  transition-colors transform hover:scale-105"
                    >
                        Apply Now
                    </Link>
                </div>
                <div className="mt-8 md:mt-0 flex justify-center shadow-sm">
                    <img
                        src="/images/app-product.png"
                        alt="Provider app mockup"
                        className="sm:max-w-md md:max-w-md transform t duration-800 ease-out"
                    />
                </div>
            </div>
        </section>
    );
}
