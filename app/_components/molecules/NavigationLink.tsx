import Link from "next/link";
import { usePathname } from 'next/navigation'
import Atom from "@atom";
import { Tooltip } from "antd";
import classNames from "classnames";

const NavigationLink = ({ target = null, onClick = null, title, children, textSize = "text-base", tooltip = false, divider = false }) => {
  const pathname = usePathname()

  const LinkContent = () => {
    return (
      <div className={classNames({ "border-b border-gray-300": divider, "bg-gray-100": pathname === target }, "w-60 flex items-center group hover:bg-[#cd3c2b] transition-all")}>
        <div className="w-[60px] h-[60px] flex items-center justify-center group-hover:text-white transition-all">
          {children}
        </div>
        <div className={classNames(textSize, "flex-1 text-gray-600 group-hover:text-white transition-all")}>
          {title}
        </div>
      </div>
    );
  }

  return (
    <>
      <Atom.Visibility state={onClick}>
        <Tooltip placement="right" title={tooltip ? title : null}>
          <div onClick={onClick} className="cursor-pointer">
            <LinkContent />
          </div>
        </Tooltip>
      </Atom.Visibility>
      <Atom.Visibility state={!onClick}>
        <Tooltip placement="right" title={tooltip ? title : null}>
          <Link href={target}>
            <LinkContent />
          </Link>
        </Tooltip>
      </Atom.Visibility>
    </>
  );
};

export default NavigationLink;
