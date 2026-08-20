import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./icons";

export function Button({
  href,
  children,
  variant = "primary",
  external = false
}: {
  href: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
}) {
  const cls = `button button--${variant}`;
  if (external) return <a className={cls} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a>;
  return <Link className={cls} href={href}>{children}<ArrowRight /></Link>;
}
