import { cn } from "@/lib/utils";

interface FloatingLabelProps {
  label: string;
  name: string;
  textarea?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  [key: string]: unknown;
}

const FloatingLabel: React.FC<FloatingLabelProps> = ({
  label,
  name,
  textarea = false,
  className = "",
  inputClassName = "",
  labelClassName = "",
  ...props
}) => {
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className={cn("relative z-0", className)}>
      <Tag
        name={name}
        className={cn(
          "peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-primary focus:outline-none focus:ring-0",
          inputClassName
        )}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={name}
        className={cn(
          "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary",
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabel;
