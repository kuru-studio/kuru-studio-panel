import Organism from "@organism";
import { HomeOutlined } from "@ant-design/icons";

export default async function ModulesPage() {
  return (
    <div>
      <Organism.PageHeader title="Modules" icon={<HomeOutlined style={{ fontSize: "20px"}} />}>
        Menu Here
      </Organism.PageHeader>
    </div>
  );
}
