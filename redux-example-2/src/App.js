import React from "react";
import "./App.css";
import { Grid, Container } from "semantic-ui-react";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Container style={{ marginTop: "1em" }}>
      <Grid columns={2}>
        <Grid.Column>
          <Dashboard userName='Alice' />
        </Grid.Column>
        <Grid.Column>
        <Grid.Column>
          <Dashboard userName='Bob' />
        </Grid.Column>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
