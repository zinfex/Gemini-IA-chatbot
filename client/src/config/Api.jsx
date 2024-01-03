import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
        token: localStorage.getItem("token"),
      },
})

export default Api;