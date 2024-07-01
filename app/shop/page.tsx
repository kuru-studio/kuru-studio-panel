import Organism from "@organism";
import { ShopOutlined } from "@ant-design/icons";

export default async function ShopPage() {
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
        Content
      </Organism.Content>
    </div>
  );
}
