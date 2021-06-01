import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import "moment-timezone";

import Dropdown from "./Shared/Dropdown";
import { setTimeZones, setTimeZone } from "./../Actions";

const TimezoneList = (props) => {
    const { continent, setTimeZones } = props;

    useEffect(() => {
        if (continent) {
            // Fetch all timezones for selected continent
            const timezonesByContinent = moment.tz
                .names()
                .filter((timezone) => {
                    return timezone.startsWith(continent);
                })
                .map((timezone) => {
                    return timezone.replace(`${continent}/`, "");
                });
            setTimeZones(timezonesByContinent);
        }
    }, [continent, setTimeZones]);

    return (
        <React.Fragment>
            <Dropdown
                label="Select Timezone"
                options={props.timeZones}
                selectedOption={props.timeZone.replace(`${continent}/`, "")}
                onOptionSelect={(t) => props.setTimeZone(`${continent}/${t}`)}
            />
        </React.Fragment>
    );
};

export default connect(
    ({ timeZones, timeZone, continent }) => {
        return { timeZones, timeZone, continent };
    },
    (dispatch) => {
        return bindActionCreators({ setTimeZones, setTimeZone }, dispatch);
    }
)(TimezoneList);
