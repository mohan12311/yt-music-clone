"use client";

import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "@/elements/Logo";
import Navigator from "@/elements/Navigator";
import { cn } from "@/lib/utils";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-60 h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer={isOpen} onClickClose={closeDrawer} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(true);
  const headRef: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      console.log(">scrollValue", scrollValue);
      setIsScrolled(scrollValue !== 0);
    };

    const currentRef = headRef.current;
    if ("addEventListener" in currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if ("removeEventListener" in currentRef) {
        currentRef?.removeEventListener("scroll", handleScroll);
      }
    };
  });

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      {/*bgSection*/}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
          />
        </div>
        <div className="absolute h-[400px] w-full top-0 bg-black opacity-40 "></div>
        <div className="absolute h-[400px] w-full top-0 bg-gradient-to-t from-black "></div>
      </section>
      {/*searchSection*/}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="h-16 flex flex-row justify-between items-center">
            <article className="h-11 min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl gap-4 px-4 border border-neutral-500 group">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent group-focus: border-0 outline-0"
                type="text"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row items-center gap-4">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
