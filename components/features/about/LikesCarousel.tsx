"use client";

import { useState } from "react";
import LikesModal, { type Item } from "./LikesModal";

const ITEMS: Item[] = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  src: "/kinkaku.jpg",
  title: `好きなもの ${i + 1}`,
  description: "ここに説明文が入ります。好きな理由や思い出など、自由に書いてください。",
  images: ["/kinkaku.jpg", "/kinkaku.jpg"],
}));

const N = ITEMS.length;

export default function LikesCarousel() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + N) % N);
  const next = () => setCurrent((c) => (c + 1) % N);

  const leftIdx  = (current - 1 + N) % N;
  const rightIdx = (current + 1) % N;

  return (
    <>
      <div className="flex items-center w-full gap-2 px-4">
        {/* 左ボタン */}
        <button
          onClick={prev}
          className="text-3xl px-3 shrink-0 hover:opacity-60 transition-opacity"
          aria-label="前へ"
        >
          ←
        </button>

        {/* カード3枚 */}
        <div className="flex flex-1 items-center justify-center gap-4 overflow-hidden">
          {/* 左カード */}
          <div
            className="transition-all duration-300 cursor-pointer shrink-0 opacity-60"
            style={{ transform: "scale(0.78)" }}
            onClick={() => setCurrent(leftIdx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[leftIdx].src}
              alt=""
              className="h-[70vh] w-auto object-cover rounded-xl shadow"
            />
          </div>

          {/* 中央カード */}
          <div
            className="transition-all duration-300 cursor-pointer shrink-0"
            style={{ transform: "scale(1)" }}
            onClick={() => setSelected(current)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[current].src}
              alt=""
              className="h-[70vh] w-auto object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* 右カード */}
          <div
            className="transition-all duration-300 cursor-pointer shrink-0 opacity-60"
            style={{ transform: "scale(0.78)" }}
            onClick={() => setCurrent(rightIdx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[rightIdx].src}
              alt=""
              className="h-[70vh] w-auto object-cover rounded-xl shadow"
            />
          </div>
        </div>

        {/* 右ボタン */}
        <button
          onClick={next}
          className="text-3xl px-3 shrink-0 hover:opacity-60 transition-opacity"
          aria-label="次へ"
        >
          →
        </button>
      </div>

      {selected !== null && (
        <LikesModal item={ITEMS[selected]} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
