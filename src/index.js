import React from "react"
import ReactDOM from "react-dom"
import './style.css';

import App from "./App"

// import {ThemeContextProvider} from "./themeContext"
import {ThemeContextProvider} from "./themeContextWithHook";

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>,
    document.getElementById("root")
);
