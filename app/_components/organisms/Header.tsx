"use client";
import { useState } from "react";
import Atom from "@atom";
import Molecule from "@molecule";
import Organism from "@organism";
import classNames from "classnames";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { Tooltip } from "antd";

const Header: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MenuToggle = () => {
    return (
      <div className="absolute bottom-0 right-0 -mr-[10px] mb-[20px]">
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
        "shadow-lg border-r border-gray-300 relative"
      )
    }>
      <div className={classNames(isExpanded ? "w-60" : "w-[60px]", "flex flex-col h-full overflow-hidden")}>
        <Molecule.NavigationLink target="/" title="Dashboard" textSize="text-xl">
          <Atom.Logo width={40} height={40} />
        </Molecule.NavigationLink>
        <div className="w-[60px] flex-1">
          <Organism.Navigation
            isExpanded={isExpanded}
            items={[
              { name: "Home", url: "/" },
              { name: "Trending", url: "/trending" },
              { name: "Wiki", url: "/wiki" },
            ]}
          />
        </div>
        <Organism.User isExpanded={isExpanded} />
      </div>
      <MenuToggle />
    </header>
  );
};

export default Header;
