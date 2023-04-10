import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = useSession();

  if (!user) {
    return <div>no hay usuario registrado</div>;
  }

  return <div className="text-white">hi {user.data?.user?.name}</div>;
}
