import React from "react";
import NavLink from "./NavLink";

interface Link {
  path: string;
  title: string;
}

const MenuOverlay = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;