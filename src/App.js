import React from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import Modal from "./Modal";

function App() {
    const history = useHistory();

    return (
        <div>
            <Link to="/purple">
                <div className="square purple-square"/>
            </Link>
            <Link to="/purple" className="link">Purple</Link>
            <Link to="/green">
                <div className="square green-square"/>
            </Link>
            <Link to="/green" className="link">Green</Link>
            <Link to="/red">
                <div className="square red-square"/>
            </Link>
            <Link to="/red" className="link">Red</Link>
            <Switch>
                <Route path="/purple">
                   <Modal colorName="purple" onClose={() => history.push("/")}/>
                </Route>
                <Route path="/green">
                    <Modal colorName="green" onClose={() => history.push("/")}/>
                </Route>
                <Route path="/red">
                    <Modal colorName="red" onClose={() => history.push("/")}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
