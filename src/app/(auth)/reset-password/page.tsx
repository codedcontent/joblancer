/* eslint-disable react/no-unescaped-entities */
import ResetPasswordForm from "./ResetPasswordForm";

const page = () => {
  return (
    <div className="w-full h-full px-14 relative flex justify-center items-center">
      {/* Login */}
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-3xl text-left w-full font-bold">Reset password</h1>

        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default page;
