import "antd/dist/antd.css";
import { Card, Button } from "antd";
import API from "../../utils/API";
import "../Card/found.css"

function FoundCard(props) {
  console.log(props);
  return (
    <div className="site-card-wrapper">
      <Card className="Card" title={props.pet.petDescription}>
        <ul>
          <li>{props.pet.firstName} {props.pet.lastName}</li>
          <li>{props.pet.PhoneNumber}</li>
          <li>{props.pet.email}</li>
          <li>{props.pet.petType}</li>
          <li>{props.pet.petDescription}</li>
          <li>{props.pet.circumstances}</li>
          <li>{props.pet.dateFound}</li>
          <li>{props.pet.lastSeen}</li>
        </ul>
           
      
      <Button type="primary" onClick={() => API.deleteFoundPet(props.pet.id)}>
          Post Pet
        </Button>
      </Card>
    </div>
  );
}
export default FoundCard;
