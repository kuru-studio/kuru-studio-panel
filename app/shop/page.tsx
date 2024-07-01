"use client";
import Organism from "@organism";
import { ShopOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { createColumnsForTable } from "../_utilities";

const data = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const headers = createColumnsForTable([
  "Name",
  "Age",
  "Address",
]);

export default function ShopPage() {
  return (
    <div>
      <Organism.Header
        title="Shop"
        icon={<ShopOutlined style={{ fontSize: "20px"}} />}
        menuItems={[
          { name: "Product", url: "/shop" },
          { name: "Material", url: "/material" },
          { name: "Order", url: "/order" },
        ]}
      />
      <Organism.Content>
        <Table dataSource={data} columns={headers} />
      </Organism.Content>
    </div>
  );
}
