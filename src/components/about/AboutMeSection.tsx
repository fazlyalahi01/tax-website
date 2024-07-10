import Image from "next/image";

import Link from "next/link";
import CallButton from "../common/CallButton";
import OutlineButton from "../ui/OutlinedButton";

const AboutMeSection = ({ fromLanding }: { fromLanding?: boolean }) => {
  return (
    <div className="bg-lite pt-8 overflow-hidden">
      <div className="container-x ">
        <div className="md:flex items-center gap-8  md:p-12">
          <div className="relative ">
            <Image
              src={"/images/profile-image.png"}
              width={800}
              height={800}
              alt="hero thumb"
              className="h-auto max-w-sm"
            />
            <CallButton />
          </div>

          <div className="space-y-6 max-w-xl pt-4 pb-6">
            <div className="text-blue-900">
              <p className="uppercase text-primary pb-4 text-2xl font-bold">
                Welcome!
              </p>
              <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1">
                Professional Approach To Financial Advisory.
              </h1>
              <p className="text-base md:pt-4 pt-2">
                Thank you for visiting our website! We are a tax preparation and
                accounting firm dedicated to assisting individuals and small
                businesses. Our services include comprehensive income tax
                preparation, accounting services, all types of insurance and
                small business consulting, all offered at competitive rates.
                With a strongclient retention record, we take pride in
                delivering high-quality services. <br />
              </p>
              {fromLanding ?? (
                <>
                  <p className="mt-2">
                    Please explore our website to discover the range of services
                    we offer and the valuable resources available. When
                    you&apos;re ready to learn more about how we can help you,
                    please don&apos;t hesit hesitate to reach out to us.
                    Additionally, we provide immigration services, offering a
                    variety of assistance on immigration matters. Zillur tax and
                    insurance INC. is licensed by IRS and specializes in
                    Accounting.
                  </p>
                </>
              )}
            </div>
            {fromLanding && (
              <div className="flex gap-4">
                <Link href="/about-us">
                  <OutlineButton>Read More →</OutlineButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
