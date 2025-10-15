import { BASE_URL, TIMEOUT } from "./config";
import Request from "./request";

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

export default request;
