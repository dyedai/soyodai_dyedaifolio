interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  hovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function SvgColorButton({
  src,
  alt,
  width,
  height,
  hovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <button
      aria-label={alt}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width,
        height,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        backgroundColor: hovered ? "#55ff00" : "black",
        transition: "background-color 0.3s ease",
        flexShrink: 0,
      }}
    />
  );
}
