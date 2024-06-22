"use client";
import { useState } from "react";
import Atom from "@atom";
import Molecule from "@molecule";
import Organism from "@organism";
import classNames from "classnames";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { Tooltip } from "antd";
import { HomeOutlined, ShopOutlined } from "@ant-design/icons";

const Header: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MenuToggle = () => {
    return (
      <div className="absolute top-0 right-0 -mr-[10px] mt-[20px]">
        <Tooltip title={isExpanded ? "Collapse Menu" : "Expand Menu"} placement="right">
          <button
            className="w-[20px] h-[20px] rounded-full border border-gray-300 bg-white shadow-lg overflow-hidden flex justify-center items-center"
            onClick={() => setIsExpanded(!isExpanded)}
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
    <header className={
      classNames(
        {
          "w-60": isExpanded,
          "w-[60px]": !isExpanded,
        },
        "shadow-lg border-r border-gray-300 relative transition-all"
      )
    }>
      <div className={classNames(isExpanded ? "w-60" : "w-[60px]", "flex flex-col h-full overflow-hidden transition-all")}>
        <Molecule.NavigationLink target="/" title="Dashboard">
          <Atom.Logo width={30} height={30} />
        </Molecule.NavigationLink>
        <Organism.Navigation
          isExpanded={isExpanded}
          items={[
            { name: "Shop", url: "/shop", icon: <ShopOutlined style={{ fontSize: "20px"}} /> },
          ]}
        />
        <div className="flex flex-col flex-1 justify-end">
          <Organism.User isExpanded={isExpanded} />
        </div>
      </div>
      <MenuToggle />
    </header>
  );
};

export default Header;
