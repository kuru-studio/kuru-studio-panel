"use client";
import { useState } from "react";
import Atom from "@atom";
import Molecule from "@molecule";
import Organism from "@organism";
import classNames from "classnames";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { Tooltip } from "antd";
import { ShopOutlined, ExportOutlined, UserOutlined, FlagOutlined } from "@ant-design/icons";
import authenticate from "@/app/_utilities/authenticate";

const Sidebar: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { logout } = authenticate();

  const menuItems = [
    { name: "Shop", url: "/shop", icon: <ShopOutlined style={{ fontSize: "20px"}} /> },
  ];

  const handleLogOut = () => {
    logout();
  }

  const handleIsExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const MenuToggle = () => {
    return (
      <div className="absolute top-0 right-0 -mr-[10px] mt-[20px]">
        <Tooltip title={isExpanded ? "Collapse Menu" : "Expand Menu"} placement="right">
          <button
            className="w-[20px] h-[20px] rounded-full border border-gray-300 bg-white shadow-lg overflow-hidden flex justify-center items-center"
            onClick={handleIsExpand}
          >
            <Atom.Visibility state={isExpanded}>
              <ChevronLeftIcon className="h-8 w-8 text-gray-500" />
            </Atom.Visibility>
            <Atom.Visibility state={!isExpanded}>
              <ChevronRightIcon className="h-8 w-8 text-gray-500" />
            </Atom.Visibility>
          </button>
        </Tooltip>
      </div>
    );
  }

  return (
    <div className={
      classNames(
        {
          "w-60": isExpanded,
          "w-[60px]": !isExpanded,
        },
        "relative transition-all"
      )
    }>
      <div className={classNames(isExpanded ? "w-60" : "w-[60px]", "flex flex-col h-full overflow-hidden transition-all border-r border-gray-300")}>
        <Molecule.NavigationLink target="/dashboard" title="Dashboard" divider={true}>
          <Atom.Logo width={30} height={30} />
        </Molecule.NavigationLink>
        {menuItems.map((item, index) => (
          <Molecule.NavigationLink target={item.url} title={item.name} tooltip={!isExpanded} key={index}>
            {item.icon}
          </Molecule.NavigationLink>
        ))}
        <div className="flex flex-col flex-1 justify-end">
          <Molecule.NavigationLink target="/tenant" title="Tenant" tooltip={!isExpanded}>
            <UserOutlined style={{ fontSize: "20px"}} />
          </Molecule.NavigationLink>
          <Molecule.NavigationLink target="/modules" title="Modules" tooltip={!isExpanded}>
            <FlagOutlined style={{ fontSize: "20px"}} />
          </Molecule.NavigationLink>
          <Molecule.NavigationLink onClick={handleLogOut} title="Log Out" tooltip={!isExpanded}>
            <ExportOutlined style={{ fontSize: "20px"}} />
          </Molecule.NavigationLink>
        </div>
      </div>
      <MenuToggle />
    </div>
  );
};

export default Sidebar;
