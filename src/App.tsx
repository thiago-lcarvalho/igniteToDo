import { useEffect, useState } from "react";
import { Add } from "./Add/Add";
import { TasksHeader } from "./TasksHeader/TasksHeader";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export interface interfaceTasks {
	id: string;
	title: string;
	isCompleted: boolean;
}

function App() {
	const [tasks, setTasks] = useState<interfaceTasks[]>([]);

	function loadSavedTasks() {
		const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (saved) {
			setTasks(JSON.parse(saved));
		}
	}

	useEffect(() => {
		loadSavedTasks();
	}, []);

	function setTasksAndSave(newTasks: interfaceTasks[]) {
		setTasks(newTasks);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
	}

	function addTasks(tasksTitle: string) {
		setTasksAndSave([
			...tasks,
			{
				id: crypto.randomUUID(),
				title: tasksTitle,
				isCompleted: false,
			},
		]);
	}

	function deleteTasksById(tasksId: string) {
		const newTasks = tasks.filter((tasks) => tasks.id !== tasksId);
		setTasksAndSave(newTasks);
	}

	function toggleTasksCompleteById(tasksId: string) {
		const newTasks = tasks.map((tasks) => {
			if (tasks.id == tasksId) {
				return {
					...tasks,
					isCompleted: !tasks.isCompleted,
				};
			}
			return tasks;
		});
		setTasksAndSave(newTasks);
	}

	console.log(`%c
  < muuuuuuuuu >
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||`);

	return (
		<>
			<Add onAddTasks={addTasks} />
			<TasksHeader
				tasks={tasks}
				onDelete={deleteTasksById}
				onComplete={toggleTasksCompleteById}
			/>
		</>
	);
}

export default App;
