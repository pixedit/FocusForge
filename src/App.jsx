import AddTask from "./components/Header/AddTask";
import TaskList from "./components/TaskList/TaskList";
import { TaskProvider } from "./context/TaskProvider";

function App() {
	return (
		<div className="container">
			<div className="to-do-app">
				<TaskProvider>
					<AddTask />
					<TaskList />
				</TaskProvider>
			</div>
		</div>
	);
}

export default App;
