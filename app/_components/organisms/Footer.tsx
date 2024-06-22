import { HeartIcon } from "@heroicons/react/solid";
import Atom from "@atom";

const Footer: React.FunctionComponent = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="bg-gray-200 text-black">
        <div className="container mx-auto py-3 flex flex-col items-center gap-1 text-sm">
          <div>Kuru Studio Panel &copy; {year}</div>
        </div>
      </div>
      <div className="bg-gray-300 text-black">
        <div className="container mx-auto py-3 flex flex-col items-center gap-1 text-sm">
          <div className="flex items-center gap-1">
            Made with <HeartIcon className="h-5 w-5 text-red-500" /> by
          </div>
          <div><span className="font-bold">Kuru Studio Team</span> and the <span className="font-bold">Kuru Studio Community</span></div>
          <div className="mt-2">
            <Atom.GitHub />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
