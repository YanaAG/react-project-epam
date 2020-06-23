import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Buttons() {
    return (
        <ThemeContextConsumer>
            {context => {
                // console.log("context", context);
                return (
                    <>
                        <button
                            onClick={context.toggleTheme}
                            className={`${context.theme}-theme ${context.fontSize}-font-size`}
                        >
                            Switch Theme
                        </button>
                        <button
                            onClick={context.toggleFontSize}
                            className={`${context.theme}-theme ${context.fontSize}-font-size`}
                        >
                            {context.fontSize === "small" ? "Increase" : "Decrease"} Font Size
                        </button>
                    </>
                );
            }}
        </ThemeContextConsumer>
    );
}

export default Buttons;
