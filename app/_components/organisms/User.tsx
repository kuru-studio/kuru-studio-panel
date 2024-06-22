import authenticate from "@/app/_utilities/authenticate";

import { ExportOutlined, UserOutlined } from "@ant-design/icons";
import Molecule from "@molecule";

const User: React.FunctionComponent = ({ isExpanded }) => {
  const { logout } = authenticate();
  const handleLogOut = () => {
    logout();
  }

  return (
    <>
      <Molecule.NavigationLink onClick={handleLogOut} title="Log Out" tooltip={!isExpanded}>
        <ExportOutlined style={{ fontSize: "20px"}} />
      </Molecule.NavigationLink>
      <Molecule.NavigationLink target="/tenant" title="Tenant" tooltip={!isExpanded}>
        <UserOutlined style={{ fontSize: "20px"}} />
      </Molecule.NavigationLink>

    </>
  );
};

export default User;
