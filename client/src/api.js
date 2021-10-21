import axios from "axios";

let url;
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:3001/api";
}

if (process.env.NODE_ENV === "production") {
  console.log(process.env.PORT);
  url = "api";
}
const api = axios.create({
  baseURL: url,
});
export default api;
