// File: app/provider-signup/steps/Verification.jsx
"use client";
import { useState } from "react";

export default function Verification({ onBack, onNext, initial }) {
    const [file, setFile] = useState(initial.file || null);

    const handleFile = e => setFile(e.target.files[0]);
    const handleSubmit = e => {
        e.preventDefault();
        if (!file) return;
        onNext({ file });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold">Verification</h2>
            <p>Upload your legal or professional certification documents.</p>
            <input type="file" accept="image/*,.pdf" onChange={handleFile} required />
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