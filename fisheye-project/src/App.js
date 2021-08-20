import './index.css';
import { Header } from "./components";
import { PhotographeList } from "./pages/PhotographeList";
import PhotographePage from "./pages/PhotographePage";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
    return (
        <div className="page__position-items">
            <Router>
                <Header />

                <Switch>
                    <Route path="/photographer/:id">
                        <PhotographePage />
                    </Route>
                    <Route path="/">
                        <PhotographeList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
