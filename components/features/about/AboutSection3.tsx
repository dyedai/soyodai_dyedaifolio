import SectionTitle from "./SectionTitle";
import VerticalColumns from "./VerticalColumns";
import FloatingCloud from "@/components/ui/FloatingCloud";
import type { Column } from "@/lib/about";

const COLUMNS: Column[] = [
  "幼き日の工作",
  "あの無垢な熱量を",
  "デジタルの領域へ",
  { text: "陣内侘助のごとき", image: "/wabisuke.png" },
  "独走にして圧倒的な技術",
  "多彩な技術を操り",
  "誰も見たことのない",
  "触れたことのない体験を",
];

export default function AboutSection3() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center gap-12 lg:gap-50 px-8">
      <FloatingCloud src="/kumo7.svg" direction="left"  width={540*0.85} height={150} className="bottom-0 left-0" />
      <FloatingCloud src="/kumo8.svg" direction="right" width={540*0.8} height={150} className="bottom-0 right-0" />
      <VerticalColumns columns={COLUMNS} className="leading-[50px] text-2xl tracking-[0.4em]" />
      <SectionTitle
        title={"なぜ\nエンジニア\nを目指したのか"}
        bgImage="/titlebg3.svg"
      />
    </section>
  );
}
