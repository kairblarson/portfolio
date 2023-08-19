import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </Router>
);
