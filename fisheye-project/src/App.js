import './index.css';
import { Header } from "./components";
import { HeaderTag } from "./components";
import { PhotographeList } from "./pages/PhotographeList";
import React from "react";


function App() {
  return (
    <div className="page__position-items">
      <Header />
      <HeaderTag />
      <PhotographeList />
    </div>
  );
}

export default App;
