'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black relative">
      <Image
        src="/backgrounds/jidandan-edited.png"
        alt="지단단 배경"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="z-10 text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          ✨ 지.단.단 — 지민의 단어 단속 ✨
        </h1>
        <p className="text-lg md:text-xl">
          상단 메뉴에서 <strong>학습</strong>, <strong>퀴즈</strong>, <strong>복기</strong>를 선택해<br />
          오늘도 한 걸음 더 나아가 보자!
        </p>
      </div>
    </main>
  );
}
