"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
type Props = {};

export default function signUp({}: Props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("email", email);
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: formData,
    });

    if (response.status == 200) {
      router.push("/signin");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center  h-screen">
        <div className="hidden lg:block lg:w-1/2 ">
          <Image
            alt="logo"
            src={"/logo.png"}
            width={480}
            height={0}
            className="w-1/2 mx-auto"
          />
        </div>
        <div className="items-center w-full max-w-md p-12 mx-auto lg:w-2/6 flex-1 rounded-lg shadow-xl h-2/3">
          <div className="mb-7 mt-8 rounded-xl">
            <h3 className="font-semibold text-4xl text-black   text-center">
              SignUp
            </h3>
            <p className="text-gray-400  mt-2">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-sm text-purple-700 hover:text-purple-700"
              >
                Sign in here
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              className="mt-5 w-full text-sm  px-4 py-3  focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="username"
              type="text"
              placeholder="username"
              className="mt-5 w-full text-sm  px-4 py-3  focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="mt-5 w-full text-sm  px-4 py-3  focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <fieldset>
              <div className="flex flex-col">
                <div className="relative flex mt-2">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="mt-5 w-full text-sm  px-4 py-3  focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div className="absolute right-2 bg-transparent flex top-6  text-black ">
                    {showPassword ? (
                      <>
                        <Eye
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <EyeOff
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </fieldset>

            <Button
              type="submit"
              className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
             shadow-xl hover:text-white hover:bg-black"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
