// app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";

const bonji = localFont({
  src: "./fonts/CKbonji.woff2",
  variable: "--font-bonji",
  display: "swap",
});

const sikakuji = localFont({
  src: "./fonts/HOT-Kakukuzusishukk-B.otf",
  variable: "--font-sikakuji",
  display: "swap",
});

const tappitu = localFont({
  src: "./fonts/HOT-Soshokk-R.otf",
  variable: "--font-tappitu",
  display: "swap",
});

const defaultFont = localFont({
  src: "./fonts/YujiSyuku-Regular.woff2",
  variable: "--font-default",
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`
        ${bonji.variable}
        ${sikakuji.variable}
        ${tappitu.variable}
        ${defaultFont.variable}
      `}
    >
      <body className="font-default">
        <Header />
        {children}
      </body>
    </html>
  );
}