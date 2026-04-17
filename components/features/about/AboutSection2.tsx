import Link from "next/link";
import SectionTitle from "./SectionTitle";

const COLUMNS: string[] = [
  "二〇〇三年　岡山県生まれ",
  "フロントエンドを　中心に活動中",
  "デザインと　実装を　行き来する",
  "音楽と　コードを　こよなく愛す",
  "現在　東京を拠点に　活動している",
];

export default function AboutSection2() {
  return (
    <section className="min-h-screen flex items-center justify-center gap-12 lg:gap-50 px-8">
      {/* タイトル（左） */}
      <SectionTitle title="私について" />

      {/* 6列縦書き本文（右）・左から右に読む順 */}
      <div className="flex flex-row-reverse gap-6 font-default leading-[50px] text-2xl tracking-[0.2em]">
        {COLUMNS.map((col, i) => (
          <p
            key={i}
            className="[writing-mode:vertical-rl] [text-orientation:upright]"
          >
            {col}
          </p>
        ))}

        {/* 6列目：likesリンク */}
        <Link
          href="/about/likes"
          className="[writing-mode:vertical-rl] [text-orientation:upright] hover:opacity-70 transition-opacity"
        >
          好きなものは→
        </Link>
      </div>
    </section>
  );
}
