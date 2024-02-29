import { useState } from "react";
import "./App.css";
import Notifications from "./components/notifications/Notifications";
import Header from "./components/header/Header";
import Viewed from "./components/viewed/Viewed";

function App() {
	const [showColor, setShowColor] = useState(true);


	const toggleColorVisibility = () => {
		setShowColor(!showColor);
	}

	return (
		<div className="container">
			<Header
				onToggleColor={toggleColorVisibility}
				showColor={showColor}
			/>
			<Notifications showColor={showColor} />
			<Viewed />
		</div>
	);
}

export default App;
