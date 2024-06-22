"use client";
import Atom from "@atom";
import Molecule from "@molecule";

const Header: React.FunctionComponent = () => {
  return (
    <header className="shadow-lg border-r border-gray-300 flex flex-col">
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <Atom.Logo width={40} height={40} />
      </div>
      <div className="w-[60px] flex-1">
        <Molecule.Navigation
          items={[
            { name: "Home", url: "/" },
            { name: "Trending", url: "/trending" },
            { name: "Wiki", url: "/wiki" },
          ]}
        />
      </div>
      <div className="w-[60px]">
        <Molecule.User />
      </div>
    </header>
  );
};

export default Header;
