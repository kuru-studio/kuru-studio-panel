import Organism from "@organism";
import { HomeOutlined } from "@ant-design/icons";

export default async function TenantPage() {
  return (
    <div>
      <Organism.PageHeader title="Tenant" icon={<HomeOutlined style={{ fontSize: "20px"}} />}>
        Menu Here 
      </Organism.PageHeader>
    </div>
  );
}
