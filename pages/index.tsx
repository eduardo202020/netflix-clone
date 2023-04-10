import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

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
      <div className="container mx-auto my-5">
        <div className="flex justify-between items-center">
          <div className="text-white text-4xl font-bold flex">
            <p className="  mr-4">Hi:</p>
            <span className="text-sky-800 font-bold text-4xl">
              {data.user?.email}
            </span>
          </div>
          <div className="overflow-hidden rounded-full">
            <img
              className="h-20 w-20 rounded-full hover:scale-125  transition cursor-pointer object-cover"
              src={
                data.user?.image ||
                "https://www.kindpng.com/picc/m/21-213982_koki-colleen-png-download-default-profile-picture-circle.png"
              }
              alt=""
            />
          </div>
        </div>
        <button
          className="text-white bg-red-700 rounded-md px-5 py-1 hover:bg-red-950 transition mr-4
        "
          onClick={() => signOut()}
        >
          Sign out
        </button>
        {!data && (
          <button
            className="text-white bg-red-700 rounded-md px-5 py-1 hover:bg-red-950 transition
      "
            onClick={() => router.push("/auth")}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
}
