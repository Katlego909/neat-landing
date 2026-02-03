"use client";
import { useState } from "react";

export default function PersonalInfo({ onNext, initial }) {
    const [firstName, setFirstName] = useState(initial.firstName || "");
    const [lastName, setLastName] = useState(initial.lastName || "");
    const [email, setEmail] = useState(initial.email || "");
    const [phone, setPhone] = useState(initial.phone || "");

    const handleSubmit = e => {
        e.preventDefault();
        onNext({ firstName, lastName, email, phone });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold">Personal Info</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    onInput={e => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg"
            />
            <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
                Next
            </button>
        </form>
    );
}