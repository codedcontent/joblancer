"use client";

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import ForgottenPasswordForm from "./ForgottenPasswordForm";
import { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [restLinkSent, setRestLinkSent] = useState(true);

  // confirm reset link sent
  const confirmResetLink = () => {
    if (true) {
      setRestLinkSent(true);
      return true;
    } else {
      setRestLinkSent(false);
      return false;
    }
  };

  return (
    <div className="w-full h-full px-14 relative flex justify-center items-center">
      {/* Login */}
      <div className="flex flex-col gap-5 w-full">
        <div className="space-y-1">
          <h1 className="text-3xl text-left w-full font-bold">
            Forgotten password?
          </h1>

          {!restLinkSent && (
            <p className="text-sm font-light">
              Enter your email and request a password reset link
            </p>
          )}
        </div>

        {restLinkSent ? (
          <p className="text-sm font-light">
            A reset link has been sent to your email -{" "}
            <span className="font-black underline">
              <Link href={"login"}>Go home to log in</Link>
            </span>
          </p>
        ) : (
          <>
            <ForgottenPasswordForm confirmResetLink={confirmResetLink} />

            <p className="text-sm font-light">
              Remember password?{" "}
              <span className="font-black underline">
                <Link href={"login"}>Log in</Link>
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
