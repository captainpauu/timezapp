import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";

import Dropdown from "./Shared/Dropdown";

const TimezoneList = (props) => {
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    if (props.continent) {
      const timezonesByContinent = moment.tz.names().filter((timezone) => {
        return timezone.startsWith(props.continent);
      });

      setTimezones(timezonesByContinent);
    }
  }, [props.continent]);

  return (
    <React.Fragment>
      <Dropdown
        label="Select Timezone"
        options={timezones}
        selectedOption={props.selectedTimezone}
        onOptionSelect={props.onTimezoneSelect}
      />
    </React.Fragment>
  );
};

export default TimezoneList;
