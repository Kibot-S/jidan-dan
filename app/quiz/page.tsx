"use client";

import { useState, useEffect } from "react";

export default function QuizPage() {
  const [day, setDay] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState<any[]>([]);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  useEffect(() => {
    if (day !== null) {
      fetch(`/data/jidandan_days/day${String(day + 1).padStart(2, "0")}.json`)
        .then((res) => res.json())
        .then((data) => {
          setWords(data);
          setIndex(0);
          setAnswer("");
          setResult(null);
        });
    }
  }, [day]);

  const handleSubmit = () => {
    const correct = words[index].word.toLowerCase().trim() === answer.toLowerCase().trim();
    setResult(correct);
  };

  const handleNext = () => {
    setAnswer("");
    setResult(null);
    if (index < words.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setDay(null);
      setIndex(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && result === null) {
      handleSubmit();
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {day === null ? (
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 33 }).map((_, i) => (
            <button
              key={i}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
              onClick={() => setDay(i)}
            >
              Day {i + 1}
            </button>
          ))}
        </div>
      ) : words.length > 0 ? (
        <div className="text-center space-y-4">
          <div className="text-sm text-gray-500">
            문제 {index + 1} / {words.length}
          </div>
          <div className="text-lg text-gray-700">
            뜻: {words[index].meaning}
          </div>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border px-4 py-2 rounded-md"
            placeholder="영어 단어 입력"
          />
          {result !== null && (
            <div className={`font-bold ${result ? "text-green-600" : "text-red-600"}`}>
              {result ? "정답입니다!" : `오답입니다. 정답: ${words[index].word}`}
            </div>
          )}

          <div className="flex gap-4 justify-center mt-6">
            {result === null ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
              >
                정답 제출
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
              >
                다음 문제
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-gray-600">로딩 중...</div>
      )}
    </main>
  );
}
