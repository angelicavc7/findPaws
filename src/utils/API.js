import axios from "axios";
const API = {
  getAllLostPets: function () {
    return axios.get("http://localhost:3001/api/lost");
  },
  getAllFoundPets: function () {
    return axios.get("http://localhost:3001/api/found");
  },
};
export default API;
