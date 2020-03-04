import React from "react";

import { Form, Select } from "semantic-ui-react";

export const TextInput = props => {
  const { label, input, type, placeholder, meta } = props;
  const { touched, error } = meta;
  return (
    <Form.Field error={touched && !!error}>
      {label && <label>{label}</label>}
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && (
        <label basic color="red">
          {error}
        </label>
      )}
    </Form.Field>
  );
};

export const TextArea = props => {
  const { label, rows, input, type, placeholder, meta } = props;
  const { touched, error } = meta;
  return (
    <Form.Field error={touched && !!error}>
      {label && <label>{label}</label>}
      <textarea {...input} rows={rows} placeholder={placeholder} type={type} />
      {touched && error && (
        <label basic color="red">
          {error}
        </label>
      )}
    </Form.Field>
  );
};

export const SelectInput = props => {
  const { label, input, placeholder, multiple, options, meta } = props;
  const { touched, error } = meta;
  return (
    <Form.Field error={touched && !!error}>
      {label && <label>{label}</label>}
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
      />
      {touched && error && (
        <label basic color="red">
          {error}
        </label>
      )}
    </Form.Field>
  );
};

export const NumericInput = props => {
  const { label, input, placeholder, multiple, options, meta } = props;
  const { touched, error } = meta;
  return (
    <TextInput {...props} />
  );
};
