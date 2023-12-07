import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./assets/views/main";
import lenis from "./utills/lenis";
import link from "./utills/link";
import JoinView from "./assets/views/components/JoinView";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* 여기에 다른 페이지 넣기 */}
        <Route path="join" element={<JoinView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
