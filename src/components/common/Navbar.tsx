"use client";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isOpenNav, setIsOpenNav] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`shadow-sm fixed top-0 right-0 w-full z-50 duration-500 ${
        isScrolled ? "bg-primary" : "bg-white"
      }`}
    >
      <nav
        className={`container-x lg:flex justify-center items-center py-8 transition-all ease-in-out duration-300`}
      >
        <div className="flex justify-between items-center gap-3 px-3 lg:px-0">
          <Link href={"/"} className="flex-shrink-0">
            <h1
              className={`uppercase font-extrabold border-2 px-2 rounded  ${
                isScrolled
                  ? "text-white md:text-xl sm:text-xl text-xs duration-500  border-white"
                  : "text-title md:text-2xl sm:text-lg text-xs duration-500  border-title"
              }`}
            >
              Zillur Tax, Accounting & Insurance Inc.
            </h1>
          </Link>

          <span className="block lg:hidden">
            {isOpenNav ? (
              <RxCross2
                onClick={() => setIsOpenNav(false)}
                color={isScrolled ? "#fff" : "#1D263A"}
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => setIsOpenNav(true)}
                color={isScrolled ? "#fff" : "#000"}
              />
            )}
          </span>
        </div>
        <ul
          className={`flex flex-col lg:flex-row lg:gap-6 gap-2 py-8 lg:py-0 lg:opacity-100 z-[200] ${
            isOpenNav ? "opacity-100 " : "opacity-0 "
          } lg:items-center lg:justify-end lg:static absolute left-0 px-7 lg:px-0 transition-all ease-in-out duration-500  lg:bg-opacity-0 w-full z-auto ${
            isScrolled
              ? "bg-primary lg:bg-transparent"
              : "bg-white lg:bg-transparent"
          }`}
        >
          {siteConfig.navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setIsOpenNav(false)}
              className={`cursor-pointer  hover:text-secondary font-semibold duration-500 ${
                pathname === item.href ? "text-secondary " : ""
              } ${isScrolled ? "text-white " : "text-title"}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
