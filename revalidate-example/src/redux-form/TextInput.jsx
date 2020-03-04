import React from "react";
import { Form, Header } from "semantic-ui-react";

export const TextInput = props => {
  const { input, type, placeholder, meta, label } = props;
  const { touched, error } = meta;
  return (
    <Form.Field error={touched && !!error}>
      <Header sub style={{ display: "inline" }}>
        {label}
      </Header>
      {touched && error && <label style={{ display: "inline" }}> * {error}</label>}
      <input {...input} placeholder={placeholder} type={type} />
    </Form.Field>
  );
};
