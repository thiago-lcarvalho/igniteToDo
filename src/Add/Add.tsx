import styles from "./Add.module.css";
import { ListChecks, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
	onAddTasks: (tasksTitle: string) => void;
}

export function Add({ onAddTasks }: Props) {
	const [title, setTitle] = useState("");

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		onAddTasks(title);
		setTitle("");
	}

	function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
		setTitle(event.target.value);
	}

	return (
		<header>
			<div className={styles.header}>
				<ListChecks size={40} />
				<h1 className={styles.to}>to</h1>
				<h1 className={styles.do}>do</h1>
			</div>
			<article className={styles.article}>
				<form onSubmit={handleSubmit} className={styles.newTaskForm}>
					<input
						className={styles.input}
						type="text"
						name="add"
						id="add"
						placeholder="Adicione uma nova tarefa"
						onSubmit={handleSubmit}
						onChange={onChangeTitle}
						value={title}
					/>
					<button className={styles.button}>
						<p className={styles.buttonText}>Criar</p>{" "}
						{<PlusCircle size={20} className={styles.plus} />}
					</button>
				</form>
			</article>
		</header>
	);
}
