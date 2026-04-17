"use client";

import { useState } from "react";

interface Props {
  onSubmit: (name: string) => void;
  onClose: () => void;
}

export default function NameInputModal({ onSubmit, onClose }: Props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name.length > 6) {
      setError("六字以内で入力してください");
      return;
    }
    onSubmit(name);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white px-12 py-10 flex flex-col items-center gap-8 min-w-[320px]">
        <p className="text-xl tracking-widest">おなまえをどうぞ</p>
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => { setError(""); setName(e.target.value); }}
            placeholder="おなまえ（任意）"
            className="border-b border-black py-2 text-center text-lg outline-none w-full"
          />
          {error
            ? <p className="text-red-500 text-xs text-center">{error}</p>
            : <p className="text-red-400 text-xs text-center">刻印なしでも続行できます</p>
          }
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="text-lg px-8 py-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            続行
          </button>
          <button
            onClick={onClose}
            className="text-lg px-6 py-2 text-gray-400 hover:text-black transition-colors"
          >
            戻る
          </button>
        </div>
      </div>
    </div>
  );
}
