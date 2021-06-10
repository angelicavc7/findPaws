import "antd/dist/antd.css";
import { Card, Button } from "antd";
import API from "../../utils/API";
import "../Card/found.css";

function FoundCard(props) {
  console.log(props);
  return (
    <div className="site-card-wrapper">
      <Card className="Card" title={props.pet.petType}>
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
            <label for="Pet Description" id="Pet Description">
              Circumstances : {props.pet.circumstances}
            </label>
          </li>
          <li>
            <label for="Pet Found" id="Pet Found">
              Date Found: {props.pet.dateFound}
            </label>
          </li>
          <li>
            <label for="Last Seen" id="Last Seen">
              Last Seen : {props.pet.lastSeen}
            </label>
          </li>
        </ul>
        <Button type="danger" onClick={() => API.deleteFoundPet(props.pet.id)}>
          Delete Pet
        </Button>
      </Card>
    </div>
  );
}
export default FoundCard;
