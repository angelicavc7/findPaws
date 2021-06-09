import "antd/dist/antd.css";
import "../Card/style.css";
import { Card, Button } from "antd";
import API from "../../utils/API";

function FoundCard(props) {
  console.log(props);
  return (
    <div className="site-card-wrapper">
      <Card title={props.pet.petDescription} bordered={false}>
        <div>Pet Picture</div>
        <Button type="danger" onClick={() => API.deleteFoundPet(props.pet.id)}>
          Delete Pet
        </Button>
      </Card>
    </div>
  );
}
export default FoundCard;
