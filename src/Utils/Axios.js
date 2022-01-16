import axios from "axios";
import { BASE_URL } from "./Constant";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": "nse-data1.p.rapidapi.com",
    "x-rapidapi-key": "f5c35ef162msh84db5a39c9ac96dp1fe505jsnc658680e6ba5",
  },
});
