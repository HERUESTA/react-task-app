import type { Task, TaskFormData } from "../../../types/task";
import { mockTasks } from "../mocks/task";

export const createTask = (taskData: TaskFormData): Promise<Task> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTask: Task = {
        ...taskData,
        id: mockTasks.length + 1, // 新しいタスクのIDを設定
        status: false, // デフォルトで未完了
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mockTasks.push(newTask); // モックデータに新しいタスクを追加
      resolve(newTask); // 新しいタスクを返す
    }, 500);
  });
}