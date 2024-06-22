import Organism from "@organism";
import { ShopOutlined } from "@ant-design/icons";

export default async function ShopPage() {
  return (
    <div>
      <Organism.Header title="Shop" icon={<ShopOutlined style={{ fontSize: "20px"}} />}>
        Menu Here
      </Organism.Header>
      <Organism.Content>
        Content
      </Organism.Content>
    </div>
  );
}
