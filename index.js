import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.js";
import "./styles.css";

const appWithRoutes = (
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>}></Route>
    </Routes>
  </Router>
);

render(appWithRoutes, document.getElementById("root"));
