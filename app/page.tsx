import Organism from "@organism";
import { HomeOutlined } from "@ant-design/icons";

export default async function HomePage() {
  return (
    <div>
      <Organism.PageHeader title="Dashboard" icon={<HomeOutlined style={{ fontSize: "20px"}} />}>
        content
      </Organism.PageHeader>
    </div>
  );
}
