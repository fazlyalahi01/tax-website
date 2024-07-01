'use client'
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
    const [isOpenNav, setIsOpenNav] = React.useState<boolean>(false);
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

    const pathname = usePathname();
    console.log(pathname);     

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
        <div className={`shadow-sm fixed top-0 right-0 w-full z-50 duration-500 ${isScrolled ? "bg-primary" : "bg-white"}`}>
            <nav className={`container-x md:flex justify-center items-center py-8 transition-all ease-in-out duration-300`}>
                <div className="flex justify-between items-cente">
                    <Link href={"/"} className="flex-shrink-0">
                        <h1 className={`uppercase font-extrabold border-2 px-2 rounded  ${isScrolled ? "text-white md:text-xl duration-500  border-white" : "text-title md:text-2xl text-xl duration-500  border-title"}`}>Zillur Tax & Insurance </h1>
                    </Link>


                    <span className="block md:hidden">
                        {isOpenNav ? (
                            <RxCross2 onClick={() => setIsOpenNav(false)} color={isScrolled ? "#fff" : "#1D263A"} />
                        ) : (
                            <RxHamburgerMenu onClick={() => setIsOpenNav(true)} color={isScrolled ? "#fff" : "#000"} />
                        )}
                    </span>
                </div>
                <ul className={`flex flex-col md:flex-row md:gap-6 gap-2 py-8 md:py-0 md:opacity-100 z-[200] ${isOpenNav ? "opacity-100 " : "opacity-0 "
                    } md:items-center md:justify-end md:static absolute left-0 px-7 md:px-0 transition-all ease-in-out duration-500  md:bg-opacity-0 w-full z-auto ${isScrolled ? "bg-primary md:bg-transparent" : "bg-white md:bg-transparent"}`}>
                    {siteConfig.navItems.map((item, index) => (
                        <li key={index} className={`cursor-pointer  hover:text-secondary font-semibold duration-500 ${pathname === item.href ? "text-secondary " : ""} ${isScrolled ? "text-white " : "text-title"}`}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
