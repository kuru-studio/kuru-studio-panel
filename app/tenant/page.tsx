import Organism from "@organism";
import { UserOutlined } from "@ant-design/icons";

export default async function TenantPage() {
  return (
    <div>
      <Organism.Header
        title="Tenant"
        icon={<UserOutlined style={{ fontSize: "20px"}} />}
      />
      <Organism.Content>
        Content
      </Organism.Content>
    </div>
  );
}
