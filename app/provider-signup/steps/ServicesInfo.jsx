// File: app/provider-signup/steps/ServicesInfo.jsx
"use client";
import { useState } from "react";

const SERVICES = ["Cleaning", "Plumbing", "Electrical", "Gardening"];

export default function ServicesInfo({ onBack, onNext, initial }) {
    const [selected, setSelected] = useState(initial.services || []);
    const [other, setOther] = useState(initial.other || "");

    const toggle = service => {
        setSelected(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        onNext({ services: selected, other });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold">Services Info</h2>
            <div className="space-y-3">
                {SERVICES.map(svc => (
                    <label key={svc} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={selected.includes(svc)}
                            onChange={() => toggle(svc)}
                            className="h-4 w-4"
                            aria-checked={selected.includes(svc)}
                        />
                        <span className="ml-2">{svc}</span>
                    </label>
                ))}
            </div>
            <textarea
                placeholder="Other Services (optional)"
                value={other}
                onChange={e => setOther(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
            />
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
