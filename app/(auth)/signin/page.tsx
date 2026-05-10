"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Google from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef } from "react";

type Props = {};

export default function page({}: Props) {
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    signIn("credentials", {
      username: fromData.get("username"),
      password: fromData.get("password"),
      redirect: true,
      callbackUrl: "/",
    });
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
        <div className="items-center w-full max-w-md p-12 mx-auto lg:w-2/6 flex-1 rounded-lg h-1/2">
          <div className="mb-7 mt-8 rounded-xl">
            <h3 className="font-semibold text-4xl text-black   text-center">
              SignIn
            </h3>
          </div>
          <form onSubmit={handleLogin}>
            <Input
              name="username"
              type="text"
              placeholder="Email / username"
              className="mt-2 w-full text-sm  px-4 py-3  focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              className="mt-2 w-full text-sm  px-4 py-3  focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <Button
              variant={"none"}
              type="submit"
              className="w-full mt-2 bg-black text-white"
            >
              sign in
            </Button>
            <div className="flex items-center justify-center space-x-2 my-5">
              <span className="h-px w-16 bg-gray-100"></span>
              <span className="text-gray-300 font-normal">or</span>
              <span className="h-px w-16 bg-gray-100"></span>
            </div>
          </form>
          <div className="flex  justify-center gap-5 w-full">
            <Button
              onClick={() => signIn()}
              variant={"none"}
              className=" w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
            >
              <svg
                className="w-4 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                />
                <path
                  fill="#34A853"
                  d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                />
                <path
                  fill="#4A90E2"
                  d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                />
              </svg>
              Google
            </Button>

            <Button
              variant={"none"}
              className=" w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-2"
            >
              {" "}
              <svg
                className="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#2aa4f4"></stop>
                  <stop offset="1" stop-color="#007ad9"></stop>
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                ></path>
              </svg>
              Facebook
            </Button>
          </div>
          <p className="text-gray-400  mt-2">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-sm text-purple-700 hover:text-purple-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
