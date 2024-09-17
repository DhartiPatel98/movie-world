import { redirect } from "next/navigation";
import { auth, signOut } from "../../auth";

export async function AuthButton() {
  const session = await auth();

  const authHandler = async () => {
    "use server";
    if (session) {
      await signOut();
      return;
    }

    redirect("/login");
  };

  return (
    <form action={authHandler}>
      <button
        className="text-lg font-bold bg-amber-500 py-2 px-3 rounded-lg"
        type="submit"
      >
        {session ? "Log Out" : "Log In"}
      </button>
    </form>
  );
}
