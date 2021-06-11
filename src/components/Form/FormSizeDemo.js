import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import API from "../../utils/API";

export default function FormSizeDemo() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petType: "",
    petDescription: "",
    lastSeen: "",
    dateLost: "",
    reward: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("formState", formState);
    API.createLostPet(formState).then((res) => {
      console.log(res.data);
      setFormState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        petName: "",
        petType: "",
        petDescription: "",
        lastSeen: "",
        dateLost: "",
        reward: "",
      });
    });
  };

  return (
    <>
      <h1>Add Your Lost Pet Here!</h1>
      <Form
        // onSubmit={formSubmit}
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
        <Form.Item label="Pet Name">
          <Input
            value={formState.petName}
            name="Pet Name"
            onChange={(e) =>
              setFormState({ ...formState, petName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Select Type Of Pet ">
          <Input
            value={formState.petType}
            name="Pet Name"
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
        <Form.Item label="Last Seen Location">
          <Input
            value={formState.lastSeen}
            onChange={(e) =>
              setFormState({ ...formState, lastSeen: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Date Lost">
          <Input
            value={formState.dateLost}
            onChange={(e) =>
              setFormState({ ...formState, dateLost: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Reward">
          <Input
            value={formState.reward}
            name="Reward"
            onChange={(e) =>
              setFormState({ ...formState, reward: e.target.value })
            }
          />
          <Button type="primary" onClick={formSubmit}>
            Post Pet
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
