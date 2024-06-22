import Organism from "@organism";
import { HomeOutlined } from "@ant-design/icons";

export default async function DashboardPage() {
  return (
    <div>
      <Organism.Header
        title="Dashboard"
        icon={<HomeOutlined style={{ fontSize: "20px"}} />}
      />
      <Organism.Content>
        Content
      </Organism.Content>
    </div>
  );
}
