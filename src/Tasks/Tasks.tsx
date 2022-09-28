import styles from "./tasks.module.css";
import { Circle, Trash, CheckCircle } from "phosphor-react";
import { interfaceTasks } from "../App";

interface Props {
	tasks: interfaceTasks;
	onDelete: (tasksId: string) => void;
	onComplete: (tasksId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
	return (
		<section>
			<div className={styles.tasks}>
				<div className={styles.tasksButtonCircle}>
					<button
						onClick={() => {
							onComplete(tasks.id);
						}}
					>
						{tasks.isCompleted ? (
							<CheckCircle
								weight="duotone"
								className={styles.buttonCompleted}
								size={22}
							/>
						) : (
							<Circle className={styles.buttonNotCompleted} size={22} />
						)}
					</button>
				</div>
				<p
					className={
						tasks.isCompleted ? styles.tasksTextCompleted : styles.tasksText
					}
				>
					{tasks.title}
				</p>
				<div
					className={styles.tasksButtonTrash}
					onClick={() => onDelete(tasks.id)}
				>
					<button>
						<Trash size={22} />
					</button>
				</div>
			</div>
		</section>
	);
}
