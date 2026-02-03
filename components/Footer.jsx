// components/Footer.jsx
"use client"
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const cols = [
        {
            heading: 'Company',
            links: ['Help Center', 'Contact Us', 'About Us', 'Our Blog', 'Careers', 'Apply as a Worker'],
            hrefs: ['/help-center', '/help-center', '/', '/', '/', '/provider-signup'],
        },
        {
            heading: 'Services',
            links: ['Our Services', 'Our Locations', 'Privacy Policy', 'Terms & Conditions', 'Booking Cover', 'Campaigns & Competitions', 'Buy a Voucher'],
            hrefs: ['/', '/', '/privacy-policy', '/terms-conditions', '/', '/', '/'],
        },
        {
            heading: 'Download',
            badges: [
                { src: 'images/google.png', alt: 'Google Play' },
                { src: 'images/apple.png', alt: 'App Store' },
            ],
        },
        {
            heading: 'Connect',
            links: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
            hrefs: ['#', '#', '#', '#'],
        },
    ];

    return (
        <footer className="bg-primary text-gray-200">
            <div className="mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1100px]">
                {cols.map(col => (
                    <div key={col.heading} className="duration-800 ease-out">
                        <h3 className="font-semibold mb-4">{col.heading}</h3>
                        {col.badges ? (
                            <div className="flex flex-col space-y-2">
                                {col.badges.map(b => (
                                    <a key={b.alt} href="#" aria-label={b.alt}>
                                        <img src={b.src} alt={b.alt} className="h-10 w-auto object-contain transform hover:scale-105 transition-transform duration-300" />
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <ul className="space-y-2 text-sm">
                                {col.links.map((link, i) => (
                                    col.hrefs[i].startsWith('/') ? (
                                        <li key={link}>
                                            <Link href={col.hrefs[i]} className="hover:text-white transition-colors">{link}</Link>
                                        </li>
                                    ) : (
                                        <li key={link}>
                                            <a href={col.hrefs[i]} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">{link}</a>
                                        </li>
                                    )
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div className="bg-gray-900 text-center py-4 text-sm">&copy; 2025 Neat App (Pty) Ltd. All rights reserved.</div>
        </footer>
    );
}
