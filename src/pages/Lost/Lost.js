import React,{useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import API from '../../utils/API'
import { Layout } from "antd";
import FormSizeDemo from "../../components/Form/FormSizeDemo";
import Header from "../../components/Header/Header";
import "antd/dist/antd.css";
const { Content, Footer } = Layout;

export default function Lost(props) {

  const {id}= useParams();
  // const history = useHistory();

  const [setLostState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 2068835400,
    email: "",
    petName: "",
    petType: "",
    petDescription: "",
    lastSeen: "",
    dateLost: "",
    reward: 200
  })

  // const[newLostPet, setNewLostPet] = useState("")
  // const[myLostState, setMyLostPet] = useState([])

  useEffect(() => {
    fetchData()
    
  } )

    const fetchData= () =>{
      API.createLostPet(id,props).then(res=>{
        console.log(res.data);
        setLostState({
          firstName:res.data.pet.firstName,
          lastName:res.data.pet.lastName,
          phoneNumber:res.data.pet.phoneNumber,
          email:res.data.pet.email,
          petName:res.data.pet.petName,
          petType:res.data.pet.petType,
          petDescription:res.data.pet.petDescription,
          lastSeen:res.data.pet.lastSeen,
          dateLost:res.data.pet.dataLost,
          reward:res.data.pet.reward
      })
    })
  }
      
    
   return (
    <div>
      <Layout className="layout">
        <Header />

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <FormSizeDemo fetchData={fetchData}/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          
        </Footer>
      </Layout>
    </div>
    // document.getElementById("container")
  )
}
