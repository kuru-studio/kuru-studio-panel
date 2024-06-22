import Link from "next/link";
import Atom from "@atom";
import { Tooltip } from "antd";
import classNames from "classnames";

const NavigationLink = ({ target = null, onClick = null, title, children, textSize = "text-base", tooltip = false }) => {
  const LinkContent = () => {
    return (
      <div className="w-72 flex items-center gap-3">
        <div className="w-[60px] h-[60px] flex items-center justify-center">
          {children}
        </div>
        <div className={classNames(textSize, "flex-1 text-xl text-gray-600")}>
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
