import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import WikipediaAPI from "../APIs/WikipediaAPI";
import { setIsLoading, setTimeZoneDetails, setTimeZoneAbbrevation } from "./../Actions";

const WikipediaDetails = (props) => {
    const { timeZone, timeZoneAbbr, setTimeZoneAbbrevation, isLoading, setIsLoading, details, setTimeZoneDetails } =
        props;

    useEffect(() => {
        if (timeZoneAbbr) {
            setIsLoading(true);
            getWikipediaDetails(timeZoneAbbr);
        }
    }, [timeZoneAbbr, setIsLoading]);

    useEffect(() => {
        const timezoneAbbrevation = getTimezoneAbbrevation(timeZone);
        setTimeZoneAbbrevation(timezoneAbbrevation);
    }, [timeZone, setTimeZoneAbbrevation]);

    // Get full form of selected timezone abbrevation
    const getTimezoneAbbrevation = (timeZone) => {
        const today = new Date();
        const long = today.toLocaleDateString("en-US", {
            timeZone: timeZone,
            timeZoneName: "long",
        });

        return long.replace(/[^a-zA-Z ]/g, "").trim();
    };

    // Fetch wikipedia details for timezone abbrevation
    const getWikipediaDetails = async (timeZoneAbbr) => {
        const { data } = await WikipediaAPI.get("/api.php", {
            params: {
                titles: timeZoneAbbr,
            },
        });

        for (const page of Object.entries(data.query.pages)) {
            const data = page[0] !== "-1" ? page[1].extract : "";
            setTimeZoneDetails(data);
            break;
        }
    };

    // URL for wikipedia page
    const wikiPageUrl = `https://en.wikipedia.org/wiki/${timeZoneAbbr}`;

    return (
        <div className="ui one column grid wikipedia-details">
            <div className="ui violet header wiki-details-header">
                <div className="ui left floated abbrevation-name">
                    <h2>{timeZoneAbbr}</h2>
                </div>
                {details && (
                    <div
                        className="ui right floated teal button visit-wiki-button"
                        onClick={(e) => window.open(wikiPageUrl, "_blank")}
                    >
                        Visit Wikipedia
                    </div>
                )}
            </div>
            <div className="content">
                {isLoading ? (
                    <div className="ui active inline loader"></div>
                ) : details ? (
                    <div dangerouslySetInnerHTML={{ __html: details }}></div>
                ) : (
                    <div>Wikipedia details does not exist.</div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        timeZoneAbbr: state.timeZoneAbbr,
        timeZone: state.timeZone,
        isLoading: state.isLoading,
        details: state.details,
    };
};

const mapDispatchTOProps = (dispatch) => {
    return bindActionCreators({ setIsLoading, setTimeZoneDetails, setTimeZoneAbbrevation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchTOProps)(WikipediaDetails);
