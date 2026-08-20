import { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

export function PageShell({ children }: { children?: ReactNode }) {
  return <><Nav /><main>{children}</main><Footer /></>;
}
