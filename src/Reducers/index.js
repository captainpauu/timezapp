import moment from "moment";
import "moment-timezone";

const initialState = {
    timeStamp: new Date().getTime(),
    timeZone: moment.tz.guess(),
    timeZones: [],
    timeZoneAbbr: "",
    continentList: ["Africa", "America", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"],
    continent: "",
    isLoading: false,
    details: "",
};

export default function Reducers(state = initialState, action = {}) {
    switch (action.type) {
        case "SET_TIMESTAMP":
            return {
                ...state,
                timeStamp: action.payload,
            };

        case "SET_TIMEZONE":
            return {
                ...state,
                timeZone: action.payload,
            };

        case "SET_CONTINENT":
            return {
                ...state,
                continent: action.payload,
            };

        case "SET_TIMEZONES":
            return {
                ...state,
                timeZones: action.payload,
            };

        case "SET_TIMEZONE_DETAILS":
            return {
                ...state,
                details: action.payload,
                isLoading: false,
            };

        case "SET_TIMEZONE_ABBR":
            return {
                ...state,
                timeZoneAbbr: action.payload,
            };

        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.payload,
            };

        default:
            return state;
    }
}
