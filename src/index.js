import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// ! poner el modo estritco para cuando terminemos (<React.StrictMode>)
	// <React.StrictMode>
		<App />
	// </React.StrictMode>
);
