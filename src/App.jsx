import { useState } from "react";
import "./App.css";
import Notifications from "./components/notifications/Notifications";
import Header from "./components/header/Header";


function App() {
	const [showColor, setShowColor] = useState(true);

	const toggleColorVisibility = () => {
		setShowColor((prevShowColor) => !prevShowColor);
	};

	return (
		<div className="container">
			<Header
				onToggleColor={toggleColorVisibility}
				showColor={showColor}
			/>
			<Notifications showColor={showColor} />
		</div>
	);
}

export default App;
