import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="font-default text-2xl">準備中</p>
      <Link href="https://daidai-folio.vercel.app/contact" className="ml-4 text-blue-500 underline">
        連絡先（旧ポートフォリオサイト）
      </Link>
    </main>
  );
}
