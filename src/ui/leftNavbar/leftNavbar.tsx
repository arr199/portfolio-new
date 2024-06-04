import Link from 'next/link';
import { NavLinkProps } from '../../../type';

export default function LeftNavbar(): JSX.Element {
  return (
    <div className=" fixed border-r w-52 h-[100vh]">
      {/*  MAIN LINKS */}
      <section className="gap-2 flex  flex-col  [&>a]:text-[20px] border-b p-6">
        <MainLink href="/">Home</MainLink>
        <MainLink href="about">About</MainLink>
        <MainLink href="#">Projects</MainLink>
        <MainLink href="#">Experience</MainLink>
        <MainLink href="#">CV</MainLink>
      </section>
      <section className="gap-2 flex flex-col [&>a]:text-[15px] border-b p-6">
        <h4 className=" text-[13px] text-[#A0A5AC] tracking-[.2em] ">PROJECTS</h4>
        <ContactLink href="#">Web</ContactLink>
        <ContactLink href="#">Mobile</ContactLink>
      </section>

      {/* CONTACT LINKS */}
      <section className="gap-2 flex flex-col [&>a]:text-[15px] border-b p-6">
        <h4 className=" text-[13px] text-[#A0A5AC] tracking-[.2em] ">CONTACT</h4>
        <ContactLink href="#">Mail</ContactLink>
        <ContactLink href="#">Twitter</ContactLink>
        <ContactLink href="#">Linkedin</ContactLink>
        <ContactLink href="#">read.cv</ContactLink>
      </section>
    </div>
  );
}

export function MainLink({ href, children, ...rest }: NavLinkProps) {
  return (
    <Link className="hover:opacity-60 font-medium text-[#3b3d41]" href={href ?? '#'} {...rest}>
      {children}
    </Link>
  );
}

export function ContactLink({ href, children, ...rest }: NavLinkProps) {
  return (
    <Link className="hover:opacity-60 font-medium text-[#3b3d41]" href={href ?? '#'} {...rest}>
      {children}
    </Link>
  );
}
