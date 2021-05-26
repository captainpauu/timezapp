import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";

import Header from "./Components/Header";
import WikipediaDetails from "./Components/WikipediaDetails";
import DisplayTime from "./Components/DisplayTime";
import TimezoneSelector from "./Components/TimezoneSelector";
import "./App.css";

const App = () => {
  const [timeStamp, setTimeStamp] = useState(new Date().getTime());
  const [timezone, setTimezone] = useState(moment.tz.guess());

  useEffect(() => {
    setInterval(() => {
      setTimeStamp(new Date().getTime());
    }, 1000);
  }, []);

  const getCurrentTime = () => {
    return moment(timeStamp).tz(timezone);
  };

  return (
    <div className=" ui container App">
      <Header />
      <div className="ui two column centered grid">
        <DisplayTime currentTime={getCurrentTime()} />
        <TimezoneSelector timezone={timezone} onTimezoneSelect={setTimezone} />
      </div>
      <WikipediaDetails timezone={timezone} />
    </div>
  );
};

export default App;
