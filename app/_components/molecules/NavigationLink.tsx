import Link from "next/link";
import Atom from "@atom";
import classNames from "classnames";

const NavigationLink = ({ target = null, onClick = null, title, children, textSize = "text-base" }) => {
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
        <div onClick={onClick} className="cursor-pointer">
          <LinkContent />
        </div>
      </Atom.Visibility>
      <Atom.Visibility state={!onClick}>
        <Link href={target}>
          <LinkContent />
        </Link>
      </Atom.Visibility>
    </>
  );
};

export default NavigationLink;
