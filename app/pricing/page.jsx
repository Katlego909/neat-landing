"use client"
import Link from 'next/link'
export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "$29",
            period: "/month",
            description: "For homeowners booking occasional services (cleaning, handyman, lawn).",
            features: [
                "Post jobs & get bids",
                "Browse vetted local pros",
                "Secure payments & receipts"
            ],
            highlight: false,
        },
        {
            name: "Premium",
            price: "$99",
            period: "/month",
            description: "For small service businesses who want more leads and scheduling tools.",
            features: [
                "Priority lead placement",
                "Online booking & calendar sync",
                "In-app customer messaging",
                "Verified background checks"
            ],
            highlight: true,
        },
        {
            name: "Business",
            price: "Custom",
            period: "",
            description: "Enterprise-grade tools for multi-tech teams and franchises.",
            features: [
                "Dedicated account manager",
                "Team accounts & payroll support",
                "API access & custom integrations",
                "Route optimization & territory management"
            ],
            highlight: false,
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Pricing Plans</h1>
                <p className="text-lg text-gray-700 mb-2">Plans built for homeowners and home-service teams.</p>
                <p className="text-sm text-gray-500">Transparent pricing. Secure payments. Scales with your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={plan.name}
                        className={`
                            relative flex flex-col bg-white rounded-2xl shadow-xl p-8 border
                            ${plan.highlight ? "border-green-600 scale-105 z-10 shadow-2xl" : "border-gray-200"}
                            transition-transform duration-300 hover:scale-105
                        `}
                    >
                        {plan.highlight && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-4 py-1 rounded-full shadow font-semibold tracking-wide">
                                Most Popular
                            </span>
                        )}
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h2>
                        <p className="text-gray-500 mb-6">{plan.description}</p>
                        <div className="flex items-end justify-center mb-8">
                            <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                            <span className="text-lg text-gray-500 ml-1">{plan.period}</span>
                        </div>
                        <ul className="mb-8 space-y-3 text-left">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`
                                w-full py-3 rounded-lg font-semibold transition-colors
                                ${plan.highlight
                                    ? "bg-green-600 text-white hover:bg-green-700 shadow"
                                    : "bg-gray-100 text-green-700 hover:bg-green-600 hover:text-white"}
                            `}
                        >
                            {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                        </button>
                    </div>
                ))}
            </div>
            <div className="max-w-2xl mx-auto mt-16 text-center text-gray-500 text-sm">
                Need a custom solution or have questions? <Link href="/help-center" className="text-green-700 hover:underline font-medium">Help Center</Link> or{' '}
                <Link href="/provider-signup" className="text-green-700 hover:underline font-medium">Sign up as a Provider</Link>
            </div>
        </div>
    );
}