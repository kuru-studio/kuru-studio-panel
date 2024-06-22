import authenticate from "@/app/_utilities/authenticate";

import Atom from "@atom";

const User: React.FunctionComponent = ({ isExpanded }) => {
  const { logout } = authenticate();
  const handleLogOut = () => {
    logout();
  }

  return (
    <div className="flex gap-3 m-3 md:m-0">
      <div className="grow md:grow-0">
        <Atom.Button block type="primary" onClick={handleLogOut}>
          Log Out
        </Atom.Button>
      </div>
    </div>
  );
};

export default User;
