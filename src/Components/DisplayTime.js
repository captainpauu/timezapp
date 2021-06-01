import React from "react";

const DisplayTime = ({ currentTime }) => {
    return (
        <div className="column display-time">
            <div className="content">
                <div className="header offset">UTC {currentTime.format("Z")}</div>
                <div className="description time">
                    <h1>{currentTime.format("hh:mm:ss A")}</h1>
                </div>
                <div className="meta date">{currentTime.format("dddd, MMM DD, YYYY")}</div>
            </div>
        </div>
    );
};

export default DisplayTime;
