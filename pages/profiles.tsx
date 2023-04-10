import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

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

const Profiles = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (!data) {
    return (
      <>
        <div className="h-full flex flex-col gap-4 items-center justify-center">
          <h2 className="text-white text-4xl text-center"> User not found</h2>
          <button
            onClick={() => router.push("/auth")}
            className="px-5 py-2 bg-red-500 rounded-md hover:bg-red-800 transition"
          >
            Sign In
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is whatching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push("/")}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="
                    w-44 
                    h-44
                    rounded-md
                    flex
                    items-center
                    justify-center
                    border-2
                    border-transparent
                    group-hover:cursor-pointer
                    group-hover:border-white
                    overflow-hidden
                "
              >
                <img
                  className="object-cover h-full"
                  src={data?.user?.image || "/images/default.png"}
                  alt=""
                />
              </div>
              <div className="mt-4 text-gray-400 tex-2xl text-center group-hover:text-white">
                {data?.user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
