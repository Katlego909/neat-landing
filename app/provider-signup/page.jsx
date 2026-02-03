// File: app/provider-signup/page.jsx
"use client";

import { useState } from "react";
import PersonalInfo from "./steps/PersonalInfo";
import BusinessInfo from "./steps/BusinessInfo";
import ServicesInfo from "./steps/ServicesInfo";
import Verification from "./steps/Verification";
import Confirmation from "./steps/Confirmation";

const STEPS = [
    { key: "personal", label: "Personal Info" },
    { key: "business", label: "Business Info" },
    { key: "services", label: "Services Info" },
    { key: "verification", label: "Verification" },
    { key: "confirmation", label: "Confirmation" },
];

export default function ProviderSignupPage() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        personal: {},
        business: {},
        services: {},
        verification: {},
    });

    const next = (data = {}) => {
        const stepKey = STEPS[step].key;
        setFormData(prev => ({
            ...prev,
            [stepKey]: { ...prev[stepKey], ...data }
        }));
        setStep(s => Math.min(s + 1, STEPS.length - 1));
    };

    const back = () => setStep(s => Math.max(s - 1, 0));

    const renderStep = () => {
        switch (STEPS[step].key) {
            case "personal":
                return <PersonalInfo onNext={next} initial={formData.personal} />;
            case "business":
                return <BusinessInfo onBack={back} onNext={next} initial={formData.business} />;
            case "services":
                return <ServicesInfo onBack={back} onNext={next} initial={formData.services} />;
            case "verification":
                return <Verification onBack={back} onNext={next} initial={formData.verification} />;
            case "confirmation":
                // Merge all step data for submission
                const mergedData = {
                    ...formData.personal,
                    ...formData.business,
                    ...formData.services,
                    ...formData.verification,
                };
                return <Confirmation data={mergedData} />;
            default:
                return null;
        }
    };

    return (
        <main className="py-24 px-4">
            <div className="mx-auto max-w-[1100px] bg-white rounded-xl shadow-lg p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm font-medium text-gray-500">
                        {STEPS.map((s, i) => (
                            <span
                                key={s.key}
                                className={`inline-block px-2 py-1 rounded-full w-full text-center ${i === step
                                    ? "bg-green-600 text-white"
                                    : i < step
                                        ? "bg-green-100 text-green-600"
                                        : "bg-gray-100 text-gray-400"
                                    }`}
                            >
                                {s.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                {renderStep()}
            </div>
        </main>
    );
}