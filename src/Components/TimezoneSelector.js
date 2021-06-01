import React from "react";
import ContinentList from "./ContinentList";
import TimezoneList from "./TimezoneList";

const TimezoneSelector = (props) => {
    return (
        <div className="column timezone-selector">
            <div className="content">
                <div className="ui form">
                    <ContinentList />
                    <TimezoneList />
                </div>
            </div>
        </div>
    );
};

export default TimezoneSelector;
