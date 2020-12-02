import axios from "axios";

const instance = axios.create({
  baseURL: "https://webflix-b97ac.firebaseio.com/",
});

export default instance;
