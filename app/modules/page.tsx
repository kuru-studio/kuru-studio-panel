import Organism from "@organism";
import { FlagOutlined } from "@ant-design/icons";

export default async function ModulesPage() {
  return (
    <div>
      <Organism.Header
        title="Modules"
        icon={<FlagOutlined style={{ fontSize: "20px"}} />}
      />
      <Organism.Content>
        Content
      </Organism.Content>
    </div>
  );
}
