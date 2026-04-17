interface Item {
  id: number;
  src: string;
  title: string;
  description: string;
  images: string[];
}

interface Props {
  item: Item;
  onClose: () => void;
}

export type { Item };

export default function LikesModal({ item, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden"
        style={{ width: "80vw", height: "80vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 左：説明 */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="font-default text-2xl mb-4">{item.title}</h2>
          <p className="font-default text-base leading-relaxed">{item.description}</p>
          <button
            onClick={onClose}
            className="mt-8 self-start text-sm text-gray-400 hover:text-black transition-colors"
          >
            閉じる
          </button>
        </div>

        {/* 右：画像（スクロール可） */}
        <div className="w-full md:w-1/2 overflow-y-auto">
          {item.images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" className="w-full object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
}
