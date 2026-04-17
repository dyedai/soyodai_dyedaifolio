export default function Home() {
  return (
    <main className="p-10 space-y-8">
      <h1 className="text-3xl">フォント確認</h1>

      <div className="space-y-4">
        <p className="font-default text-xl">
          これはデフォルトフォント（本文）
        </p>

        <p className="font-bonji text-2xl">
          これは梵字フォント（bonji）
        </p>

        <p className="font-sikakuji text-2xl">
          これは四角字フォント（sikakuji）
        </p>

        <p className="font-tappitu text-2xl">
          これは達筆フォント（tappitu）
        </p>
      </div>
    </main>
  );
}