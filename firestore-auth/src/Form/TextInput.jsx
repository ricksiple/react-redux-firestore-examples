import React, { Fragment } from "react";

export const TextInput = (props) => {
    const { input, type, placeholder, meta, label } = props;
    const { touched, error } = meta;
    return (
        <Fragment>
            <label>{label}</label>
            <input {...input} placeholder={placeholder} type={type} />
            {touched && error && <label style={{color:"red"}}> * {error}</label>}
        </Fragment>
    );
};
