import { useSession } from "next-auth/react";
import { signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data, status } = useSession();
  const router = useRouter();

  if (!data) {
    return (
      <>
        <div className="text-white text-xl flex justify-center items-center mt-5">
          No hay usuario registrado
        </div>
        <button
          className="text-white bg-red-700 rounded-md px-5 py-1 hover:bg-red-950 transition
     "
          onClick={() => router.push("/auth")}
        >
          Login
        </button>
      </>
    );
  }

  console.log(data.user);

  console.log(data?.user?.email);
  console.log(data?.user?.image, "image");

  return (
    <>
      <Navbar />
    </>
  );
}
