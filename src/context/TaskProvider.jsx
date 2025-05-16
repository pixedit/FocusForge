import { useState } from "react";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }) {
	const [tasks, setTasks] = useState([]);

	function addTask(taskTitle, taskDescription) {
		const newTask = {
			id: Date.now(),
			title: String(taskTitle),
			description: String(taskDescription),
			isCompleted: false,
			isEditing: false,
		};
		setTasks([...tasks, newTask]);
	}

	function editTask(id, updatedTask) {
		setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
	}

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
			)
		);
	};

	// task.isCompleted = !task.isCompleted

	function deleteTask(id) {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this task?"
		);

		if (confirmDelete) {
			setTasks(tasks.filter((task) => task.id !== id));
		}
	}
	return (
		<TaskContext.Provider
			value={{ tasks, addTask, editTask, deleteTask, toggleComplete }}>
			{children}
		</TaskContext.Provider>
	);
}
