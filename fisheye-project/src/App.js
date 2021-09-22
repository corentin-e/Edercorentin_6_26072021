import './index.css';
import { HeaderHome } from "./components/HomeComponents/HeaderHome";
import { HeaderPhotographe } from './components/PhotographeComponents/HeaderPhotographe';
import { HomePage } from "./pages/HomePage";
import PhotographePage from "./pages/PhotographePage";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
    const [tagFilter, setTagFilter] = useState([]);
    const [buttonToTop, setButtonToTop] = useState(false);

    const isBrowser = typeof window !== `undefined`

    useEffect(() => {
        if (buttonToTop === false) {
            window.addEventListener("scroll", handleScroll);
        }
    }, [buttonToTop]);
    
    const handleScroll = () => {
        setButtonToTop(true);
        window.removeEventListener("scroll", handleScroll);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
        setButtonToTop(false);
    };


    const toggleFilter = filter => {
        console.log("value", filter)
        const isActive = tagFilter.find(value => value === filter)

        if (isActive) {
            setTagFilter(tagFilter => tagFilter.filter(value => value !== filter))
        } else {
            setTagFilter(tagFilter => [
                ...tagFilter,
                filter,
            ])
        }
    };

    return (
        <div className="page__position-items">
            <Router>
                <Switch>
                    <Route path="/photographer/:id">
                        <HeaderPhotographe/>
                        <PhotographePage />
                    </Route>
                    <Route path="/">
                        <HeaderHome 
                            tagFilter={tagFilter}
                            toggleFilter={toggleFilter}
                        />
                        <HomePage
                            tagFilter={tagFilter}
                            setTagFilter={setTagFilter}
                        />
                    </Route>
                </Switch>
                <div className="button-return-top-page__position">
                    {buttonToTop && (
                        <button className="button-return-top-page__style" onClick={scrollToTop}>
                            Passer au contenu
                        </button>
                    )}
                </div>
            </Router>
        </div>
    );
}
export default App;
