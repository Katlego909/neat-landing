// components/CustomerBenefits.jsx
"use client"

import React, { useState, useEffect, useRef } from 'react'
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'

// Benefit items data
const benefits = [
  {
    id: 1,
    Icon: MagnifyingGlassIcon,
    title: 'Browse Verified Professionals',
    description:
      'Easily find skilled service providers with real reviews and ratings, so you can book with confidence.',
  },
  {
    id: 2,
    Icon: CalendarDaysIcon,
    title: 'Flexible Booking & Scheduling',
    description:
      'Choose appointment times that suit you best and get instant confirmations—no back‑and‑forth needed.',
  },
  {
    id: 3,
    Icon: ShieldCheckIcon,
    title: 'Secure Payments & Protection',
    description:
      'Your payment stays in escrow until the job is done to your satisfaction, ensuring peace of mind every step of the way.',
  },
]

// Simple phone mockup component
const PhoneMockup = ({ src, alt, className, style }) => (
  <img
    src={src}
    alt={alt}
    className={`rounded-xl ${className}`}
    style={style}
  />
)

// Single benefit rendering
const BenefitItem = ({ Icon, title, description }) => (
  <li className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
      <Icon className="h-6 w-6 text-green-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm mt-1 text-gray-700">{description}</p>
    </div>
  </li>
)

export default function CustomerBenefits() {
  // Modal State & Refs
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')       // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const modalRef = useRef(null)
  const prevFocused = useRef(null)

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  // Handle ESC key, focus trap, and restore focus
  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input'
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last  = focusable[focusable.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus()
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus()
        }
      }
    }

    if (isOpen) {
      prevFocused.current = document.activeElement
      document.addEventListener('keydown', onKeydown)
      setTimeout(() => modalRef.current?.querySelector('input')?.focus(), 0)
    }
    return () => {
      document.removeEventListener('keydown', onKeydown)
      prevFocused.current?.focus()
    }
  }, [isOpen])

  const openModal  = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    setEmail(''); setStatus('idle'); setErrorMsg('')
  }

  const handleNotify = async (e) => {
    e.preventDefault()
    setStatus('submitting'); setErrorMsg('')
    try {
      // TODO: replace with real API call
      await new Promise(res => setTimeout(res, 1000))
      setStatus('success')
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <section className="py-24 bg-white">
        <div className="mx-auto px-4 max-w-[1100px] lg:flex lg:items-stretch gap-8 lg:space-x-4">
          {/* Left Column: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 lg:px-0">
            <PhoneMockup
              src="/images/booking-screen.png"
              alt="Booking Confirmed on Phone"
              className="w-full h-auto max-w-none object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Column: Benefits & CTA */}
          <div className="w-full lg:w-1/2  lg:px-0 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Customers Love Neat
            </h2>

            <ul className="space-y-6">
              {benefits.map(item => (
                <BenefitItem
                  key={item.id}
                  Icon={item.Icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </ul>

            <div className="mt-12">
              {/* Trigger modal */}
              <button
                onClick={openModal}
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md text-base font-medium hover:bg-green-700 transition"
              >
                Notify Me
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            ref={modalRef}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Modal header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-green-500 to-green-300 px-6 py-4">
              <h3 className="text-2xl font-bold text-white">Notify Me</h3>
              <button onClick={closeModal} aria-label="Close">
                <XMarkIcon className="w-6 h-6 text-white hover:text-gray-200" />
              </button>
            </div>
            <div className="p-6">
              {status === 'idle' && (
                <form onSubmit={handleNotify} className="space-y-5">
                  <label className="block text-left">
                    <span className="text-gray-700 font-medium">
                      Enter your email below
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200"
                  >
                    Notify Me
                  </button>
                </form>
              )}
              {status === 'success' && (
                <div className="text-center space-y-4">
                  <CheckIcon className="mx-auto w-12 h-12 text-green-500" />
                  <p className="text-green-600 font-medium text-lg">
                    Thanks! We'll notify you when signup opens.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
              {status === 'error' && (
                <div className="text-center space-y-4">
                  <p className="text-red-600 font-medium text-lg">{errorMsg}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}