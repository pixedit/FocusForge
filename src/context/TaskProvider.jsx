import { useState } from "react";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }) {
	const [tasks, setTasks] = useState([]);

	function addTask(task) {
		setTasks([...tasks, task]);
	}

	function editTask(id, updatedTask) {
		setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
	}

	function deleteTask(id) {
		const conform = window.confirm("Would You like to delete the task?");
		if (conform) {
			setTasks(tasks.filter((task) => task.id === id));
		}
	}
	return (
		<TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	);
}
