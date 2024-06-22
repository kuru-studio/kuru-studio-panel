import authenticate from "@/app/_utilities/authenticate";

import { LogoutOutlined } from "@ant-design/icons";
import Molecule from "@molecule";

const User: React.FunctionComponent = ({ isExpanded }) => {
  const { logout } = authenticate();
  const handleLogOut = () => {
    logout();
  }

  return (
    <Molecule.NavigationLink onClick={handleLogOut} title="Log Out" tooltip={!isExpanded}>
      <LogoutOutlined style={{ fontSize: "20px"}} />
    </Molecule.NavigationLink>
  );
};

export default User;
