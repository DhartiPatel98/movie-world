import { faHouse, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex gap-6 lg:gap-10">
        <MenuItem title="Home" icon={faHouse} link="/" />
        <MenuItem title="About" icon={faCircleInfo} link="/about" />
      </div>
      <div className="flex gap-6 lg:gap-10 items-center">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            MOVIE
          </span>
          <span className="text-xl font-bold hidden sm:inline">World</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
