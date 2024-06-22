import Atom from "@atom";

import * as React from "react";
import Link from "next/link";

const Navigation = ({ items, isExpanded }) => {
  return (
    <nav className="md:flex md:flex-row">
      {items.map((item, index) => (
        <div>
          <Atom.Button type="link" key={index}>
            <Link href={item.url}>
              <p className="text-neutral-100">{item.name}</p>
            </Link>
          </Atom.Button>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
