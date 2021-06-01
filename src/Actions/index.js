export const setTimeStamp = (payload) => {
    return {
        type: "SET_TIMESTAMP",
        payload,
    };
};
export const setTimeZone = (payload) => {
    return {
        type: "SET_TIMEZONE",
        payload,
    };
};
export const setContinent = (payload) => {
    return {
        type: "SET_CONTINENT",
        payload,
    };
};
export const setTimeZones = (payload) => {
    return {
        type: "SET_TIMEZONES",
        payload,
    };
};
export const setTimeZoneDetails = (payload) => {
    return {
        type: "SET_TIMEZONE_DETAILS",
        payload,
    };
};
export const setTimeZoneAbbrevation = (payload) => {
    return {
        type: "SET_TIMEZONE_ABBR",
        payload,
    };
};
export const setIsLoading = (payload) => {
    return {
        type: "SET_IS_LOADING",
        payload,
    };
};
