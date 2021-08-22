import './index.css';
import { Header } from "./components";
import { PhotographeList } from "./pages/PhotographeList";
import PhotographePage from "./pages/PhotographePage";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HeaderPhotographe } from './components/HeaderPhotographe';


function App() {
    const [tagFilter, setTagFilter] = useState([]);
    const toggleFilter = filter => {
        const isActive = tagFilter.find(value => value === filter)

        if (isActive) {
            setTagFilter(tagFilter => tagFilter.filter(value => value !== filter))
        } else {
            setTagFilter(tagFilter => [
                ...tagFilter,
                filter,
            ])
        }
    }

    return (
        <div className="page__position-items">
            <Router>
                <Switch>
                    <Route path="/photographer/:id">
                        <HeaderPhotographe/>
                        <PhotographePage />
                    </Route>
                    <Route path="/">
                        <Header 
                            tagFilter={tagFilter}
                            toggleFilter={toggleFilter}
                        />
                        <PhotographeList
                            tagFilter={tagFilter}
                            setTagFilter={setTagFilter}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
