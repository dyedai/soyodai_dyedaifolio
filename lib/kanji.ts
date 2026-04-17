const D = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

export function toKanji(n: number): string {
  if (n === 0) return D[0];
  if (n <= 9) return D[n];
  if (n < 100) {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return (tens === 1 ? "" : D[tens]) + "十" + (ones === 0 ? "" : D[ones]);
  }
  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    return (hundreds === 1 ? "" : D[hundreds]) + "百" + (rest === 0 ? "" : toKanji(rest));
  }
  return n.toString();
}
