"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import CustomButton from "../customButton/CustomButton";

type Props = {};

const Navbar = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? "auto" : "hidden"; // Disable/Enable scrolling
  };

  const closeMenu = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <nav className="lg:px-14 px-7 md:py-2.5 py-1.5 flex items-center justify-between sticky top-0 z-50 bg-dark/90">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          className="md:w-36 w-32 z-10"
          src={"/images/2-removebg-preview.png"}
          alt="Joblancer logo"
          height={500}
          width={500}
        />
      </Link>

      {/* Nav - Large Screen */}
      <div className="flex lg:gap-x-5 gap-x-2 justify-center items-center">
        {/* Email Icon */}
        <AiOutlineMail className="text-xl" />

        {/* Notification */}
        <MdOutlineNotifications className="text-2xl" />

        {/* Account */}
        <div
          className="rounded-full lg:h-10 h-8 lg:w-10 w-8 relative"
          onClick={toggleMenu}
        >
          <Image
            src={"/images/Linked in profile pic - edited.png"}
            alt="Alex Web Tech"
            height={500}
            width={500}
            className="h-full w-full rounded-full bg-cover"
          />

          <div
            className={`absolute right-0 top-[120%] flex items-center justify-center z-50 transition-transform duration-300 ease-in-out ${
              isNavOpen ? "scale-100" : "scale-0"
            }`}
          >
            <div className="bg-white py-4 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out flex flex-col gap-5 w-52 justify-center items-center">
              <div className="w-[70%]">
                <CustomButton title="Logout" loading={false} />
              </div>

              {/* <Link
                href={"contact"}
                className="underline text-black text-sm transform transition-transform duration-300 hover:scale-105"
              >
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
