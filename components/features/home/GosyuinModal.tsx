interface Props {
  onAccept: () => void;
  onClose: () => void;
}

export default function GosyuinModal({ onAccept, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white px-12 py-10 flex flex-col items-center gap-8">
        <p className="text-xl tracking-widest">御朱印を授かりますか</p>
        <div className="flex gap-6">
          <button
            onClick={onAccept}
            className="text-lg px-8 py-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            拝受
          </button>
          <button
            onClick={onClose}
            className="text-lg px-8 py-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            不要
          </button>
        </div>
      </div>
    </div>
  );
}
