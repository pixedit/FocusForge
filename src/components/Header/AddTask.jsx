import "./header.css";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import Button from "../../utils/Button";

const AddTask = () => {
	const { addTask } = useContext(TaskContext);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (title.trim() && description.trim()) {
			addTask({ id: Date.now(), title, description });
			setTitle("");
			setDescription("");
		}
	}

	return (
		<form className="header" onSubmit={handleSubmit}>
			<h2>
				Welcome to <span className="app-name">FocusForge</span>
			</h2>
			<div className="inputs">
				<div className="title">
					<p>Title</p>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Add Title"
					/>
				</div>
				<div className="task">
					<p>Description</p>
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Description..."
					/>
				</div>
			</div>
			<Button onClick={handleSubmit} label="Add Task" />
		</form>
	);
};

export default AddTask;
