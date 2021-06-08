import React from "react";
// import { useParams } from "react-router-dom";
// import API from "../../utils/API";
import { Layout } from "antd";
import FormSizeDemo from "../../components/Form/FormSizeDemo";
import Header from "../../components/Header/Header";
import "antd/dist/antd.css";
const { Content, Footer } = Layout;

export default function Lost() {
  // const { id } = useParams();
  // // const history = useHistory();

  // const [setLostState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: 2068835400,
  //   email: "",
  //   petName: "",
  //   petType: "",
  //   petDescription: "",
  //   lastSeen: "",
  //   dateLost: "",
  //   reward: 200,
  // });

  // const[newLostPet, setNewLostPet] = useState("")
  // const[myLostState, setMyLostPet] = useState([])

  // useEffect(() => {
  //   fetchData();
  // });

  // const fetchData = () => {
  //   API.createLostPet(id).then((res) => {
  //     console.log(res.data);
  //     setLostState({
  //       firstName: res.body.firstName,
  //       lastName: res.body.lastName,
  //       phoneNumber: res.body.phoneNumber,
  //       email: res.body.email,
  //       petName: res.body.petName,
  //       petType: res.body.petType,
  //       petDescription: res.body.petDescription,
  //       lastSeen: res.body.lastSeen,
  //       dateLost: res.body.dataLost,
  //       reward: res.body.reward,
  //     });
  //   });
  // };

  return (
    <div>
      <Layout className="layout">
        <Header />

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <FormSizeDemo />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </div>
  );
}
