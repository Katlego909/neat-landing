"use client"
import { useState, useRef, useEffect } from 'react';

export default function FAQList({ items = [], title = 'FAQs', description = '' }) {
    const [openIndex, setOpenIndex] = useState(null);
    const [liveMessage, setLiveMessage] = useState('');
    const buttonRefs = useRef([]);
    const contentRefs = useRef([]);
    const liveRef = useRef(null);

    useEffect(() => {
        if (liveRef.current != null) liveRef.current.textContent = liveMessage;
    }, [liveMessage]);

    const focusButton = (index) => {
        const el = buttonRefs.current[index];
        if (el) el.focus();
    };

    const toggleIndex = (i) => {
        setOpenIndex((prev) => {
            const next = prev === i ? null : i;
            setLiveMessage(next === i ? `${items[i].q} expanded` : `${items[i].q} collapsed`);
            return next;
        });
    };

    useEffect(() => {
        items.forEach((_, idx) => {
            const el = contentRefs.current[idx];
            if (!el) return;
            if (openIndex === idx) el.style.maxHeight = el.scrollHeight + 'px';
            else el.style.maxHeight = '0px';
        });
    }, [openIndex, items]);

    return (
        <section id="faqs" className="scroll-mt-16 py-24">
            <div className="mx-auto px-4 max-w-[1100px] duration-800 ease-out">
                <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
                {description ? <p className="text-gray-600 text-center mb-8 text-md">{description}</p> : null}

                <div className="max-w-2xl mx-auto space-y-4">
                    {items.map(({ q, a }, idx) => (
                        <div key={q} className="border border-gray-200 rounded-lg hover:shadow transition-shadow duration-200">
                            <button
                                id={`faq-question-${idx}`}
                                ref={(el) => (buttonRefs.current[idx] = el)}
                                onClick={() => toggleIndex(idx)}
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowDown') {
                                        e.preventDefault();
                                        focusButton((idx + 1) % items.length);
                                    } else if (e.key === 'ArrowUp') {
                                        e.preventDefault();
                                        focusButton((idx - 1 + items.length) % items.length);
                                    } else if (e.key === 'Home') {
                                        e.preventDefault();
                                        focusButton(0);
                                    } else if (e.key === 'End') {
                                        e.preventDefault();
                                        focusButton(items.length - 1);
                                    } else if (e.key === 'Escape') {
                                        setOpenIndex(null);
                                    }
                                }}
                                className="w-full flex items-center justify-between px-6 py-4 text-left faq-question focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                <span className="font-medium text-gray-900">{q}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                id={`faq-answer-${idx}`}
                                role="region"
                                aria-labelledby={`faq-question-${idx}`}
                                ref={(el) => (contentRefs.current[idx] = el)}
                                style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height 300ms ease' }}
                                className={`${openIndex === idx ? '' : 'hidden'} px-6 pt-3 pb-4 faq-answer`}
                                aria-hidden={openIndex !== idx}
                            >
                                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div ref={liveRef} aria-live="polite" className="sr-only" />
            </div>
        </section>
    );
}
