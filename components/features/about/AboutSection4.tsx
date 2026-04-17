import SectionTitle from "./SectionTitle";
import VerticalColumns from "./VerticalColumns";
import FloatingCloud from "@/components/ui/FloatingCloud";
import type { Column } from "@/lib/about";

const COLUMNS: Column[] = [
  "二〇〇三年　誕生",
  "二〇二一　芝浦工業大学",
  "二〇二五年　高嶋研究室",
  "二〇二六年 株式会社ファブリカ",
];

export default function AboutSection4() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center gap-12 lg:gap-50 px-8">
      <FloatingCloud src="/kumo9.svg" direction="left" width={1300} height={320} className="bottom-[-30px] left-0" />
      <SectionTitle title="経歴" bgImage="/titlebg4.svg" />
      <VerticalColumns columns={COLUMNS} className="leading-[92px] text-2xl tracking-[0.4em]" />
    </section>
  );
}
