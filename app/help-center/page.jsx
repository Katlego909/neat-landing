// app/help/page.jsx
"use client";

import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const categories = [
    { id: 1, title: 'Account Management', icon: '👤' },
    { id: 2, title: 'Booking & Payments', icon: '💳' },
    { id: 3, title: 'Provider Support', icon: '🛠️' },
    { id: 4, title: 'Technical Issues', icon: '⚙️' },
];

const faqs = [
    { id: 1, q: 'How do I reset my password?', a: 'Go to Settings > Account > Reset Password, enter your current password and choose a new one.' },
    { id: 2, q: 'How can I view my booking history?', a: 'Navigate to "My Services" in the main menu, then select "Booking History" to see past appointments.' },
    { id: 3, q: 'What do I do if my payment fails?', a: 'Check that your card has sufficient funds or try another payment method. Contact support if issues persist.' },
];

export default function HelpPage() {
    const [search, setSearch] = useState('');
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const filtered = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()));

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        // TODO: submit support request
        alert('Request submitted. We will be in touch!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto py-16 px-4">
                <h1 className="text-4xl font-extrabold mb-4">Help Center</h1>
                <p className="text-gray-600 mb-12">Find quick answers or send us a message for support.</p>

                {/* Search */}
                <div className="mb-12">
                    <input
                        type="text"
                        placeholder="Search FAQs…"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Categories */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Popular Topics</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {categories.map(cat => (
                            <div key={cat.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                                <span className="text-3xl mb-2">{cat.icon}</span>
                                <span className="font-medium text-gray-800">{cat.title}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <ul className="space-y-6">
                        {filtered.length > 0 ? filtered.map(f => (
                            <li key={f.id} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-medium text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-700">{f.a}</p>
                            </li>
                        )) : <li className="text-gray-500">No results found for "{search}".</li>}
                    </ul>
                </section>

                {/* Contact Form */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Submit a Request</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="How can we help?"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition"
                        >
                            Send Request
                            <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
