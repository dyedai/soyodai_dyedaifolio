import SectionTitle from "./SectionTitle";
import VerticalColumns from "./VerticalColumns";
import FloatingCloud from "@/components/ui/FloatingCloud";
import type { Column } from "@/lib/about";

const COLUMNS: Column[] = [
  "平成十五年生まれ",
  "出身　東大和市",
  "血液型　O型",
  "十六性格　討論者",
  "一言　負けず嫌い",
  "好きなもの　服",
];

export default function AboutSection2() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center gap-12 lg:gap-50 px-8">
      <FloatingCloud src="/kumo3.svg" direction="right" width={540} height={150} className="top-10 left-240" />
      <FloatingCloud src="/kumo4.svg" direction="left"  width={540} height={150} className="bottom-[5px] left-0 zindex-20" />
      <FloatingCloud src="/kumo6.svg" direction="right" width={540}  height={150*0.9} className="bottom-[0px] right-0" />
      <SectionTitle title="私について" />
      <VerticalColumns columns={COLUMNS} className="leading-[50px] text-2xl tracking-[0.2em]" />
    </section>
  );
}
