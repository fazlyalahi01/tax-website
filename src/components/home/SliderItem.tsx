import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

type SliderItemProps = {
  title: string;
  heading: string;
  description: string;
};

const SliderItem: React.FC<SliderItemProps> = ({
  title,
  heading,
  description,
}) => {
  return (
    <>
      <div className="bg-black/50 absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="container z-20 text-white ">
        <p className="uppercase font-semibold pb-4 text-[14px] sm:text-base">
          ✵ {title}
        </p>
        <h1 className="md:text-7xl sm:text-3xl text-2xl leading-tight font-extrabold border-l-4 pl-4 border-gray-300 py-2">
          {heading}
        </h1>
        <p className="text-base pt-4 max-w-2xl h-[130px] md:h-[100px]">
          {description}
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "hover:bg-white hover:text-primary transition duration-500",
              })
            )}
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </>
  );
};

export default SliderItem;
