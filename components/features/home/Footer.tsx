import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full flex justify-between items-end px-[30px] pb-[27px]">
      <button type="button" aria-label="モード切り替え">
        <Image
          src="/modechange_light.svg"
          alt="モード切り替え"
          width={28}
          height={28}
          className="w-6 h-6 md:w-7 md:h-7"
        />
      </button>

      <nav>
        <ul className="flex flex-col items-start gap-2">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-sikakuji text-lg md:text-5xl hover:opacity-70 transition-opacity"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
