import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
function Search() {
  const [foundPets, setFoundPets] = useState([]);
  const [lostPets, setLostPets] = useState([]);
  useEffect(() => {
    API.getAllLostPets().then((res) => {
      console.log(res.data);
      setLostPets(res.data);
    });
    API.getAllFoundPets().then((res) => {
      setFoundPets(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <h1>Search pets</h1>
      <h2>Found Pets</h2>
      {foundPets.map((pet) => (
        <Card />
      ))}
      <h2>Lost Pets</h2>
      {lostPets.map((pet) => (
        <Card />
      ))}
    </div>
  );
}

export default Search;
