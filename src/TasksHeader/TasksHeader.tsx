import { ClipboardText } from "phosphor-react";
import { interfaceTasks } from "../App";
import { Tasks } from "../Tasks/Tasks";
import styles from "./tasksHeader.module.css";

interface Props {
	tasks: interfaceTasks[];
	onDelete: (tasksId: string) => void;
	onComplete: (tasksId: string) => void;
}

export function TasksHeader({ tasks, onDelete, onComplete }: Props) {
	const tasksQuantity = tasks.length;
	const completedTasks = tasks.filter((tasks) => tasks.isCompleted).length;

	return (
		<section className={styles.section}>
			<div className={styles.tasksState}>
				<p className={styles.createdTasks}>
					Tarefas Criadas
					<span className={styles.createdTasksNumber}>{tasksQuantity}</span>
				</p>
				<p className={styles.finishedTasks}>
					Tarefas Concluidas
					<span className={styles.finishedTasksNumber}>
						{completedTasks} de {tasksQuantity}
					</span>
				</p>
			</div>
			<div>
				{tasks.map((tasks) => (
					<Tasks
						key={tasks.id}
						tasks={tasks}
						onDelete={onDelete}
						onComplete={onComplete}
					/>
				))}

				{tasks.length <= 0 && (
					<section className={styles.sectionNoText} >
						<ClipboardText color="#333333" size={100} />
						<p className={styles.sectionNoTextOne} >Você ainda não tem tarefas cadastradas</p>
						<p className={styles.sectionNoTextTwo} >Crie tarefas e organize seus itens a fazer</p>
					</section>
				)}
			</div>
		</section>
	);
}
