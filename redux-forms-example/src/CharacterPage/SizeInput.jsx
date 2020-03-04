import React from "react";

import { SelectInput } from "../Forms";

const sizeOptions =[
    {key: "s", text: "Small", value: "s"},
    {key: "m", text: "Medium", value: "m"}
];

export const SizeInput = props => {
  return (
    <SelectInput {...props} multiple={false} options={sizeOptions} />
  )
}