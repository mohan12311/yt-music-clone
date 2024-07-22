"use client";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "@/elements/IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {
    alert("hi");
  };

  return (
    <section className=" flex flex-row items-center gap-4">
      <IconButton onClick={onClickMenu} icon={<RxHamburgerMenu size={24} />} />
      <div className=" cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={80} height={24} src={"/main-logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;
