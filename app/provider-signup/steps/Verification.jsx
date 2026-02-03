// File: app/provider-signup/steps/Verification.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function Verification({ onBack, onNext, initial }) {
    const [file, setFile] = useState(initial.file || null);
    const [preview, setPreview] = useState(null);
    const [warning, setWarning] = useState('');
    const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
    const inputRef = useRef(null);

    useEffect(() => {
        if (!file) {
            setPreview(null);
            return;
        }
        if (file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            return () => URL.revokeObjectURL(url);
        }
        setPreview(null);
    }, [file]);

    const handleFile = e => {
        const f = e.target.files && e.target.files[0];
        setFile(f || null);
        if (f && f.size > MAX_BYTES) {
            setWarning(`File is larger than 10 MB (${formatBytes(f.size)}). You may still proceed, but upload may be slow.`);
        } else {
            setWarning('');
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const f = e.dataTransfer?.files?.[0];
        if (f) {
            setFile(f);
            if (f.size > MAX_BYTES) setWarning(`File is larger than 10 MB (${formatBytes(f.size)}). You may still proceed, but upload may be slow.`);
            else setWarning('');
        }
    };

    const handleDragOver = (e) => e.preventDefault();

    const removeFile = () => {
        setFile(null);
        if (inputRef.current) inputRef.current.value = '';
        setWarning('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!file) return;
        onNext({ file });
    };

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold">Verification</h2>
            <p className="text-sm text-gray-600">Upload your legal or professional certification documents (PDF or image).</p>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload document</label>

                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
                    className="flex items-center space-x-4 border border-dashed rounded-lg p-4 bg-white"
                    aria-label="File upload dropzone"
                >
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        className="inline-flex items-center px-4 py-2 border rounded-lg bg-white text-sm hover:bg-gray-50"
                    >
                        Choose file
                    </button>

                    <div className="flex-1 min-w-0">
                        {file ? (
                            <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg">
                                <div className="truncate text-sm text-gray-700">{file.name}</div>
                                <div className="flex items-center space-x-3">
                                    <div className="text-xs text-gray-500">{formatBytes(file.size)}</div>
                                    <button type="button" onClick={removeFile} className="ml-4 text-sm text-red-600">Remove</button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-sm text-gray-500">Drag & drop a file here, or click to choose</div>
                        )}
                    </div>
                </div>

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFile}
                    className="hidden"
                    aria-hidden
                />

                {preview && (
                    <div className="mt-4">
                        <img src={preview} alt="Preview" className="max-w-xs max-h-48 rounded-md border" />
                    </div>
                )}

                {warning && (
                    <p className="mt-2 text-sm text-yellow-700">{warning}</p>
                )}
            </div>

            <div className="flex justify-between">
                <button type="button" onClick={onBack} className="px-6 py-3 border rounded-lg">
                    Back
                </button>
                <button
                    type="submit"
                    className={`px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition ${!file ? 'opacity-60 pointer-events-none' : ''}`}
                >
                    Next
                </button>
            </div>
        </form>
    );
}