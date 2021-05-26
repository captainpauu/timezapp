import React from "react";
import Dropdown from "./Shared/Dropdown";

const continents = [
  "Africa",
  "America",
  "Asia",
  "Atlantic",
  "Australia",
  "Europe",
  "Indian",
  "Pacific",
];

const ContinentList = (props) => {
  return (
    <React.Fragment>
      <Dropdown
        label="Select Continent"
        options={continents}
        selectedOption={props.selectedContinent}
        onOptionSelect={props.onContinentSelect}
      />
    </React.Fragment>
  );
};

export default ContinentList;
