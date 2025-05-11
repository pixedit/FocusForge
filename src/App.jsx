import AddTask from "./components/Header/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
	return (
		<div className="container">
			<div className="to-do-app">
				<AddTask />
				<TaskList />
			</div>
		</div>
	);
}

export default App;
