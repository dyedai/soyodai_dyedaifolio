"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toKanji } from "@/lib/kanji";
import GosyuinModal from "./GosyuinModal";
import NameInputModal from "./NameInputModal";
import GosyuinPreview from "./GosyuinPreview";

type Era = {
  name: string;
  start: Date;
};

const ERAS: Era[] = [
  { name: "令和", start: new Date(2019, 4, 1) },
  { name: "平成", start: new Date(1989, 0, 8) },
  { name: "昭和", start: new Date(1926, 11, 25) },
];

function getEra(date: Date) {
  for (const era of ERAS) {
    if (date >= era.start) {
      const year = date.getFullYear() - era.start.getFullYear() + 1;
      return { name: era.name, year };
    }
  }
  return null;
}

export function useWarekiDate() {
  const [text, setText] = useState("");

  useEffect(() => {
    const jst = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
    );
    const era = getEra(jst);
    if (!era) return;
    const eraYearText = era.year === 1 ? "元" : toKanji(era.year);
    const monthText = toKanji(jst.getMonth() + 1);
    const dayText = toKanji(jst.getDate());
    setText(`${era.name}${eraYearText}年${monthText}月${dayText}日`);
  }, []);

  return text;
}

type Step = "idle" | "confirm" | "name" | "preview";

export default function KV() {
  const dateText = useWarekiDate();
  const [step, setStep] = useState<Step>("idle");
  const [gosyuinName, setGosyuinName] = useState("");
  const [gosyuinDate, setGosyuinDate] = useState<Date | null>(null);

  const handleNameSubmit = (name: string) => {
    setGosyuinName(name);
    setGosyuinDate(new Date());
    setStep("preview");
  };

  const handleClose = () => {
    setStep("idle");
    setGosyuinName("");
    setGosyuinDate(null);
  };

  return (
    <>
      <section
        className="flex items-center justify-center min-h-screen overflow-hidden cursor-pointer"
        onClick={() => step === "idle" && setStep("confirm")}
      >
        {/* 画像 */}
        <div className="flex flex-col items-center pb-16 md:pb-20 lg:pb-[87px]">
          <Image
            src="/KV.svg"
            alt="Key Visual"
            width={717}
            height={717}
            priority
            className="w-48 sm:w-72 md:w-[480px] lg:w-[600px] h-auto object-contain"
          />
        </div>

        {/* テキスト */}
        <div className="flex flex-col justify-end items-center pt-16 sm:pt-32 md:pt-48 lg:pt-[299px] pb-6 md:pb-8 lg:pb-[43px]">
          <p className="font-tappitu text-2xl sm:text-3xl md:text-4xl lg:text-5xl [writing-mode:vertical-rl] [text-orientation:upright] leading-relaxed">
            {dateText}
          </p>
        </div>
      </section>

      {step === "confirm" && (
        <GosyuinModal
          onAccept={() => setStep("name")}
          onClose={handleClose}
        />
      )}

      {step === "name" && (
        <NameInputModal
          onSubmit={handleNameSubmit}
          onClose={() => setStep("confirm")}
        />
      )}

      {step === "preview" && gosyuinDate && (
        <GosyuinPreview
          name={gosyuinName}
          date={gosyuinDate}
          onClose={handleClose}
        />
      )}
    </>
  );
}
