import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
function PetCard() {
  return (
    <div className="site-card-wrapper">
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </div>
  );
}
export default PetCard;
