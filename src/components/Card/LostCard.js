import React from "react";
import "antd/dist/antd.css";
import "../Card/style.css";
import { Card, Button } from "antd";
import API from "../../utils/API";

function PetCard(props) {
  console.log(props);
  return (
    <div className="site-card-wrapper">
      <Card title={props.pet.petDescription} bordered={false}>
        <Button type="primary" onClick={() => API.deleteLostPet(props.pet.id)}>
          Delete Pet
        </Button>
      </Card>
    </div>
  );
}
export default PetCard;
