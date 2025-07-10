'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function Slide() {
  const sliderRef = useRef(null);
  const skip = 1;
  const [atBeginning, setAtBeginning] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const scrollTo = (strategy) => {
    const slider = sliderRef.current;
    const current = slider.scrollLeft;
    const offset = slider.firstElementChild.getBoundingClientRect().width;
    slider.scrollTo({ left: strategy(current, offset), behavior: "smooth" });
  };

  const prev = () => scrollTo((current, offset) => current - offset * skip);
  const next = () => scrollTo((current, offset) => current + offset * skip);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollLeft = slider.scrollLeft;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setAtBeginning(scrollLeft <= 0);
    setAtEnd(scrollLeft >= maxScrollLeft);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      text: "I've been using this service for years, and they consistently exceed my expectations. The support team is fantastic!",
      name: "Pepe Madrid",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      text: "The financial solutions they offer are top-notch. I've seen significant growth in my investments since I started using their platform.",
      name: "Michael Andreuzza",
      image: "https://alfred.lexingtonthemes.com/avatar1.png",
    },
    {
      text: "Their customer service is unparalleled. They really go the extra mile to ensure customer satisfaction.",
      name: "Fernando Pio",
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0f172a] py-24 p-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center relative">
        <h1 className="text-xl font-normal text-gray-500 dark:text-gray-300 mb-6">
          Custom Carousel
        </h1>

        <div className="flex justify-end space-x-2 lg:px-2">
          <button
            onClick={prev}
            className={`bg-orange-500 hover:bg-orange-600 size-8 flex items-center justify-center rounded-full text-white focus:bg-orange-400 ${
              atBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={atBeginning}
          >
            ←
          </button>
          <button
            onClick={next}
            className={`bg-orange-500 hover:bg-orange-600 size-8 flex items-center justify-center rounded-full text-white focus:bg-orange-400 ${
              atEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={atEnd}
          >
            →
          </button>
        </div>

        <ul
          ref={sliderRef}
          className="mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full rounded-2xl"
        >
          {cards.map((card, index) => (
            <li
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0 snap-start bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 lg:p-10 flex flex-col h-full"
            >
              <p className="text-base text-gray-900 dark:text-white font-display mb-8">
                {card.text}
              </p>
              <div className="flex items-center">
                <Image
                  className="rounded-full object-cover"
                  src={card.image}
                  alt={card.name}
                  width={36}
                  height={36}
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {card.name}
                  </p>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    CEO of Something INC
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
