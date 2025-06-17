"use client";

import { useState, useEffect } from "react";

export default function StudyPage() {
  const [day, setDay] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState<any[]>([]);

  useEffect(() => {
    if (day !== null) {
      fetch(`/data/jidandan_days/day${String(day + 1).padStart(2, "0")}.json`)
        .then((res) => res.json())
        .then((data) => {
          setWords(data);
          setIndex(0);
        });
    }
  }, [day]);

  const handleNext = () => {
    if (index < words.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setIndex(0);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {day === null ? (
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 33 }).map((_, i) => (
            <button
              key={i}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
              onClick={() => setDay(i)}
            >
              Day {i + 1}
            </button>
          ))}
        </div>
      ) : words.length > 0 ? (
        <div className="text-center space-y-4">
          <div className="text-sm text-gray-500">
            단어 {index + 1} / {words.length}
          </div>
          <div className="text-3xl font-bold">{words[index].word}</div>
          <div className="text-lg text-gray-700">{words[index].meaning}</div>

          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
            >
              다음 단어
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-xl shadow-md transition duration-200"
            >
              처음부터
            </button>
          </div>
        </div>
      ) : (
        <div className="text-gray-600">로딩 중...</div>
      )}
    </main>
  );
}
