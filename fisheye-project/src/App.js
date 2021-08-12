import './index.css';
import { Header } from "./components";
import { PhotographeList } from "./pages/PhotographeList";
import React from "react";


function App() {
  return (
    <div className="page__position-items">
      <Header />
      <PhotographeList />
    </div>
  );
}

export default App;
