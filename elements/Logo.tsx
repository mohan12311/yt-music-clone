"use client";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "@/elements/IconButton";
import { useLayoutEffect, useMemo, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type LogoProps = {
  isInDrawer?: boolean;
  onClickClose: () => void;
};

const Logo = ({
  isInDrawer = false,
  onClickClose = (): void => {},
}: LogoProps) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {};

  type Icon = {
    element: JSX.Element;
    callback: () => void;
  };
  const iconMap: { hamburger: Icon; close: Icon } = useMemo(() => {
    return {
      hamburger: {
        element: <RxHamburgerMenu size={24} />,
        callback: onClickMenu,
      },
      close: {
        element: <IoCloseOutline size={30} />,
        callback: onClickClose,
      },
    };
  }, [onClickClose]);

  const [currentIcon, setCurrentIcon] = useState("hamburger");

  useLayoutEffect(() => {
    const state = isInDrawer ? "close" : "hamburger";
    setCurrentIcon(() => state);
  }, [isInDrawer]);

  return (
    <section className=" flex flex-row items-center gap-4">
      <IconButton
        icon={iconMap[currentIcon].element}
        onClick={iconMap[currentIcon].callback}
      />
      <div className=" cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={80} height={24} src={"/main-logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;
