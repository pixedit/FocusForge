import "./header.css";
export default function AddTask() {
	return (
		<div className="header">
			<h2>
				<span className="app-name">FocusForge</span> Helps You Track Your goals
			</h2>
			<div className="inputs">
				<Title />
			</div>
		</div>
	);
}

function Title() {
	return (
		<>
			<div className="title">
				<p>Add Title</p>
				<input type="text" placeholder="Add Title..." />
			</div>
			<div className="task">
				<p>Description</p>
				<input type="text" placeholder="Add Description..." />
			</div>
		</>
	);
}
