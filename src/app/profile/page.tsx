import { AuthButton } from "@/components/AuthButton";
import Avatar from "@/components/Avatar";
import { getSessionData } from "@/utils/helperMethods";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile",
  description: "Website to search for any movies",
};

const Profile = async () => {
  const session = await getSessionData();
  const { email, name } = session || {};

  if (!session) {
    redirect("/");
  }

  const labelClassName = "text-lg font-bold";

  return (
    <div className="w-full mt-6">
      <h1 className="text-lg lg:text-3xl font-extrabold mb-3">Profile</h1>
      <div className="border border-solid p-5 lg:p-6 w-full">
        <div className="flex items-center justify-center">
          <Avatar height={80} width={80} />
        </div>

        <div className="mt-7 flex flex-col gap-5">
          <div>
            <label className={labelClassName}>Name:</label>
            <div>{name}</div>
          </div>
          <div>
            <label className={labelClassName}>Email:</label>
            <div>{email}</div>
          </div>
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Profile;
