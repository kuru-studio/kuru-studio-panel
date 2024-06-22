import Atom from "@atom";

const Header = ({ title, children, icon }) => {
  return (
    <header className="bg-white border-b border-gray-300 px-10">
      <div className="h-[60px] flex items-center gap-3">
        <div className="flex gap-2 items-center">
          <div>{icon}</div>
          <Atom.Title content={title} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
