import "./list.css";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TaskContext } from "../../context/TaskContext";

export default function TaskList() {
	const { tasks, deleteTask } = useContext(TaskContext);

	return (
		<div className="tasks-section">
			{tasks.length > 0 ? (
				tasks.map((task) => (
					<div className="task-list" key={task.id}>
						<p className="task-title">{task.title}</p>
						<div className="task-control">
							<p>{task.description}</p>
							<button onClick={deleteTask}>
								<FaTrashAlt />
							</button>
							<FaEdit />
							<IoCheckmarkCircle />
						</div>
					</div>
				))
			) : (
				<p className="task-status">You have added no task yet!</p>
			)}
		</div>
	);
}
