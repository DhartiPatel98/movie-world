import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface IProps {
  title: string;
  icon: IconDefinition;
  link: string;
}

const MenuItem: React.FC<IProps> = ({ title, icon, link }) => (
  <Link href={link} className="hover:text-amber-500 font-bold">
    <FontAwesomeIcon icon={icon} className="sm:hidden" />
    <p className="uppercase sm:inline hidden">{title}</p>
  </Link>
);

export default MenuItem;
