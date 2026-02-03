// components/GetStarted.jsx
"use client"
import { useEffect, useRef } from "react";

export default function GetStarted() {
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.animate(
                [
                    { transform: "translateY(0px)" },
                    { transform: "translateY(-12px)" },
                    { transform: "translateY(0px)" }
                ],
                {
                    duration: 3000,
                    iterations: Infinity,
                    easing: "ease-in-out"
                }
            );
        }
    }, []);

    return (
        <section id="get-started" className="scroll-mt-16 bg-secondary py-24">
            <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-[1100px] duration-800 ease-out">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold">Get connected no matter where you are</h2>
                    <p className="text-gray-700 text-md">Become your own boss, choose your own schedule, and work in your preferred areas.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" aria-label="Get it on Google Play">
                            <img
                                src="images/google.png"
                                alt="Get it on Google Play"
                                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                        <a href="#" aria-label="Download on the App Store">
                            <img
                                src="images/apple.png"
                                alt="Download on the App Store"
                                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 flex justify-center">
                    <img
                        ref={imgRef}
                        src="/images/app-mockup.png"
                        alt="App preview"
                        className="max-w-xs sm:max-w-sm md:max-w-sm drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
