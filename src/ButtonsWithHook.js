import React, { useContext } from "react";
import { ThemeContext } from "./themeContextWithHook";

function ButtonsWithHook(props) {
    const { theme, toggleTheme, fontSize, toggleFontSize } = useContext(ThemeContext);
    return (
        <>
            <button onClick={toggleTheme} className={`${theme}-theme ${fontSize}-font-size`}>
                Switch Theme
            </button>
            <button onClick={toggleFontSize} className={`${theme}-theme ${fontSize}-font-size`}>
                {fontSize === "small" ? "Increase" : "Decrease"} Font Size
            </button>
        </>
    );
}

export default ButtonsWithHook;
