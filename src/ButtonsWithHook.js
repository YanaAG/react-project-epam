import React, { useContext } from "react";
import { ThemeContext } from "./themeContextWithHook";

function ButtonsWithHook(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    );
}

export default ButtonsWithHook;
