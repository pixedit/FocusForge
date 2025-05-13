import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
	const [tasks, setTasks] = useState([]);

	function addTask(task) {
		setTasks([...tasks, task]);
	}

	function editTask(id, updatedTask) {
		setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
	}

	return (
		<TaskContext.Provider value={{ tasks, addTask, editTask }}>
			{children}
		</TaskContext.Provider>
	);
}
