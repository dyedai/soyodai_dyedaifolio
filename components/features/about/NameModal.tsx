export type ModalType = "daiki" | "kakimi" | null;

const MODAL_DATA = {
  kakimi: {
    items: ["【全国順位】 4,875位", "【全国人数】 およそ2,100人"],
    link: {
      text: "参考サイト",
      href: "https://myoji-yurai.net/searchResult.htm?myojiKanji=%E5%9E%A3%E8%A6%8B",
    },
  },
  daiki: {
    items: ["【生まれ年（2003年）名前ランキング】1位"],
    link: {
      text: "参考サイト",
      href: "https://www.meijiyasuda.co.jp/enjoy/ranking/year_men/boy.html",
    },
  },
};

interface Props {
  type: ModalType;
  onClose: () => void;
}

export default function NameModal({ type, onClose }: Props) {
  if (!type) return null;
  const data = MODAL_DATA[type];

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2 mb-4">
          {data.items.map((item) => (
            <p key={item} className="text-sm">{item}</p>
          ))}
        </div>
        <a
          href={data.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:opacity-70"
        >
          {data.link.text}
        </a>
        <button
          onClick={onClose}
          className="mt-4 block w-full text-center text-gray-400 text-sm hover:text-black transition-colors"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
