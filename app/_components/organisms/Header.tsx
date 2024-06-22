"use client";
import Atom from "@atom";
import Molecule from "@molecule";
import Link from "next/link";

const Header = ({ title, menuItems = [], icon }) => {
  return (
    <header className="bg-white border-b border-gray-300 px-10">
      <div className="h-[60px] flex items-center gap-3 justify-between">
        <div className="flex gap-2 items-center">
          <div>{icon}</div>
          <Atom.Title content={title} />
        </div>
        <div>
          {menuItems.map((item, index) => (
            <Link href={item.url}>
              {item.name}
            </Link>
          ))}
        </div>
        <div><Molecule.Search /></div>
      </div>
    </header>
  );
};

export default Header;
