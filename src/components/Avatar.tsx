import Image from "next/image";
import { getSessionData } from "@/utils/helperMethods";

interface IProps {
  height?: number;
  width?: number;
}

const Avatar: React.FC<IProps> = async ({ height, width }) => {
  const user = await getSessionData();
  const { image, name, email } = user || {};

  return image ? (
    <Image
      alt={name || "Profile"}
      src={image || ""}
      width={width || 40}
      height={height || 40}
      className="rounded-full"
    />
  ) : (
    <div className="rounded-full w-10 h-10 border border-solid flex justify-center items-center font-extrabold">
      {(name || email || "").charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
