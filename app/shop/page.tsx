import Organism from "@organism";
import { ShopOutlined } from "@ant-design/icons";

export default async function ShopPage() {
  return (
    <div>
      <Organism.Header
        title="Shop"
        icon={<ShopOutlined style={{ fontSize: "20px"}} />}
        menuItems={[
          { name: "Shop", url: "/shop" },
        ]}
      />
      <Organism.Content>
        Content
      </Organism.Content>
    </div>
  );
}
