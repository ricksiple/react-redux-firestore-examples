import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import ModalManager from "./Modals/ModalManager";

import { actions as modalActions } from "./Modals/ModalReducer";

import { connect } from "react-redux";

import { Button } from "semantic-ui-react";
import AnotherModal from "./Modals/AnotherModal";

function App(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { openModal } = props;
  return (
    <div className="App">
      <ModalManager />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          onClick={() => {
            openModal("TestModal", { data: 42 });
          }}
          content="Open Redux Modal "
        />
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          content="Open Non-Redux Modal"
        />
        {isModalOpen && (
          <AnotherModal
            onClose={() => {
              setModalOpen(false);
            }}
          />
        )}
      </header>
    </div>
  );
}

export default connect(null, modalActions)(App);
