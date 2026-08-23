import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  onClick
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "group relative overflow-hidden px-8 py-4 uppercase rounded-xl tracking-[0.1em] transition-all duration-300",
        variant === "primary"
          ? "bg-yellow text-black"
          : "border border-white/30 text-white "
      )}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
        {children}
        <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
      </span>

      <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
    </button>
  );
};

export default Button;