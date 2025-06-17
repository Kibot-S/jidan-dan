"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import words from "@/data/words.json";

export default function QuizPage() {
  const [day, setDay] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledWords, setShuffledWords] = useState<any[]>([]);

  useEffect(() => {
    if (day !== null) {
      const selectedDay = words[day];
      const shuffled = [...selectedDay].sort(() => 0.5 - Math.random());
      setShuffledWords(shuffled);
      setCurrentIndex(0);
      setInput("");
      setIsCorrect(null);
    }
  }, [day]);

  const handleAnswer = () => {
    if (
      input.trim().toLowerCase() ===
      shuffledWords[currentIndex]?.word.toLowerCase()
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const goToNext = () => {
    setInput("");
    setIsCorrect(null);
    setCurrentIndex((prev) => (prev + 1) % shuffledWords.length);
  };

  const goToPrevious = () => {
    setInput("");
    setIsCorrect(null);
    setCurrentIndex((prev) =>
      prev === 0 ? shuffledWords.length - 1 : prev - 1
    );
  };

  const resetQuiz = () => {
    setInput("");
    setIsCorrect(null);
    setCurrentIndex(0);
  };

  if (day === null) {
    return (
      <div className="flex flex-wrap gap-4 justify-center p-6">
        {Object.keys(words).map((key) => (
          <Button key={key} onClick={() => setDay(Number(key))}>
            Day {key}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-xl font-bold mb-4">
        ✏️ 단어를 영어로 입력해보세요
      </h1>
      <div className="text-lg mb-2">
        {currentIndex + 1} / {shuffledWords.length}
      </div>
      <div className="text-2xl mb-4">
        {shuffledWords[currentIndex]?.mean}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAnswer()}
        className="border rounded p-2 text-black"
        placeholder="영단어 입력"
      />
      <Button onClick={handleAnswer} className="mt-2">
        정답 제출
      </Button>
      {isCorrect !== null && (
        <div className={`mt-2 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect
            ? "✅ 정답입니다!"
            : `❌ 오답입니다. 정답: ${shuffledWords[currentIndex]?.word}`}
        </div>
      )}
      <div className="flex gap-4 mt-4">
        <Button onClick={goToPrevious} variant="secondary">
          이전 단어
        </Button>
        <Button onClick={goToNext} variant="secondary">
          다음 단어
        </Button>
        <Button onClick={resetQuiz} variant="outline">
          처음부터
        </Button>
      </div>
    </div>
  );
}
