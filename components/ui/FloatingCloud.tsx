"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "hidden" | "sliding" | "floating";

interface Props {
  src: string;
  direction: "left" | "right";
  width?: number;
  height?: number;
  className?: string;
}

export default function FloatingCloud({
  src,
  direction,
  width = 500,
  height = 130,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("sliding");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slideAnim = direction === "left" ? "slide-from-left" : "slide-from-right";

  const style: React.CSSProperties =
    phase === "hidden"
      ? { opacity: 0 }
      : phase === "sliding"
      ? { animation: `${slideAnim} 1s ease-out forwards` }
      : { animation: "float-cloud 3s ease-in-out infinite" };

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      style={style}
      onAnimationEnd={() => {
        if (phase === "sliding") setPhase("floating");
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={width} height={height} />
    </div>
  );
}
