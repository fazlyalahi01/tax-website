import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";

const CallButton = () => {
  return (
    <Link
      href="tel:+6463223254"
      className="absolute bottom-0 right-0 bg-gray-600 p-4  shadow-lg  rounded-full m-4"
    >
      <FaPhoneVolume
        className="md:text-xl text-xl grow-squeeze"
        color="white"
      />
    </Link>
  );
};

export default CallButton;
