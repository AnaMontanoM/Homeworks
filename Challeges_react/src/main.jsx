import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirstApp from "./FirstApp";
import ComponentApp from "./ComponentApp";
import "./index.css";
import GitExpertApp from "./GitExpertApp";
import { GifGrid } from "./components/GifGrid";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GitExpertApp />
	</React.StrictMode>
);
