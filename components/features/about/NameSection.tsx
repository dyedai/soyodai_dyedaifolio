"use client";

import { useState } from "react";
import SvgColorButton from "./SvgColorButton";
import NameModal, { type ModalType } from "./NameModal";

export default function NameSection() {
  const [modal, setModal] = useState<ModalType>(null);
  const [hovered, setHovered] = useState<ModalType>(null);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center" style={{ paddingTop: 270 }}>
        <div className="flex items-center justify-center gap-2">
          <SvgColorButton
            src="/kakimi.svg"
            alt="Kakimi"
            width={400}
            height={199}
            hovered={hovered === "kakimi"}
            onClick={() => setModal("kakimi")}
            onMouseEnter={() => setHovered("kakimi")}
            onMouseLeave={() => setHovered(null)}
          />
          <SvgColorButton
            src="/daiki.svg"
            alt="Daiki"
            width={400}
            height={199}
            hovered={hovered === "daiki"}
            onClick={() => setModal("daiki")}
            onMouseEnter={() => setHovered("daiki")}
            onMouseLeave={() => setHovered(null)}
          />
        </div>

        <div className="mt-2 text-center font-default">
          <p className="text-3xl md:text-4xl">Daiki Kakimi</p>
          <p className="text-lg md:text-xl">Engineer</p>
        </div>
      </section>

      <NameModal type={modal} onClose={() => setModal(null)} />
    </>
  );
}
