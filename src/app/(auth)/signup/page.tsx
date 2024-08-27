/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import SignupForm from "./SignupForm";

const page = () => {
  return (
    <div className="w-full h-full px-14 relative flex justify-center items-center">
      {/* Create Account */}
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-3xl text-left w-full font-bold mt-10">
          Crate account
        </h1>

        <SignupForm />

        <p className="text-sm font-light">
          Already have an account?{" "}
          <span className="font-black underline">
            <Link href={"login"}>Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;
