// タスクの優先度は「high」「medium」「low」の3種類です。
export type Priority = "high" | "medium" | "low";

// タスクオブジェクト全体の型を定義します。
export interface Task {
  id: number; 
  title : string;
  description: string;
  status: boolean;
  priority: Priority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}