import React, {useContext} from "react"
import {ThemeContext} from "./themeContextWithHook"

function HeaderWithHook() {
    const {theme, fontSize} = useContext(ThemeContext);
    return (
        <header className={`${theme}-theme`}>
            <h2 className={`${fontSize}-font-size`}>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
    )
}

export default HeaderWithHook;
