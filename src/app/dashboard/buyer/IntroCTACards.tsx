import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  ctaLink: string;
  ctaTitle: string;
  ctaColor: string;
  description: string;
};

const IntroCTACards = ({
  title,
  ctaLink,
  ctaTitle,
  ctaColor,
  description,
}: Props) => {
  return (
    <div
      className={`px-12 py-8 rounded-md flex flex-col justify-center items-start gap-12 ${ctaColor}`}
    >
      <div className="space-y-1">
        <p className="font-black text-xl text-white">{title}</p>

        {/* <p className="font-extralight">{description}</p> */}
      </div>

      <div className="flex w-full mt-auto">
        <Link
          href={ctaLink}
          className="py-3 px-4 w-full text-center uppercase rounded-md bg-primary text-white font-semibold"
        >
          {ctaTitle}
        </Link>
      </div>
    </div>
  );
};

export default IntroCTACards;
