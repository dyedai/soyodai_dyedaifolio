"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function useJSTClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      const now = new Date();
      const jst = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
      const yyyy = jst.getFullYear();
      const mm = String(jst.getMonth() + 1).padStart(2, "0");
      const dd = String(jst.getDate()).padStart(2, "0");
      const hh = String(jst.getHours()).padStart(2, "0");
      const min = String(jst.getMinutes()).padStart(2, "0");
      const ss = String(jst.getSeconds()).padStart(2, "0");
      return `${yyyy} ${mm} ${dd} ${hh}:${min}:${ss} (JST)`;
    };

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Header() {
  const time = useJSTClock();

  return (
    <header
      className="flex items-center justify-between px-8 h-20"
      style={{ backgroundColor: "#EAEBE5" }}
    >
      <Link href="/" aria-label="ホームへ戻る">
        <Image
          src="/soyodaiLOGO.svg"
          alt="Soyodai"
          width={180}
          height={60}
          priority
        />
      </Link>

      <p className="hidden md:block font-sikakuji text-4xl tracking-wide">
        {time}
      </p>
    </header>
  );
}
