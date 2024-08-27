"use client";

/* eslint-disable react/no-unescaped-entities */
import LoginForm from "./LoginForm";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className="w-full h-full px-14 relative flex justify-center items-center">
      {/* Login */}
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-3xl text-left w-full font-bold">Login</h1>

        <LoginForm />

        <p className="text-sm font-light">
          Don't have an account?{" "}
          <span className="font-black underline">
            <Link href={"signup"}>Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;
