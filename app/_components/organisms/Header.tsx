"use client";
import { useState } from "react";
import Atom from "@atom";
import Molecule from "@molecule";
import classNames from "classnames";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { Tooltip } from "antd";

const Header: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MenuToggle = () => {
    return (
      <div className="absolute bottom-0 right-0 -mr-[15px] mb-5">
        <Tooltip title={isExpanded ? "Collapse Menu" : "Expand Menu"} placement="right">
          <button
            className="w-[30px] h-[30px] rounded-full border border-gray-300 bg-white shadow-lg overflow-hidden flex justify-center items-center"
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
          "w-72": isExpanded,
          "w-[60px]": !isExpanded,
        },
        "shadow-lg border-r border-gray-300 flex flex-col relative"
      )
    }>
      <div>
        <div className="w-[60px] h-[60px] flex items-center justify-center">
          <Atom.Logo width={40} height={40} />
        </div>
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
      <MenuToggle />
    </header>
  );
};

export default Header;
