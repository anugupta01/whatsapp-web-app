import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/index.css";
import { UsersProvider } from "context/usersContext";
import { SocketProvider } from "context/socketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<SocketProvider>
			<UsersProvider>
				<App />
			</UsersProvider>
		</SocketProvider>
	</React.StrictMode>
);

reportWebVitals();