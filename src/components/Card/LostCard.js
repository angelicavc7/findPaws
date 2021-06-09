import React from "react";
import "antd/dist/antd.css";
import "../Card/style.css";
import { Card, Button } from "antd";
import API from "../../utils/API";


function PetCard(props) {
  console.log(props);
  return (
    <div className="site-card-wrapper">
    <Card className="Card" title={props.pet.petName}>
    <ul>
          <li>{props.pet.firstName} {props.pet.lastName}</li>
          <li>{props.pet.PhoneNumber}</li>
          <li>{props.pet.email}</li>
          <li>{props.pet.petName}</li>
          <li>{props.pet.petType}</li>
          <li>{props.pet.petDescription}</li>
          <li>{props.pet.lastSeen}</li>
          <li>{props.pet.dateLost}</li>
          <li>{props.pet.reward}</li>
    </ul>
        <Button type="primary" onClick={() => API.deleteLostPet(props.pet.id)}>
          Post Pet
        </Button>
      </Card>
    </div>
  );
}
export default PetCard;
