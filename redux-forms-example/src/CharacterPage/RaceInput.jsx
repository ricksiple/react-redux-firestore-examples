import React from "react";

import { SelectInput } from "../Forms";

const raceOptions = [
  { key: "human", text: "Human", value: "human" },
  { key: "dwarf", text: "Dwarf", value: "dwarf" },
  { key: "halfling", text: "Halfling", value: "halfling" },
  { key: "halfelf", text: "Half-Elf", value: "halfelf" },
  { key: "halforc", text: "Half-Orc", value: "halforc" }
];

export const RaceInput = props => {
  return (
    <SelectInput {...props} multiple={false} options={raceOptions} />
  );
};
