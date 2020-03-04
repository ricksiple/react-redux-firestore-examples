import React, { Fragment } from "react";
import "./App.css";

import CharacterPage from "./CharacterPage/CharacterPage";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/char/:id" component={CharacterPage} />
        <Route path="/">
          <a href="/char/1">Character 1</a>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
