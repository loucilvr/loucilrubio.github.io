import React from "react";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter as Router } from "react-router-dom";
import { render } from "react-dom";

const domNode = document.getElementById("root");

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	domNode
);

registerServiceWorker();
