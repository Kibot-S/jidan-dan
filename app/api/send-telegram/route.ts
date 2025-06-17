// app/api/send-telegram/route.ts

export async function POST() {
  const message = encodeURIComponent("✅ 지민이가 오늘의 영어 퀴즈 학습을 완료했어요!");
  const botToken = "7315239224:AAHsccjAkn60CnM2AghpsgyHMzd5mndyOAo";
  const chatId = "8055059746";

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

  try {
    const res = await fetch(telegramUrl);
    return new Response("ok", { status: 200 });
  } catch (error) {
    return new Response("fail", { status: 500 });
  }
}
