import axios from "axios";
const baseUrl = "https://backendfindpaws.herokuapp.com/"; 

const API = {
  getAllLostPets: function () {
    return axios.get(baseUrl + "api/lost");
  },
  getAllFoundPets: function () {
    return axios.get(baseUrl + "api/found");
  },
  createLostPet: function (data) {
    return axios.post(baseUrl + "api/lost", data);
  },
  createFoundPet: function (data) {
    return axios.post(baseUrl + "api/found", data);
  },
  deleteLostPet: function (id) {
    return axios.delete(baseUrl + "api/lost/" + id);
  },
  deleteFoundPet: function (id) {
    return axios.delete(baseUrl + "api/found/" + id);
  },
  updateLostPet: function (data) {
    return axios.put(baseUrl + "api/lost", data);
  },
  updateFoundPet: function (data) {
    return axios.put(baseUrl + "api/found", data);
  },
};
export default API;
