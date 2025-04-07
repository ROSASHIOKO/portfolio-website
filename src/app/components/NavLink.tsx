
import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href} scroll={true}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
// Compare this snippet from src/app/components/Navbar.tsx:
//   <li key={index}>
//     <NavLink href={link.path} title={link.title} />
//   </li>    