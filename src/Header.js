import React, { Component } from "react";
import { ThemeContextConsumer } from "./themeContext";

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => {
                // console.log("context", context);
                return (
                    <header style={{'font-size': '14px'}} className={`${context.theme}-theme`}>
                        <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>
                );
            }}
        </ThemeContextConsumer>
    );
}

export default Header;
