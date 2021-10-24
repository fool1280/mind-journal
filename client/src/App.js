import "./styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Demo from "./Demo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/demo">
                        <Demo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
