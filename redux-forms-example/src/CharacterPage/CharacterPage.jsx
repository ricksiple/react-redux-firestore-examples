// React
import React, { Component } from "react";

// Semantic-UI
import { Container, Form, Grid, Header, Divider } from "semantic-ui-react";

// Redux
import { connect } from "react-redux";

// Redux-Form
import { reduxForm, Field } from "redux-form";

// app
import { actions } from "../redux/reducer";
import { TextInput, TextArea, NumericInput } from "../Forms";
import { RaceInput } from "./RaceInput";
import { SizeInput } from "./SizeInput";

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const selected = state.character.records.find(e => e.id === Number(id));
  return { initialValues: selected };
};

class CharacterPage extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center">
          Pathfinder Character Sheet
        </Header>
        <Form>
          <Grid>
            <Grid.Column width={8}>
              <Divider horizontal>
                <Header as="h2" textAlign="center">
                  Character Information
                </Header>
              </Divider>
              <Field
                name="name"
                component={TextInput}
                label="Character Name"
                placeholder="character name"
              />
              <Field
                name="player"
                component={TextInput}
                label="Player Name"
                placeholder="player name"
              />
              <Field
                name="race"
                component={RaceInput}
                label="Race"
                placeholder="race"
              />
              <Field
                name="size"
                component={SizeInput}
                label="Size"
                placeholder="size"
              />
              <Field
                name="gender"
                component={TextInput}
                label="Gender"
                placeholder="gender"
              />
              <Form.Group widths="equal">
                <Field
                  name="height.feet"
                  component={NumericInput}
                  label="Height (feet)"
                  placeholder="feet"
                />
                <Field
                  name="height.inches"
                  component={TextInput}
                  label="Height (inches)"
                  placeholder="inches"
                />
              </Form.Group>
              <Field
                  name="weight"
                  component={TextInput}
                  label="Weight (pounds)"
                  placeholder="pounds"
                />
            </Grid.Column>
            <Grid.Column width={8}>
              <Divider horizontal>
                <Header as="h2" textAlign="center">
                  Abilities
                </Header>
              </Divider>
              <Grid>
                <Grid.Column width={8}>
                  <Header as="h3" textAlign="center">
                    Score
                  </Header>
                  <Form.Field>
                    <label>Strength</label>
                    <input placeholder="strength" />
                  </Form.Field>
                  <Form.Field>
                    <label>Dexterity</label>
                    <input placeholder="dexterity" />
                  </Form.Field>
                  <Form.Field>
                    <label>Constitution</label>
                    <input placeholder="constitution" />
                  </Form.Field>
                  <Form.Field>
                    <label>Intelligence</label>
                    <input placeholder="intelligence" />
                  </Form.Field>
                  <Form.Field>
                    <label>Wisdom</label>
                    <input placeholder="wisdom" />
                  </Form.Field>
                  <Form.Field>
                    <label>Charisma</label>
                    <input placeholder="charisma" />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" textAlign="center">
                    Modifier
                  </Header>
                  <Form.Field>
                    <label>Strength</label>
                    <input placeholder="strength" />
                  </Form.Field>
                  <Form.Field>
                    <label>Dexterity</label>
                    <input placeholder="dexterity" />
                  </Form.Field>
                  <Form.Field>
                    <label>Constitution</label>
                    <input placeholder="constitution" />
                  </Form.Field>
                  <Form.Field>
                    <label>Intelligence</label>
                    <input placeholder="intelligence" />
                  </Form.Field>
                  <Form.Field>
                    <label>Wisdom</label>
                    <input placeholder="wisdom" />
                  </Form.Field>
                  <Form.Field>
                    <label>Charisma</label>
                    <input placeholder="charisma" />
                  </Form.Field>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
          <Divider horizontal>
            <Header as="h2">Description and History</Header>
          </Divider>
          <Field
            name="description"
            rows={3}
            component={TextArea}
            placeholder="desription"
            label="Description"
          ></Field>
          <Field
            name="history"
            rows={10}
            component={TextArea}
            placeholder="history"
            label="History"
          ></Field>
        </Form>
      </Container>
    );
  }
}

const addReduxForm = reduxForm({ form: "character" });
const addRedux = connect(mapStateToProps, actions);
export default addRedux(addReduxForm(CharacterPage));
