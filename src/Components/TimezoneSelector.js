import React, { useState } from "react";
import ContinentList from "./ContinentList";
import TimezoneList from "./TimezoneList";

const TimezoneSelector = (props) => {
  const [continent, setContinent] = useState("");

  return (
    <div className="column timezone-selector">
      <div className="content">
        <div className="ui form">
          <ContinentList
            selectedContinent={continent}
            onContinentSelect={setContinent}
          />
          <TimezoneList
            continent={continent}
            selectedTimezone={props.timezone}
            onTimezoneSelect={props.onTimezoneSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default TimezoneSelector;
