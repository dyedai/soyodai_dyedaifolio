export default function LikesPage() {
  return (
    <main className="flex flex-col h-[calc(100vh-5rem)]">
      {/* 上部：左→右（Headerの直下） */}
      <div className="w-full overflow-hidden">
        <div
          className="flex w-max gap-2"
          style={{ animation: "loop-right 20s linear infinite" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/looplogo.svg" alt="" className="h-16 w-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/looplogo.svg" alt="" className="h-16 w-auto" />
        </div>
      </div>

      {/* コンテンツエリア */}
      <div className="flex-1 flex items-center justify-center">
        <p className="font-default text-2xl">準備中</p>
      </div>

      {/* 下部：右→左（画面の一番下） */}
      <div className="w-full overflow-hidden">
        <div
          className="flex w-max gap-2"
          style={{ animation: "loop-left 20s linear infinite" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/looplogo.svg" alt="" className="h-16 w-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/looplogo.svg" alt="" className="h-16 w-auto" />
        </div>
      </div>
    </main>
  );
}
