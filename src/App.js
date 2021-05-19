import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Header from "./components/Header";
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
