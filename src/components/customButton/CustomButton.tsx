import { AiOutlineLoading } from "react-icons/ai";

type Props = {
  title: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({ loading, handleClick, title, ...rest }: Props) => {
  return (
    <button
      className="w-full py-2.5 rounded-lg text-center bg-primary text-white"
      onClick={handleClick}
      {...rest}
    >
      <div className="flex justify-center items-center">
        {loading ? (
          <AiOutlineLoading className="animate-spin text-xl" />
        ) : (
          title
        )}
      </div>
    </button>
  );
};

export default CustomButton;
