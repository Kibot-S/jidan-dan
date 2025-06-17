'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? 'text-blue-700 font-bold underline underline-offset-8'
      : 'text-gray-800 hover:text-blue-600';

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-md py-4 px-6 flex justify-center gap-8 sticky top-0 z-50 text-lg">
      <Link href="/" className={isActive('/')}>홈</Link>
      <Link href="/study" className={isActive('/study')}>학습</Link>
      <Link href="/quiz" className={isActive('/quiz')}>퀴즈</Link>
      <Link href="/stats" className={isActive('/stats')}>통계</Link>
      <Link href="/review" className={isActive('/review')}>복습</Link>
    </nav>
  );
}
