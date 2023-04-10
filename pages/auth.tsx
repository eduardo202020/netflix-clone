import Input from "@/components/Input";
import axios from "axios";
import { log } from "console";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const router = useRouter();

  const handleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });
    router.push("/");
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-no-repeat bg-cover bg-fixed">
      <div className="w-full h-full bg-black/50 px-10">
        <nav className="mx-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="px-16 py-16 bg-black/70 self-center mt-2 lg:max-w-md lg:w-2/5  rounded-md w-full ">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className=" flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  label="name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  value={name}
                />
              )}
              <Input
                id="email"
                label="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                value={email}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                value={password}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <div className="flex flex-row mt-8 gap-4 justify-center items-center">
              <div className="flex items-center justify-center cursor-pointer hover:opacity-80 transition w-10 h-10 bg-white rounded-full">
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "/",
                  })
                }
                className="flex items-center justify-center cursor-pointer hover:opacity-80 transition w-10 h-10 bg-white rounded-full"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-400 mt-12">
              {variant === "login"
                ? "Firs time using a Netflix?"
                : "Already have an account"}

              <span
                onClick={handleVariant}
                className="text-white hover:underline cursor-pointer ml-2"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
