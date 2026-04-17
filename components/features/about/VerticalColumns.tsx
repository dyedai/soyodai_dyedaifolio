import Link from "next/link";
import type { Column } from "@/lib/about";
import ImageModalButton from "./ImageModalButton";

interface Props {
  columns: Column[];
  className?: string;
}

export default function VerticalColumns({ columns, className = "" }: Props) {
  return (
    <div className={`flex flex-row-reverse gap-6 font-default ${className}`}>
      {columns.map((col, i) => {
        if (typeof col === "string") {
          return (
            <p key={i} className="[writing-mode:vertical-rl] [text-orientation:upright]">
              {col}
            </p>
          );
        }
        if ("image" in col) {
          return <ImageModalButton key={i} text={col.text} image={col.image} />;
        }
        return (
          <Link
            key={i}
            href={col.href}
            className="[writing-mode:vertical-rl] [text-orientation:upright] hover:opacity-70 transition-opacity"
          >
            {col.text}
          </Link>
        );
      })}
    </div>
  );
}
