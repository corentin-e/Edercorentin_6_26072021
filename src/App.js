import './index.css';
import { HeaderHome } from "./components/HomeComponents/HeaderHome";
import { HeaderPhotographe } from './components/PhotographeComponents/HeaderPhotographe';
import { HomePage } from "./pages/HomePage";
import PhotographePage from "./pages/PhotographePage";
import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
    /* Constant use for get state of tag filter (actif or not) and get value  */
    const [tagFilter, setTagFilter] = useState([]);

    /* Constant use for get state of button return to top */
    const [buttonToTop, setButtonToTop] = useState(false);

    /* Function for testin scroll in window */
    const handleScroll = useCallback(() => {
        setButtonToTop(true);
        window.removeEventListener("scroll", handleScroll);
    }, [])

    /* Function for display button return to top if scroll in window */
    useEffect(() => {
        if (buttonToTop === false) {
            window.addEventListener("scroll", handleScroll);
        }
    }, [buttonToTop, handleScroll]);

    /* Function for return to top */
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
        setButtonToTop(false);
    };

    /* Function for filter photograph */
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
                        <button aria-label="Retour haut de page" className="button-return-top-page__style" onClick={scrollToTop}>
                            Passer au contenu
                        </button>
                    )}
                </div>
            </Router>
        </div>
    );
}
export default App;
