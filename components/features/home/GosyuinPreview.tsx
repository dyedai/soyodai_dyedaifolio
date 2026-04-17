"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import { toKanji } from "@/lib/kanji";

interface Props {
  name: string;
  date: Date;
  onClose: () => void;
}


function buildDateText(jst: Date): string {
  const ERAS = [
    { name: "令和", start: new Date(2019, 4, 1) },
    { name: "平成", start: new Date(1989, 0, 8) },
  ];

  for (const era of ERAS) {
    if (jst >= era.start) {
      const year = jst.getFullYear() - era.start.getFullYear() + 1;
      const y = year === 1 ? "元" : toKanji(year);
      const m = toKanji(jst.getMonth() + 1);
      const d = toKanji(jst.getDate());

      return `${era.name}${y}年${m}月${d}日`;
    }
  }
  return "";
}

function buildTimeText(jst: Date): string {
  const h24 = jst.getHours();
  const ampm = h24 < 12 ? "午前" : "午後";
  const h12 = h24 % 12 || 12;
  return `${ampm}${toKanji(h12)}時${toKanji(jst.getMinutes())}分${toKanji(jst.getSeconds())}秒`;
}

export default function GosyuinPreview({ name, date, onClose }: Props) {
  const previewRef = useRef<HTMLDivElement>(null);

  const jst = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  const dateText = buildDateText(jst);
  const timeText = buildTimeText(jst);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    const dataUrl = await toPng(previewRef.current, { cacheBust: true });
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "gosyuin.png";
    a.click();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-center gap-6 p-4">
      {/* プレビュー（587:839比率） */}
      <div
        ref={previewRef}
        className="relative bg-white"
        style={{ width: 294, height: 420 }}
      >
        {/* ベース画像 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gosyuin.svg"
          alt="御朱印"
          className="w-full h-full object-cover"
        />

        {/* 名前（左上・ピッタリ） */}
          {name && (
            <p className="absolute top-0 left-[2%] font-sikakuji text-2xl leading-tight">
              {name}
            </p>
          )}

        {/* 日付（右下・縦書き・2行目は2文字インデント） */}
        <div className="absolute inset-y-0 right-0 flex items-end">
            <p className="font-tappitu text-3xl [writing-mode:vertical-rl] [text-orientation:upright] leading-none">
              {dateText}
            </p>
        </div>

        {/* 時刻（左下・縦書き・1列） */}
        <div className="absolute inset-y-0 left-0 flex items-end">
          <p className="font-tappitu text-3xl [writing-mode:vertical-rl] [text-orientation:upright] leading-none">
              {timeText}
          </p>
        </div>
        </div>

      <div className="flex gap-4">
        <button
          onClick={handleDownload}
          className="text-base px-8 py-2 bg-white border border-white hover:bg-gray-100 transition-colors"
        >
          ダウンロード
        </button>
        <button
          onClick={onClose}
          className="text-base px-8 py-2 border border-white text-white hover:bg-white/10 transition-colors"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
