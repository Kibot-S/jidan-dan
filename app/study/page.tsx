"use client";

import { useState } from "react";
import day01 from "@/data/jidandan_days/day01.json";

export default function StudyPage() {
  const [day, setDay] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = day !== null ? day01 : [];

  const handleDaySelect = (selectedDay: number) => {
    setDay(selectedDay);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {day === null ? (
        <div className="grid grid-cols-3 gap-4">
          {[...Array(33)].map((_, i) => (
            <button
              key={i + 1}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow"
              onClick={() => handleDaySelect(i + 1)}
            >
              Day {i + 1}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-center text-2xl font-semibold mb-4">
            {currentIndex + 1} / {words.length}
          </div>
          <div className="text-center text-3xl font-bold mb-6">
            {words[currentIndex].word}
          </div>
          <div className="text-center text-xl text-gray-700 mb-8">
            {words[currentIndex].meaning}
          </div>
          <div className="flex gap-4">
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded shadow"
              onClick={handlePrev}
            >
              이전단어
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded shadow"
              onClick={handleNext}
            >
              다음단어
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded shadow"
              onClick={() => setDay(null)}
            >
              처음부터
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
