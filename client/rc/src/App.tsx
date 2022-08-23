import React from "react";
import { BrowserRouter } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//types
import { RootState } from "./store/appStore";

import Layout from "./Layouts/Macro/Layout";
import MobileNav from "./components/nav/mobile-nav/mobile-nav-list/MobileNavList";
import "./App.css";

const App: React.FC = () => {
  const mobileState = useSelector<RootState, boolean>(
    (state) => state.mobileNav.toggle
  );
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout />
        {mobileState && <MobileNav />}
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
