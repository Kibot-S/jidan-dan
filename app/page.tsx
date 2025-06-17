export default function Home() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/backgrounds/jidandan-edited.png')",
        backgroundSize: "90%",
        backgroundColor: "#000"
      }}
    >
      <div className="text-center bg-black/60 p-6 rounded-xl shadow-xl text-white">
        <h1 className="text-4xl font-bold mb-4">✨ 지.단.단 — 지민의 단어 단속 ✨</h1>
        <p className="text-lg">
          상단 메뉴에서 <strong>학습</strong>, <strong>퀴즈</strong>, <strong>보기</strong>를 선택해<br />
          오늘도 한 걸음 더 나아가 보자!
        </p>
      </div>
    </main>
  );
}
