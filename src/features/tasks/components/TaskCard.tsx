import { Link } from "react-router-dom";
import styles from "../styles/taskCard.module.css";
import { getPriorityClass } from "../utils/priority";  // getPriorityClass関数をimport
import { getStatusLabel } from "../utils/status-label"; // getStatusLabel関数をimport
import type { Task } from "../../../types/task";

type Props = {
  task: Task;
  onToggleStatus: (taskId: Task['id'], newStatus: boolean) => void;
};

export default function TaskCard({ task, onToggleStatus }: Props) {

  // ステータス変更時のハンドラー
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value === "true";
    if (onToggleStatus) {
      onToggleStatus(task.id, newStatus);
    }
  };

  return (
    <div className={styles.taskCard}>
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      {/* ステータスをセレクトボックスに変更 */}
      <select
        value={task.status ? "true" : "false"}
        onChange={handleStatusChange}
        className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
      >
        <option value="false">{getStatusLabel(false)}</option>
        <option value="true">{getStatusLabel(true)}</option>
      </select>
      <p className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}>
        {getStatusLabel(task.status)}
      </p> {/* importしたgetStatusLabel関数を使用して、引数にstatusを渡す */}
      <p className={`${styles.badge} ${getPriorityClass(task.priority, styles)}`}>{task.priority}</p>  {/* importしたgetPriorityClass関数を使用して、引数にpriorityとstylesを渡す */}
      <p className={styles.taskDueDate}>{task.dueDate}</p>
    </div>
  );
}