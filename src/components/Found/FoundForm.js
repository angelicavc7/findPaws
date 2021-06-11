import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import API from "../../utils/API";
import "./Found.css"

export default function FoundForm() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    petType: "",
    petDescription: "",
    circumstances: "",
    dateFound: "",
    lastSeen: "",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("formState", formState);
    API.createFoundPet(formState).then((res) => {
      console.log(res.data);
      setFormState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        petType: "",
        petDescription: "",
        circumstances: "",
        dateFound: "",
        lastSeen: "",
      });
    });
  };
  return (
    <>
      <h1 className="AddPet">Add Your Found Pet Here!</h1>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="First Name ">
          <Input
            value={formState.firstName}
            name="First Name "
            onChange={(e) =>
              setFormState({ ...formState, firstName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Last Name ">
          <Input
            value={formState.lastName}
            name="Last name "
            onChange={(e) =>
              setFormState({ ...formState, lastName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            value={formState.phoneNumber}
            name="Phone Number "
            onChange={(e) =>
              setFormState({ ...formState, phoneNumber: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            value={formState.email}
            name="Email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Type Of Pet ">
          <Input
            value={formState.petType}
            onChange={(e) =>
              setFormState({ ...formState, petType: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Pet Description">
          <Input
            value={formState.petDescription}
            onChange={(e) =>
              setFormState({ ...formState, petDescription: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Pet Circumstances ">
          <Input
            value={formState.circumstances}
            onChange={(e) =>
              setFormState({ ...formState, circumstances: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Date Found">
          <Input
            value={formState.dateFound}
            onChange={(e) =>
              setFormState({ ...formState, dateFound: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Last Seen Location">
          <Input
            value={formState.lastSeen}
            name="Last Seen Location"
            onChange={(e) =>
              setFormState({ ...formState, lastSeen: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={formSubmit}>
            Post Pet
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
