"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 sticky top-0 bg-black z-50">
      <Link href={"/"}>Narsi Bhati</Link>
      <nav className="flex items-center justify-center gap-4">
        {navItems.map((item) => (
          <motion.div
            key={item.href}
            className="text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={item.href}>{item.label}</Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
