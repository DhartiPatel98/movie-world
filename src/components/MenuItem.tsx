"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  icon: IconDefinition;
  link: string;
}

const MenuItem: React.FC<IProps> = ({ title, icon, link }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`hover:text-amber-500 font-bold ${
        pathname === link ? "text-amber-500" : ""
      }`}
    >
      <FontAwesomeIcon icon={icon} className="sm:hidden" />
      <p className="uppercase sm:inline hidden">{title}</p>
    </Link>
  );
};

export default MenuItem;
