import React from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import { connect } from "react-redux";

import { reduxForm, Field } from "redux-form";

import { TextInput } from "./redux-form/TextInput";
import { Container, Form, Button } from "semantic-ui-react";

import {
  combineValidators,
  isOneOf,
  isRequired,
  composeValidators,
  hasLengthBetween,
  isNumeric,
  isAlphabetic,
  matchesPattern
} from "revalidate";

const mapStateToProps = state => {
  const row = {
    title: "Mr.",
    firstName: "Rick",
    lastName: "Siple",
    suffix: "",
    address1: "200 Bellevue Pkwy",
    address2: "Suite 220",
    city: "Wilmington",
    state: "DE",
    zipcode: "19809",
    phone: "302-573-3570"
  };
  return {
    initialValues: row
  };
};

const Upsert = values => {
  console.log(values);
};

const validate = combineValidators({
  title: isOneOf(["Mr.", "Ms.", "Mrs."])("Title"),
  firstName: isRequired("First Name"),
  lastName: isRequired("Last Name"),
  address1: isRequired("Address"),
  city: isRequired("City"),
  state: composeValidators(
    isRequired,
    isAlphabetic,
    hasLengthBetween(2, 2)({ message: "State must be two letters" })
  )("State"),
  zipcode: composeValidators(
    isRequired,
    isNumeric,
    hasLengthBetween(5, 5)({ message: "Zipcode must be five digits" })
  )("Zip Code"),
  phone: matchesPattern(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)({message: 'Phone must be numeric, may include dashes and parentheses'})
});

function App(props) {
  return (
    <Container>
      <Form onSubmit={props.handleSubmit(Upsert)}>
        <Field
          name="title"
          component={TextInput}
          placeholder="title"
          label="Title"
        />
        <Field
          name="firstName"
          component={TextInput}
          placeholder="first name"
          label="First Name"
        />
        <Field
          name="lastName"
          component={TextInput}
          placeholder="last name"
          label="Last Name"
        />
        <Field
          name="suffix"
          component={TextInput}
          placeholder="suffix"
          label="Suffix"
        />
        <Field
          name="address1"
          component={TextInput}
          placeholder="address"
          label="Address"
        />
        <Field name="address2" component={TextInput} placeholder="address" />
        <Field
          name="city"
          component={TextInput}
          placeholder="city"
          label="City"
        />
        <Field
          name="state"
          component={TextInput}
          placeholder="state"
          label="State"
        />
        <Field
          name="zipcode"
          component={TextInput}
          placeholder="zipcode"
          label="Zipcode"
        />
        <Field
          name="phone"
          component={TextInput}
          placeholder="phone"
          label="Phone"
        />
        <Button default type="submit">
          OK
        </Button>
      </Form>
    </Container>
  );
}

export default connect(mapStateToProps)(
  reduxForm({ form: "address", validate })(App)
);
