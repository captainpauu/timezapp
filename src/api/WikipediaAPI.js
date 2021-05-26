import axios from "axios";

export default axios.create({
  baseURL: "https://en.wikipedia.org/w/",
  params: {
    action: "query",
    origin: "*",
    format: "json",
    prop: "extracts",
    redirects: 1,
    exsentences: 10,
  },
  headers: {
    "Content-type": "application/json",
  },
});
