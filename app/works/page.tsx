import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="font-default text-2xl">準備中</p>
      <Link href="https://daidai-folio.vercel.app/works" className="ml-4 text-blue-500 underline">
        作品一覧（旧ポートフォリオサイト）
      </Link>
    </main>
  );
}
