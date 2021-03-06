import React from "react";
import "./App.css";

import { Route, Switch, Link } from "react-router-dom";

import FossilPane from "./Fossil/FossilPane";
import UserPane from "./User/UserPane";

import Auth from "./Auth/Auth";

function App(props) {
    return (
        <div className="App">
            <Auth />
            <nav>
                <ul>
                    <li>
                        <Link to="/fossil">Fossils</Link>
                    </li>
                    <li>
                        <Link to="/user">Users</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/user">
                    <UserPane />
                </Route>
                <Route path="/fossil">
                    <FossilPane />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
