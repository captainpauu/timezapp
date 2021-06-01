import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import "moment-timezone";

import Header from "./Components/Header";
import WikipediaDetails from "./Components/WikipediaDetails";
import DisplayTime from "./Components/DisplayTime";
import TimezoneSelector from "./Components/TimezoneSelector";
import { setTimeZone, setTimeStamp } from "./Actions";
import "./App.css";

const App = (props) => {
    const { timeStamp, setTimeStamp } = props;

    useEffect(() => {
        setInterval(() => {
            setTimeStamp(new Date().getTime());
        }, 1000);
    }, [setTimeStamp]);

    const getCurrentTime = () => {
        return moment(timeStamp).tz(props.timeZone);
    };

    return (
        <div className=" ui container App">
            <Header />
            <div className="ui two column centered grid">
                <DisplayTime currentTime={getCurrentTime()} />
                <TimezoneSelector timezone={props.timeZone} onTimezoneSelect={props.setTimeZone} />
            </div>
            <WikipediaDetails timezone={props.timeZone} />
        </div>
    );
};

const mapStateToProps = ({ timeStamp, timeZone }) => {
    return {
        timeStamp,
        timeZone,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setTimeStamp,
            setTimeZone,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
