import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../utils/logo-tiktok.png";
const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <div>
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="tiktok-clone"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
