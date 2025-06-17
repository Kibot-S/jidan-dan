"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import words from "@/data/words.json";

export default function StatsPage() {
  const [day, setDay] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<any[]>([]);

  const startStats = (selectedDay: number) => {
    const selectedWords = words[selectedDay];
    const shuffled = [...selectedWords].sort(() => 0.5 - Math.random());
    setShuffledWords(shuffled);
    setCurrentIndex(0);
    setDay(selectedDay);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledWords.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? shuffledWords.length - 1 : prev - 1
    );
  };

  const resetStats = () => {
    setCurrentIndex(0);
  };

  if (day === null) {
    return (
      <div className="flex flex-wrap gap-4 justify-center p-6">
        {Object.keys(words).map((key) => (
          <Button key={key} onClick={() => startStats(Number(key))}>
            Day {key}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-xl font-bold mb-4">📊 단어 통계 보기</h1>
      <div className="text-lg mb-2">
        {currentIndex + 1} / {shuffledWords.length}
      </div>
      <div className="text-2xl font-semibold mb-2">
        {shuffledWords[currentIndex]?.word}
      </div>
      <div className="text-lg text-gray-300 mb-4">
        {shuffledWords[currentIndex]?.mean}
      </div>
      <div className="flex gap-4 mt-2">
        <Button onClick={goToPrevious} variant="secondary">
          이전 단어
        </Button>
        <Button onClick={goToNext} variant="secondary">
          다음 단어
        </Button>
        <Button onClick={resetStats} variant="outline">
          처음부터
        </Button>
      </div>
    </div>
  );
}
