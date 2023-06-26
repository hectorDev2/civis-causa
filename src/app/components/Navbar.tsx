"use client";
import Logo from "../../../public/images/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  {
    href: "/",
    title: "El movimiento",
  },
  {
    href: "/nosotros",
    title: "Quienes somos",
  },
  {
    href: "/principios",
    title: "Principios",
  },
  {
    href: "/antecedentes",
    title: "Antecedentes",
  },

  {
    href: "/contribuye",
    title: "Contribuye",
  },
  {
    href: "/contacto",
    title: "Contactanos",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  console.log(pathname, "pathss");

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="bg-white">
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <FaRegWindowClose />
          </div>
          <ul className="mobile-navbar__links">
            {routes.map(({ href, title }) => (
              <li
                className={`${
                  href === pathname ? "text-[#E0120A]" : "text-white"
                } hover:text-[#ff0336] cursor-pointer `}
                key={title}
              >
                <Link onClick={openNav} href={href}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* desktop */}

        <div
          style={{
            background: "white",
            position: "fixed",
            zIndex: "9",
          }}
          className="navbar p-[10px]  md:p-[1rem 2rem]"
        >
          <div className="max-w-[1080px] m-[auto] flex justify-between items-center">
            <div className="w-[100%] md:w-[14.5rem]">
              <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                <Image
                  src="https://markifica.com/dante/wp-content/uploads/2023/03/civis-causa-logo-verde.png"
                  alt="logo-img"
                  width={144}
                  height={63}
                />
              </Link>
            </div>
            <ul className="flex gap-2 justify-evenly navbar__links">
              {routes.map(({ title, href }) => (
                <motion.li
                  key={title}
                  className={` ${
                    href === pathname ? "text-[#E0120A]" : "text-white"
                  } hover:text-[#ff0336] cursor-pointer `}
                >
                  <Link
                    className={`${href == pathname && "text-[white]"}`}
                    href={href}
                  >
                    <p className="text-[14px]">{title}</p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <CgMenuRightAlt />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
