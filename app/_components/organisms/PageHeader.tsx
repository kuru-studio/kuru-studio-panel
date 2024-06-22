import Atom from "@atom";

const PageHeader = ({ title, children, icon }) => {
  return (
    <div className="bg-white border-b border-gray-300 px-10">
      <div className="h-[60px] flex items-center gap-3">
        <div className="flex gap-2 items-center">
          <div>{icon}</div>
          <Atom.Title content={title} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
