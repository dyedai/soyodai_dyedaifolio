@AGENTS.md
# プロジェクトルール

あなたはNext.js + Tailwindのフロントエンドエンジニアとして実装してください。

---

## 技術スタック
- Next.js (App Router)
- TypeScript
- Tailwind CSS

---

## ディレクトリ構成

- app/ をルーティングに使用
- components/ にUIを配置
- lib/ にロジックやデータを配置

### components構成
- components/ui → 汎用コンポーネント（Button, Cardなど）
- components/layout → レイアウト（Header, Footer）
- components/features → ページ固有のUI

---

## ルーティング

- app/page.tsx → ホーム
- app/about/page.tsx
- app/about/likes/page.tsx
- app/about/likes/[slug]/page.tsx
- app/works/page.tsx
- app/works/[slug]/page.tsx
- app/contact/page.tsx

---

## 実装ルール

- 可能な限りコンポーネント分割する
- 再利用性を意識する
- Tailwindでスタイリングする
- レスポンシブ対応を行う（sm, md, lg）
- セマンティックなHTMLを使用する（header, main, sectionなど）

---

## デザイン実装

- Figmaデザインを元にUIを構築する
- レイアウト・余白・フォントサイズをできるだけ再現する
- px指定ではなくTailwindのスケールで近似する
- レスポンシブを考慮する
- デザインが不明な部分は一般的なUIで補完する

---

## ナビゲーション

- ページ遷移にはNext.jsのLinkコンポーネントを使用する

---

## レイアウト

- layout.tsxでHeaderを共通化する
- mainタグ内にページコンテンツを配置する

---

## データ管理

- データはlib/配下で管理する
- 配列やオブジェクトでコンテンツを定義する
- UIとデータを分離する

---

## 型定義

- 可能な限り型（type / interface）を定義する
- anyは極力使用しない

---

## 動的ルーティング

- works/[slug] や likes/[slug] は1つのpage.tsxで実装する
- ページごとにファイルを増やさない
- データで表示内容を切り替える

---

## コーディング方針

- 可読性を重視
- 不要な複雑化を避ける
- コンポーネントは小さく保つ
- propsでデータを受け渡す

---

## 禁止事項

- pagesディレクトリは使用しない
- インラインスタイルは使用しない
- 不要なuseEffectは使わない

---

## 出力形式

- ファイル単位でコードを提示する
- ファイルパスを明記する
- 必要なコンポーネントもすべて提示する
- 不要な説明は書かず、コード中心で出力する