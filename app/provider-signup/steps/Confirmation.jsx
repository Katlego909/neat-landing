"use client";

import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Confirmation({ data }) {
    const [status, setStatus] = useState("loading"); // loading | success | error

    useEffect(() => {
        // Dynamically create and submit a form
        const form = document.createElement("form");
        form.action = "https://formsubmit.co/info.neatapp@gmail.com";
        form.method = "POST";
        form.enctype = "multipart/form-data";
        form.style.display = "none";

        for (const key in data) {
            if (data[key] instanceof File) {
                // File input
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.name = key;
                // Create a DataTransfer to assign the file
                const dt = new DataTransfer();
                dt.items.add(data[key]);
                fileInput.files = dt.files;
                form.appendChild(fileInput);
            } else if (Array.isArray(data[key])) {
                // For arrays, submit each value
                data[key].forEach(val => {
                    const input = document.createElement("input");
                    input.type = "hidden";
                    input.name = key + "[]";
                    input.value = val;
                    form.appendChild(input);
                });
            } else {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = data[key];
                form.appendChild(input);
            }
        }

        // Add FormSubmit subject and redirect
        const subjectInput = document.createElement("input");
        subjectInput.type = "hidden";
        subjectInput.name = "_subject";
        subjectInput.value = "New Provider Signup";
        form.appendChild(subjectInput);

        const nextInput = document.createElement("input");
        nextInput.type = "hidden";
        nextInput.name = "_next";
        nextInput.value = "http://localhost:3000/"; // Change to your actual redirect URL
        form.appendChild(nextInput);

        const captchaInput = document.createElement("input");
        captchaInput.type = "hidden";
        captchaInput.name = "_captcha";
        captchaInput.value = "false";
        form.appendChild(captchaInput);

        document.body.appendChild(form);
        form.submit();

        // Optionally, show a loading state for a moment before showing success
        setTimeout(() => setStatus("success"), 2000);

        // Cleanup: remove the form after submission
        return () => {
            document.body.removeChild(form);
        };
    }, [data]);

    if (status === "loading") {
        return <p className="text-center text-lg">Submitting your details...</p>;
    }

    if (status === "error") {
        return (
            <div className="text-center space-y-4 text-red-600">
                <h2 className="text-2xl font-bold">Something went wrong</h2>
                <p>Please try again later or contact support.</p>
                <Link href="/" className="underline text-blue-600">Go back home</Link>
            </div>
        );
    }

    return (
        <div className="text-center space-y-6">
            <CheckCircleIcon className="mx-auto h-24 w-24 text-green-600" />
            <h2 className="text-2xl font-bold">All Set!</h2>
            <p className="text-xl text-center">Your registration was submitted successfully.</p>
            <p className="text-center">Our partner success team will review your information and reach out to you shortly.</p>
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                Go to Home
            </Link>
        </div>
    );
}