type Props = {
  title: string;
  placeholder: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  title,
  placeholder,
  error = "",
  value,
  onChange,
  type,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col mb-4">
      {/* Title */}
      <label className="font-semibold mb-1 text-sm">{title}</label>

      {/* Input Field */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded-md focus:outline-none transition placeholder:text-sm placeholder:font-light ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...rest}
      />

      {/* Error Message */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;
