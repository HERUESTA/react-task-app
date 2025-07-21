// タスクの優先度は「high」「medium」「low」の3種類です。
export type Priority = "high" | "medium" | "low";
export type TaskFormData = Omit<Task, "id" | "status" | "createdAt" | "updatedAt">;

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