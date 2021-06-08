import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, DatePicker } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

const FoundForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <h1>Add your found pet here!</h1>
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
          <Input />
        </Form.Item>
        <Form.Item label="Last Name ">
          <Input />
        </Form.Item>
        <Form.Item label="Phone Num">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Select Type Of Pet ">
          <Select>
            <Select.Option value="Dog">Dog</Select.Option>
            <Select.Option value="Cat">Cat</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Pet Description">
          <Input />
        </Form.Item>
        <Form.Item label="Select Circumstances ">
          <Select>
            <Select.Option value="Dog">In Possession </Select.Option>
            <Select.Option value="Cat">Sighting or still roaming</Select.Option>
            <Select.Option value="Dog">Deceased </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date Found">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Last Seen Location">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary">Post Pet </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FoundForm;
