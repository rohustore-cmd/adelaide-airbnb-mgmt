import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

const variantClasses = {
  primary:
    "bg-brand-navy text-white hover:bg-opacity-90 border border-brand-navy",
  secondary:
    "bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white border border-brand-navy",
  gold: "bg-brand-gold text-white hover:bg-opacity-90 border border-brand-gold",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...rest
}: Props) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
