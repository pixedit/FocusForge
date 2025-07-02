import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import PropTypes from "prop-types";

TaskProvider.propTypes = {
	children: PropTypes.node, // Validating the 'children' prop
};

export function TaskProvider({ children }) {
	const [tasks, setTasks] = useState(() => {
		const storedTasks = localStorage.getItem("tasks");
		return storedTasks ? JSON.parse(storedTasks) : [];
	});

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	function addTask(taskTitle, taskDescription) {
		const newTask = {
			id: Date.now(),
			title: taskTitle,
			description: taskDescription,
			isCompleted: false,
		};
		setTasks([...tasks, newTask]);
	}

	function deleteTask(id) {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this task?"
		);

		if (confirmDelete) {
			setTasks(tasks.filter((task) => task.id !== id));
		}
	}

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
			)
		);
	};

	function editTask(id, updatedTitle, updatedDescription) {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							title: updatedTitle,
							description: updatedDescription,
					  }
					: task
			)
		);
	}
	return (
		<TaskContext.Provider
			value={{ tasks, addTask, editTask, deleteTask, toggleComplete }}>
			{children}
		</TaskContext.Provider>
	);
}
