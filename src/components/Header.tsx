import { faHouse, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { AuthButton } from "./AuthButton";
import { auth } from "../../auth";
import Image from "next/image";

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
            {session?.user?.image ? (
              <Image
                alt={session?.user?.name || "Profile"}
                src={session?.user?.image || ""}
                width={40}
                height={40}
                className="rounded-3xl"
              />
            ) : (
              <div className="rounded-3xl w-10 h-10 border border-solid flex justify-center items-center font-extrabold">
                D
              </div>
            )}
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
