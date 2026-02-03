// components/HeroSection.jsx
"use client"
import { useEffect, useRef } from "react";
import Button from './Button';

export default function HeroSection() {
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.animate(
                [
                    { transform: "translateY(0px)" },
                    { transform: "translateY(-16px)" },
                    { transform: "translateY(0px)" }
                ],
                {
                    duration: 3500,
                    iterations: Infinity,
                    easing: "ease-in-out"
                }
            );
        }
    }, []);

    return (
        <section id="hero" className="scroll-mt-16 bg-green-50 py-24">
            <div className="mx-auto px-4 md:flex md:items-center md:justify-between max-w-[1100px] duration-800 ease-out">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 transform transition-transform duration-800 ease-out">
                        Book Trusted Home Services in Your Area
                    </h1>
                    <p className="text-md sm:text-xl text-gray-700 transform  duration-800 ease-out">
                        Connect with vetted professionals for cleaning, repairs, gardening, and more right from your phone
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <Button href="/#get-started" variant="primary">
                            Book a Service
                        </Button>
                        <Button href="/service-provider" variant="secondary">
                            Become a Provider
                        </Button>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 flex justify-center">
                    <img
                        ref={imgRef}
                        src="/images/app-mockup.png"
                        alt="App mockup showing services"
                        className="max-w-s sm:max-w-sm md:max-w-md lg:max-w-lg duration-800 ease-out drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
