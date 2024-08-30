import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";

type Props = {
  buttonLink: string;
  title: string;
};

const LinkButton = ({ buttonLink, title, ...rest }: Props) => {
  return (
    <Link
      href={buttonLink}
      className="w-full py-2.5 px-5 rounded-lg text-center bg-primary text-white"
    >
      {title}
    </Link>
  );
};

export default LinkButton;
