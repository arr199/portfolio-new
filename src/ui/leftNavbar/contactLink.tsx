import Link from "next/link";
import { NavLinkProps } from "../../../type";

export function ContactLink({ href, children, ...rest }: NavLinkProps) {
    return (
      <Link className="hover:opacity-60 font-medium text-[#3b3d41]" href={href ?? '#'} {...rest}>
        {children}
      </Link>
    );
  }