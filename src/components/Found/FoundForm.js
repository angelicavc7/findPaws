import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FoundForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  //upload botton
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
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
        <Form.Item label="Last Seen Location">
          <Input />
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary">Post</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FoundForm;
