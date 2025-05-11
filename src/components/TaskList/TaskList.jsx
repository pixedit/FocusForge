import "./list.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
export default function TaskList() {
	return (
		<div className="tasks-section">
			<div className="task-list">
				<p className="task-title">Workout</p>
				<div className="task-control">
					<p>Complete My Exercises all today</p>
					<FaTrashAlt />
					<FaEdit />
					<IoCheckmarkCircle />
				</div>
			</div>
		</div>
	);
}
