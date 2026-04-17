"use client";

import { useState } from "react";

interface Props {
  text: string;
  image: string;
}

export default function ImageModalButton({ text, image }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="self-start [writing-mode:vertical-rl] [text-orientation:upright] hover:opacity-70 transition-opacity"
      >
        {text}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
