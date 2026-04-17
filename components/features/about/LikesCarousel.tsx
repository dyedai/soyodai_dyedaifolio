"use client";

import { useState } from "react";
import LikesModal, { type Item } from "./LikesModal";
const ITEMS: Item[] = [
  {
    id: 0,
    src: "/kenninji.jpg",
    title: "建仁寺",
    description: "マジで人少ない穴場、天井に竜がいる、風神雷神もかっこいい。",
    images: ["/kenninji2.jpg"],
  },
  {
    id: 1,
    src: "/33gendo.jpg",
    title: "三十三間堂",
    description: "全員顔違う！圧巻の千手観音像。",
    images: ["/33gendo.jpg", "/33gendo2.png"],
  },
  {
    id: 2,
    src: "/ginkaku.jpg",
    title: "銀閣寺",
    description: "美しい建築と庭園で心を落ち着ける場所です。",
    images: ["/ginkaku.jpg", "/ginkaku2.jpg"],
  },
  {
    id: 3,
    src: "/kinkaku.jpg",
    title: "金閣寺",
    description: "外人が多い。とりあえずインパクトある。",
    images: ["/kinkaku.jpg", "/kinkaku2.jpg"],
  },
  {
    id: 4,
    src: "/yogenin.png",
    title: "養源院",
    description: "血天井、俵屋宗達の作品が見れる。ここは人少ないし解説してくれるからすごい。",
    images: ["/yogenin.png", "/yogenin2.jpg"],
  },
  {
    id: 5,
    src: "/dazaihu.jpg",
    title: "大宰府天満宮",
    description: "元カノといった。でも建築ガチかっこいい。",
    images: ["/dazaihu.jpg", "/dazaihu.webp"],
  },
  {
    id: 6,
    src: "/tyusonji.jpeg",
    title: "中尊寺金色堂",
    description: "金閣よりエグい、金ピカの建築。中も金ピカで圧倒される。",
    images: ["/tyusonji2.jpg", "/tyusonji3.jpg"],
  },
];

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
        <div className="flex flex-1 items-center justify-center gap-6 overflow-hidden">
          {/* 左カード */}
          <div
            className="transition-all duration-300 cursor-pointer shrink-0 opacity-50"
            onClick={() => setCurrent(leftIdx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[leftIdx].src}
              alt=""
              className="h-[55vh] aspect-[3/4] object-cover rounded-xl shadow"
            />
          </div>

          {/* 中央カード */}
          <div
            className="transition-all duration-300 cursor-pointer shrink-0"
            onClick={() => setSelected(current)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[current].src}
              alt=""
              className="h-[70vh] aspect-[3/4] object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* 右カード */}
          <div
            className="transition-all duration-300 cursor-pointer shrink-0 opacity-50"
            onClick={() => setCurrent(rightIdx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[rightIdx].src}
              alt=""
              className="h-[55vh] aspect-[3/4] object-cover rounded-xl shadow"
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
