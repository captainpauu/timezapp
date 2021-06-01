import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Dropdown from "./Shared/Dropdown";
import { setContinent } from "./../Actions";

const ContinentList = (props) => {
    return (
        <React.Fragment>
            <Dropdown
                label="Select Continent"
                options={props.continentList}
                selectedOption={props.continent}
                onOptionSelect={props.setContinent}
            />
        </React.Fragment>
    );
};

export default connect(
    ({ continent, continentList }) => {
        return { continent, continentList };
    },
    (dispatch) => {
        return bindActionCreators({ setContinent }, dispatch);
    }
)(ContinentList);
