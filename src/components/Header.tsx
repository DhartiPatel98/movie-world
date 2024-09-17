import { faHouse, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { AuthButton } from "./AuthButton";
import { auth } from "../../auth";
import Avatar from "./Avatar";

const Header = async () => {
  const session = await auth();

  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex gap-5 lg:gap-10">
        <MenuItem title="Home" icon={faHouse} link="/" />
        <MenuItem title="About" icon={faCircleInfo} link="/about" />
      </div>
      <div className="flex gap-4 lg:gap-8 items-center">
        <DarkModeSwitch />
        {session && (
          <Link href={`/profile`}>
            <Avatar />
          </Link>
        )}
        {!session && <AuthButton />}
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
