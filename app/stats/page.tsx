"use client";

import { useEffect, useState } from "react";

export default function StatsPage() {
  const [log, setLog] = useState<{ [date: string]: number }>({});

  useEffect(() => {
    const stored = localStorage.getItem("jimin-study-log");
    if (stored) {
      const parsed = JSON.parse(stored);
      setLog(parsed);
    }
  }, []);

  const sortedDates = Object.keys(log).sort((a, b) => (a > b ? -1 : 1)); // 최신순

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">📊 지민이 학습 통계</h1>

        {sortedDates.length === 0 ? (
          <p className="text-gray-500">아직 저장된 학습 기록이 없습니다.</p>
        ) : (
          <table className="min-w-[300px] border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">날짜</th>
                <th className="border px-4 py-2">학습 Day</th>
              </tr>
            </thead>
            <tbody>
              {sortedDates.map((date) => (
                <tr key={date}>
                  <td className="border px-4 py-2">{date}</td>
                  <td className="border px-4 py-2">Day {log[date]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
