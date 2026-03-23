import clsx from "clsx";
import { ReactNode } from "react";

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        "btn ",
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        variant === "tertiary" && "btn-tertiary",
        size === "sm" && "text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2",
        size === "md" && "",
        size === "lg" && "text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4",
        fullWidth && "w-full",
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
