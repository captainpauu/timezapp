import React, { useEffect, useState } from "react";
import WikipediaAPI from "../api/WikipediaAPI";

const WikipediaDetails = ({ timezone }) => {
  const [tzAbbr, setTzAbbr] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (tzAbbr) {
      getWikipediaDetails(tzAbbr);
    }
  }, [tzAbbr]);

  useEffect(() => {
    const timezoneAbbrevation = getTimezoneAbbrevation(timezone);
    setTzAbbr(timezoneAbbrevation);
  }, [timezone]);

  const getTimezoneAbbrevation = (timezone) => {
    const today = new Date();
    const short = today.toLocaleDateString("en-US");
    const long = today.toLocaleDateString("en-US", {
      timeZone: timezone,
      timeZoneName: "long",
    });
    const shortIndex = long.indexOf(short);
    if (shortIndex >= 0) {
      const trimmed =
        long.substring(0, shortIndex) +
        long.substring(shortIndex + short.length);

      return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, "");
    } else {
      return long;
    }
  };

  const getWikipediaDetails = async (timeZoneAbbr) => {
    const { data } = await WikipediaAPI.get("/api.php", {
      params: {
        titles: timeZoneAbbr,
      },
    });

    for (const page of Object.entries(data.query.pages)) {
      const data = page[0] !== "-1" ? page[1].extract : "";
      setDetails(data);
      break;
    }
  };

  const wikiPageUrl = `https://en.wikipedia.org/wiki/${tzAbbr}`;

  return (
    <div className="ui one column grid wikipedia-details">
      <div className="ui violet header wiki-details-header">
        <div className="ui left floated abbrevation-name">
          <h2>{tzAbbr}</h2>
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
        {details ? (
          <div dangerouslySetInnerHTML={{ __html: details }}></div>
        ) : (
          <div>Wikipedia details does not exist.</div>
        )}
      </div>
    </div>
  );
};

export default WikipediaDetails;
