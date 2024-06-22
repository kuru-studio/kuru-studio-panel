import Organism from "@organism";
import { HomeOutlined } from "@ant-design/icons";

export default async function ShopPage() {
  return (
    <div>
      <Organism.PageHeader title="Shop" icon={<HomeOutlined style={{ fontSize: "20px"}} />}>
        Menu Here
      </Organism.PageHeader>
    </div>
  );
}
