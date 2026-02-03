// components/NotifyModal.jsx
"use client";

import { Dialog } from "@headlessui/react/esm";
import { useState } from "react";

export default function NotifyModal({ open, onClose }) {
    const [email, setEmail] = useState("");

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            {/* Backdrop */}
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />

            {/* Modal panel */}
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                <Dialog.Title className="text-xl font-bold mb-2">
                    Get notified
                </Dialog.Title>
                <Dialog.Description className="text-gray-600 mb-4">
                    Enter your email and we’ll ping you as soon as we go live.
                </Dialog.Description>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        // TODO: call your API
                        alert("Thanks! We'll let you know.");
                        onClose();
                    }}
                    className="space-y-4"
                >
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    />

                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}
