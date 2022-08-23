import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Macro/Layout";
import MobileNav from "./components/nav/mobile-nav/mobile-nav-list/MobileNavList";
import "./App.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout />
        <MobileNav />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
