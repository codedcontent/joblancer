import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-full w-full flex lg:overflow-hidden">
      {/* Left Side */}
      <div className="lg:w-[35%] w-full relative">
        <Link href={"/"} className="z-20">
          <Image
            className="absolute top-5 left-1/2 transform -translate-x-1/2 w-52 z-10"
            src={"/images/2-removebg-preview.png"}
            alt="Joblancer logo"
            height={500}
            width={500}
          />
        </Link>

        {/* Children components */}
        {children}
      </div>

      {/* Right Side */}
      <div className="w-[65%] h-full bg-auth-pattern bg-cover bg-center relative lg:block hidden">
        <Image
          src={"/images/3-removebg-preview.png"}
          alt="joblancer"
          height={500}
          width={500}
          className="absolute -top-40 -right-36 h-[500px] w-[500px]"
        />
        <div className="absolute bottom-0 px-20 py-16 w-4/5 text-white space-y-4">
          <h1 className="text-6xl font-black uppercase text-shadow">
            The home of blue-collar jobs
          </h1>

          <p className="text-lg text-shadow">
            Create a free account and get full access to blue collar jobs in
            your area. Trusted by over 4000 professionals and users
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
