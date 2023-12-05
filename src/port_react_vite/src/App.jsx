import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./assets/views/HomeView";
import lenis from "./utills/lenis";
import link from "./utills/link";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
