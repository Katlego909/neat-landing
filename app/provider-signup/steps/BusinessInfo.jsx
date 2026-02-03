// File: app/provider-signup/steps/BusinessInfo.jsx
"use client";
import { useState } from "react";

export default function BusinessInfo({ onBack, onNext, initial }) {
    const [businessName, setBusinessName] = useState(initial.businessName || "");
    const [address, setAddress] = useState(initial.address || "");
    const [city, setCity] = useState(initial.city || "");
    const [zip, setZip] = useState(initial.zip || "");

    const handleSubmit = e => {
        e.preventDefault();
        onNext({ businessName, address, city, zip });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold">Business Info</h2>
            <input
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                    className="px-4 py-2 border rounded-lg"
                />
                <input
                    type="text"
                    placeholder="ZIP Code"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    required
                    className="px-4 py-2 border rounded-lg"
                />
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={onBack} className="px-6 py-3 border rounded-lg">
                    Back
                </button>
                <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    Next
                </button>
            </div>
        </form>
    );
}