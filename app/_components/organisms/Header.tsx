"use client";
import Atom from "@atom";
import Molecule from "@molecule";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Header = ({ title, menuItems = [], icon }) => {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-gray-300 px-10">
      <div className="h-[60px] flex items-center gap-3 justify-between">
        <div className="flex gap-2 items-center">
          <div>{icon}</div>
          <Atom.Title content={title} />
        </div>
        <Atom.Visibility state={menuItems.length >= 1}>
          <div className="flex gap-3">
            {menuItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <div className={classNames(
                  pathname === item.url ? "border-b-[#cd3c2b]" : "border-b-white",
                  "h-[60px] border-t-4 border-b-4 border-t-white hover:border-b-[#cd3c2b] flex items-center justify-center px-5 transition-all text-sm"
                )}>
                  <div>{item.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </Atom.Visibility>
        <div><Molecule.Search /></div>
      </div>
    </header>
  );
};

export default Header;
