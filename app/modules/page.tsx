import Organism from "@organism";
import { FlagOutlined } from "@ant-design/icons";

export default async function ModulesPage() {
  return (
    <div>
      <Organism.PageHeader title="Modules" icon={<FlagOutlined style={{ fontSize: "20px"}} />}>
        Menu Here
      </Organism.PageHeader>
    </div>
  );
}
