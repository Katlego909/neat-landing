// components/FAQs.jsx
"use client"
import FAQList from './FAQList';

const faqList = [
    {
        q: 'How do I register as a service provider?',
        a: 'To register as a service provider, click “Become a Provider” or “Sign up as Provider,” fill in your details, submit required documents, and wait for verification. Once approved, you can list your services.',
    },
    {
        q: 'How do I book a service?',
        a: 'Browse available services, select your desired provider and time slot, confirm details, and complete payment securely.',
    },
    {
        q: 'What payment methods are accepted?',
        a: 'We accept credit/debit cards with bank-grade encryption and select crypto wallets where available.',
    },
    {
        q: 'How do I become a top-rated provider?',
        a: 'Provide excellent service, respond promptly, maintain good ratings, and complete jobs reliably. Encourage satisfied customers to leave reviews.',
    },
    {
        q: 'What is your cancellation policy?',
        a: 'You can cancel or reschedule up to 24 hours before your appointment without penalty. Later cancellations may incur fees; see full policy in Terms & Conditions.',
    },
];

export default function FAQs() {
    return <FAQList items={faqList} title="FAQs" description="Have questions? We have answers!" />;
}
