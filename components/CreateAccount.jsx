"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    UserIcon,
    BriefcaseIcon,
    CheckIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

const cards = [
    {
        title: "Customer Account",
        features: ["Easy booking", "Secure payments", "24/7 support"],
        icon: UserIcon,
        bulletIcon: CheckIcon,
        href: "/signup-customer",
        btnText: "Sign up as Customer",
        border: "border-green-600",
        btnClass: "bg-primary text-white hover:bg-green-700",
        iconColor: "text-primary bg-green-50",
        bulletColor: "text-green-600",
        isCustomer: true,
    },
    {
        title: "Service Provider",
        features: ["Manage bookings", "Insights dashboard", "Grow your business"],
        icon: BriefcaseIcon,
        bulletIcon: CheckIcon,
        href: "/signup-provider",
        btnText: "Sign up as Provider",
        border: "border-gray-300",
        btnClass: "bg-green-100 text-primary hover:bg-green-200",
        iconColor: "text-primary bg-green-50",
        bulletColor: "text-green-600",
        isCustomer: false,
    },
];

export default function CreateAccount() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error
    const [errorMsg, setErrorMsg] = useState("");
    const modalRef = useRef(null);
    const previouslyFocused = useRef(null);

    // Lock scroll when modal open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    // Handle ESC key and focus trap
    useEffect(() => {
        function onKeydown(e) {
            if (e.key === "Escape") closeModal();
            if (e.key === "Tab" && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll(
                    'a[href], button:not([disabled]), textarea, input'
                );
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
        }
        if (isOpen) {
            previouslyFocused.current = document.activeElement;
            document.addEventListener("keydown", onKeydown);
            // move focus into modal
            setTimeout(() => {
                modalRef.current?.querySelector('input')?.focus();
            }, 0);
        }
        return () => {
            document.removeEventListener("keydown", onKeydown);
            previouslyFocused.current?.focus();
        };
    }, [isOpen]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setEmail("");
        setStatus("idle");
        setErrorMsg("");
    };

    const handleNotify = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");
        try {
            // Simulate API call
            await new Promise((res) => setTimeout(res, 1000));
            setStatus("success");
        } catch {
            setErrorMsg("Something went wrong. Please try again.");
            setStatus("error");
        }
    };

    return (
        <>
            <section id="create-account" className="scroll-mt-16 bg-gray-50 py-24">
                <div className="mx-auto px-4 text-center max-w-[1100px]">
                    <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
                        Create Your Account
                    </h2>
                    <p className="text-gray-600 mb-12 text-md">
                        Start your journey with Neat. Quick, easy registration for customers
                        and providers.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {cards.map((c) => {
                            const Icon = c.icon;
                            const Bullet = c.bulletIcon;
                            return (
                                <div
                                    key={c.title}
                                    className={`border-2 ${c.border} rounded-2xl p-10 flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300`}
                                >
                                    <div
                                        className={`rounded-full p-4 mb-6 drop-shadow-md ${c.iconColor}`}
                                    >
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                        {c.title}
                                    </h3>
                                    <ul className="text-left mb-8 space-y-3">
                                        {c.features.map((feat) => (
                                            <li key={feat} className="flex items-center">
                                                <Bullet
                                                    className={`w-6 h-6 mr-3 flex-shrink-0 ${c.bulletColor}`}
                                                />
                                                <span className="text-gray-700 text-base">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {c.isCustomer ? (
                                        <button
                                            onClick={openModal}
                                            className={`px-4 py-2 ${c.btnClass} rounded-md font-semibold text-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300`}
                                        >
                                            {c.btnText}
                                        </button>
                                    ) : (
                                        <Link
                                            href={c.href}
                                            className={`px-6 py-3 ${c.btnClass} rounded-md font-semibold text-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300`}
                                        >
                                            {c.btnText}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
                    aria-hidden="true"
                    onClick={closeModal}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="notify-title"
                        ref={modalRef}
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center bg-gradient-to-r from-green-500 to-green-300 px-6 py-4">
                            <h3 id="notify-title" className="text-2xl font-bold text-white">
                                Notify Me
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-white hover:text-gray-200"
                                aria-label="Close modal"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-6">
                            {/* App info section */}
                            <div className="mb-6 bg-green-50 rounded-lg p-4 text-center">
                                <h4 className="text-lg font-semibold text-primary mb-2">What is Neat?</h4>
                                <p className="text-gray-700 text-sm">
                                    Neat is your all-in-one platform for booking trusted service providers in your area.
                                    Whether you need cleaning, repairs, or more, Neat makes it easy to find, book, and pay securely—all in one place.
                                </p>
                                <p className="text-gray-700 text-sm mt-2">
                                    Get notified when we launch and be the first to experience hassle-free bookings and exclusive offers!
                                </p>
                            </div>
                            {status === "idle" && (
                                <form
                                    action="https://formsubmit.co/info.neatapp@gmail.com"
                                    method="POST"
                                    className="space-y-5"
                                >
                                    <input type="hidden" name="_subject" value="Notify Me - App Launch" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                                    <label className="block text-left">
                                        <span className="text-gray-700 font-medium">
                                            Enter your email below
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="mt-2 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                            placeholder="you@example.com"
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200"
                                    >
                                        Notify Me
                                    </button>
                                </form>
                            )}
                            {status === "success" && (
                                <div className="text-center space-y-4">
                                    <CheckIcon className="mx-auto w-12 h-12 text-green-500" />
                                    <p className="text-green-600 font-medium text-lg">
                                        Thanks! We'll notify you when signup opens.
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="text-center space-y-4">
                                    <p className="text-red-600 font-medium text-lg">{errorMsg}</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
