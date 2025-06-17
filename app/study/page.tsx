export default function StudyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2">단어 2 / 30</p>
        <h1 className="text-3xl font-bold mb-2">잠에 빠져들다</h1>
        <p className="text-lg text-gray-700 mb-4">drift off to sleep</p>
        <div className="flex space-x-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            이전 단어
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            다음 단어
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            처음부터
          </button>
        </div>
      </div>
    </main>
  );
}
