import Organism from "@organism";
import { ShopOutlined } from "@ant-design/icons";

export default async function ShopPage() {
  return (
    <div>
      <Organism.PageHeader title="Shop" icon={<ShopOutlined style={{ fontSize: "20px"}} />}>
        Menu Here
      </Organism.PageHeader>
      <Organism.Content>
        Content
      </Organism.Content>
    </div>
  );
}
