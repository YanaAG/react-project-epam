import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => {
                // console.log("context", context);
                return (
                    <button
                        style={{'font-size': '14px'}}
                        onClick={context.toggleTheme}
                        className={`${context.theme}-theme`}
                    >
                        Switch Theme
                    </button>
                );
            }}
        </ThemeContextConsumer>
    );
}


export default Button;
