import React from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import Modal from "./Modal";

function App() {
    const history = useHistory();
    const colors = ['purple', 'green', 'red'];

    return (
        <div>
            <Link to={`/${colors[0]}`}>
                <div className="square purple-square"/>
            </Link>
            <Link to={`/${colors[0]}`} className="link">Purple</Link>
            <Link to={`/${colors[1]}`}>
                <div className="square green-square"/>
            </Link>
            <Link to={`/${colors[1]}`} className="link">Green</Link>
            <Link to={`/${colors[2]}`}>
                <div className="square red-square"/>
            </Link>
            <Link to={`/${colors[2]}`} className="link">Red</Link>
            <Switch>
                <Route path="/:colorName">
                   <Modal onClose={() => history.push("/")}/>
                </Route>
                <Route path="/:colorName">
                    <Modal onClose={() => history.push("/")}/>
                </Route>
                <Route path="/:colorName">
                    <Modal onClose={() => history.push("/")}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
