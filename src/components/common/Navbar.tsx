'use client'
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
    const [isOpenNav, setIsOpenNav] = React.useState<boolean>(false);
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

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
            <nav className={`container-x md:flex justify-center items-center p-8 transition-all ease-in-out duration-300`}>
                <div className="flex justify-between items-center">
                    {
                        isScrolled ?
                            <Link href={"/"}>
                                <Image src={"/images/logo.png"} height={100} width={220} alt="logo" />
                            </Link> :
                            <Link href={"/"}>
                                <Image src={"/images/logo_dark.png"} height={100} width={220} alt="logo" />
                            </Link>
                    }

                    <span className="block md:hidden">
                        {isOpenNav ? (
                            <RxCross2 onClick={() => setIsOpenNav(false)} color={isScrolled ? "#fff" : "#000"} />
                        ) : (
                            <RxHamburgerMenu onClick={() => setIsOpenNav(true)} color={isScrolled ? "#fff" : "#000"} />
                        )}
                    </span>
                </div>
                <ul className={`flex flex-col md:flex-row md:gap-6 gap-2 py-8 md:py-0 md:opacity-100 z-[200] ${isOpenNav ? "opacity-100 " : "opacity-0 "
                    } md:items-center md:justify-end md:static absolute left-0 px-7 md:px-0 transition-all ease-in-out duration-500  md:bg-opacity-0 w-full z-auto ${isScrolled ? "bg-primary md:bg-transparent" : "bg-white md:bg-transparent"}`}>
                    {siteConfig.navItems.map((item, index) => (
                        <li key={index} className={`cursor-pointer ${isScrolled ? "text-white " : "text-black"} hover:text-secondary duration-500`}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
