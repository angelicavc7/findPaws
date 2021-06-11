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
          <li>
            <label for="name" id="name">
              Name : {props.pet.firstName} {props.pet.lastName}
            </label>
          </li>
          <li>
            <label for="Phone Number" id="Phone Number">
              Phone Number: {props.pet.phoneNumber}
            </label>
          </li>
          <li>
            <label for="Email" id="Email">
              Email : {props.pet.email}
            </label>
          </li>
          <li>
            <label for="Pet Name" id="Pet Name">
              Pet Name: {props.pet.petName}
            </label>
          </li>
          <li>
            <label for="typeOfPet" id="typeOfPet">
              Type Of Pet: {props.pet.petType}
            </label>
          </li>
          <li>
            <label for="Pet Description" id="Pet Description">
              Pet Description : {props.pet.petDescription}
            </label>
          </li>
          <li>
            <label for="Last Seen" id="Last Seen">
              Last Seen Location : {props.pet.lastSeen}
            </label>
          </li>
          <li>
            <label for="Last Lost" id="Last Lost ">
              Date Lost : {props.pet.dateLost}
            </label>
          </li>
          <li>
            <label for="Reward" id="Reward ">
              Reward : {props.pet.reward}
            </label>
          </li>
        </ul>
        <Button type="danger" onClick={() => API.deleteLostPet(props.pet.id)}>
          Delete Pet
        </Button>
      </Card>
    </div>
  );
}
export default PetCard;
