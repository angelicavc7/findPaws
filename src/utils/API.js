import axios from "axios";
const API = {
  getAllLostPets: function () {
    return axios.get("http://localhost:3001/api/lost");
  },
  getAllFoundPets: function () {
    return axios.get("http://localhost:3001/api/found");
  },
<<<<<<< HEAD
  createLostPet: function(data){
    return axios.post("http://localhost:3001/api/lost", data
    )}

}
=======
  createLostPet: function (data) {
    return axios.post("http://localhost:3001/api/lost", data);
  },
  deleteLostPet: function (data) {
    return axios.delete("http://localhost:3001/api/lost", data);
  },
  deleteFoundPet: function (data) {
    return axios.delete("http://localhost:3001/api/found", data);
  },
};
>>>>>>> 58a49df2016eebc34561aebded53c2fc5c698d5b
export default API;
