import './index.css';
import { Header } from "./components";
import { PhotographeList } from "./pages/PhotographeList";
import { PhotographerPage } from "./pages/PhotographerPage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="page__position-items">
      <Header />
      <PhotographeList />
      <PhotographerPage />
     {/*  <Router>
        <div>
          <Switch>
            <Route path="/">
              <PhotographeList />
            </Route>
            <Route path="/photographePage">
              <PhotographePage />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
    
  );
}
export default App;
