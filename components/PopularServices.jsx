// components/PopularServices.jsx
"use client"
import { useState } from "react";
import Image from 'next/image';
import {
  SparklesIcon,
  HomeModernIcon,
  SunIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Cash Wash',
    icon: SparklesIcon,
    image: '/images/car-wash.jpg',
    desc: 'Professional exterior and interior car cleaning',
  },
  {
    title: 'Home Cleaning',
    icon: HomeModernIcon,
    image: '/images/home-cleaning.png',
    desc: 'Deep cleaning for your home, kitchen to bathroom',
  },
  {
    title: 'Gardening',
    icon: SunIcon,
    image: '/images/gardening.jpg',
    desc: 'Lawn mowing, planting, and garden maintenance',
  },
  {
    title: 'Laundry',
    icon: Squares2X2Icon,
    image: '/images/laundry.png',
    desc: 'Wash, dry, fold and iron services',
  },
  {
    title: 'Plumbing',
    icon: WrenchScrewdriverIcon,
    image: '/images/plumbing.png',
    desc: 'Expert repairs for leaks, pipes, and fixtures',
  },
  {
    title: 'Home Repairs',
    icon: WrenchIcon,
    image: '/images/home-repairs.png',
    desc: 'General handyman services for home maintenance',
  },
];

const INITIAL_COUNT = 6;

export default function PopularServices() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const handleLoadMore = () =>
    setVisibleCount(prev => Math.min(prev + 3, services.length));

  return (
    <section id="popular-services" className="relative bg-gradient-to-br from-green-50 to-green-100 py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-green-200 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-300 opacity-10"></div>

      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Popular services near Your Area
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-md mb-12">
            Discover the most trusted and requested services available in your neighborhood.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, visibleCount).map(service => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-md bg-white backdrop-blur-md p-0 shadow-lg transition duration-500 hover:border-green-500 hover:scale-105 border border-transparent "
              >
                {/* Service Image */}
                <div className="relative h-40 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-6 py-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition group-hover:bg-green-600">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {visibleCount < services.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-block rounded-full bg-green-600 px-8 py-4 text-white font-semibold shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              + Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
