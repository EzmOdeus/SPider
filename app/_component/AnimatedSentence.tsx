"use client";
import { useState, useEffect } from "react";

export default function AnimatedSentence({ text }: { text: string }) {
  const words = text.split(" "); // تقسيم الجملة لكلمات
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (index < words.length) {
      const currentWord = words[index];
      let timer: string | number | NodeJS.Timeout | undefined;

      if (!deleting && displayedText.length < currentWord.length) {
        // كتابة حرف حرف
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 120);
      } else if (!deleting && displayedText.length === currentWord.length) {
        // بعد ما الكلمة تخلص، انتظر شوية قبل الحذف
        timer = setTimeout(() => setDeleting(true), 700);
      } else if (deleting && displayedText.length > 0) {
        // حذف حرف حرف
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, 80);
      } else if (deleting && displayedText.length === 0) {
        // لما الكلمة تختفي بالكامل، روح للكلمة اللي بعدها
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }

      return () => clearTimeout(timer);
    } else {
      // لما الجملة كلها تخلص
      setTimeout(() => setShowButtons(true), 500);
    }
  }, [displayedText, deleting, index]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-3xl font-bold">
      <div className="min-h-[50px]">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>

      {showButtons && (
        <div className="mt-6 flex gap-6">
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition">
            نعم
          </button>
          <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition">
            لا
          </button>
        </div>
      )}
    </div>
  );
}
