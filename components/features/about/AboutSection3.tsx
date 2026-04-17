import SectionTitle from "./SectionTitle";

const COLUMNS: string[] = [
  "幼き日の工作",
  "あの無垢な熱量を",
  "デジタルの領域へ",
  "陣内侘助のごとき",
  "独走にして圧倒的な技術",
  "多彩な技術を操り",
  "誰も見たことのない",
  "触れたことのない体験を",
];

export default function AboutSection3() {
  return (
    <section className="min-h-screen flex items-center justify-center gap-12 lg:gap-50 px-8">
      {/* 8列縦書き本文（左）・flex-row-reverseで左から右に読む */}
      <div className="flex flex-row-reverse gap-6 font-default leading-[50px] text-2xl tracking-[0.4em]">
        {COLUMNS.map((col, i) => (
          <p
            key={i}
            className="[writing-mode:vertical-rl] [text-orientation:upright]"
          >
            {col}
          </p>
        ))}
      </div>

      {/* タイトル（右）・縦長表示 */}
      <SectionTitle
        title={"なぜ\nエンジニア\nを目指したのか"}
        bgImage="/titlebg3.svg"
      />
    </section>
  );
}
