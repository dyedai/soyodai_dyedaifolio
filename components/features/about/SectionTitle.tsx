interface Props {
  title: string;
  bgImage?: string;
  imgWidth?: number;
  imgHeight?: number;
}

export default function SectionTitle({
  title,
  bgImage = "/titlebg2.svg",
  imgWidth = 533,
  imgHeight = 280,
}: Props) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={bgImage} alt="" width={imgWidth} height={imgHeight} />
      <p className="absolute font-default text-3xl md:text-5xl [writing-mode:vertical-rl] whitespace-pre tracking-[0.4em]">
        {title}
      </p>
    </div>
  );
}
