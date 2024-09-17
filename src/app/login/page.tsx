import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { getSessionData } from "@/utils/helperMethods";

const Login = async () => {
  const session = await getSessionData();
  if (session) {
    redirect("/profile");
  }

  return (
    <div className="w-full h-full bg-amber-500 absolute left-0 top-0 flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default Login;
