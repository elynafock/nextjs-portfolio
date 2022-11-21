import { link } from "fs";
import Link from "next/link";
import React from "react";
import styles from "./NavBarLinks.module.css";

const NavBarLinks = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Work",
      href: "/work",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <li key={link.name} className={`list-none p-8 `}>
          <Link
            href={link.href}
            className={`hover:no-underline font-light text-7xl ${styles.navLink}`}
          >
            <span
              data-hover={link.name}
              className={`${styles.link} after:text-gray-400`}
            >
              {link.name}
            </span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavBarLinks;
