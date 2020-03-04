import React from "react";
import { Grid, Header, Form } from "semantic-ui-react";
import MessageList from "./MessageList";

import { connect } from "react-redux";

import actionCreators from "../Redux/Actions";
import { Component } from "react";

const MapStateToProps = state => {
  return { messages: state.messages };
};

class Dashboard extends Component {
  state = {
    body: "",
    doClear: false
  };

  onChange(value) {
    this.setState(prevState => {
      return {
        body: prevState.doClear ? "" : value,
        doClear: false
      };
    });
  }

  onSend(userName, body, fn) {
    fn(userName, body);
    this.setState({ doClear: true });
  }

  render() {
    const { userName, messages, rdxSend } = this.props;
    return (
      <Grid.Column>
        <Header textAlign="center" dividing>
          {userName}
        </Header>
        <Form>
          <Form.TextArea
            value={this.state.body}
            onChange={e => {
              this.onChange(e.target.value);
            }}
            onKeyPress={e => {
              if (e.charCode === 13) {
                this.onSend(userName, e.target.value, rdxSend);
              }
            }}
          ></Form.TextArea>
        </Form>
        <MessageList myUserName={userName} messages={messages} />
      </Grid.Column>
    );
  }
}

export default connect(MapStateToProps, actionCreators)(Dashboard);
