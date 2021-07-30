import axios from "axios";

const instance = axios.create({
  // The API (Cloud function) URL
  baseURL: "https://us-central1-clone-b18f7.cloudfunctions.net/api",
  //   "http://localhost:5001/clone-b18f7/us-central1/api",
});

export default instance;
