import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Header() {
    return (
        <ThemeContextConsumer>
            {context => {
                // console.log("context", context);
                return (
                    <header className={`${context.theme}-theme`}>
                        <h2 className={`${context.fontSize}-font-size`}>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>
                );
            }}
        </ThemeContextConsumer>
    );
}

export default Header;
