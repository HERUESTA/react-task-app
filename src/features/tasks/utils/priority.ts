import type { Priority } from "../../../types/task";

// 優先度に応じたスタイルクラスを返す関数
export const getPriorityClass = (
  priority: Priority, // 優先度（high | medium | low）などの文字列（Priority型）
  styles: Record<string, string> // スタイルモジュール（key-value形式のオブジェクト）
): string => {
  switch (priority.toLowerCase()) {
    case "high":
      return styles.highPriority; // 高優先度のスタイルクラスを返す
    case "medium":
      return styles.mediumPriority; // 中優先度のスタイルクラスを返す
    case "low":
      return styles.lowPriority; // 低優先度のスタイルクラスを返す
    default:
      return styles.defaultPriority; // デフォルトのスタイルクラスを返す
  }
};