"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { EXPLORE, HOME, LIBRARY } from "@/lib/routers";
import { GoHome } from "react-icons/go";
import { FiCompass, FiMusic, FiPlus } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import PlayListNav from "@/elements/PlaylistNav";
import { dummyPlaylistArray } from "@/lib/dummyData";

type navigatorButton = {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  href: string;
};

const Navigator = () => {
  const pathname = usePathname();
  const routes: navigatorButton[] = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === HOME,
        href: HOME,
      },
      {
        icon: <FiCompass size={24} />,
        label: "둘러보기",
        isActive: pathname === EXPLORE,
        href: EXPLORE,
      },
      {
        icon: <FiMusic size={24} />,
        label: "보관함",
        isActive: pathname === LIBRARY,
        href: LIBRARY,
      },
    ];
  }, [pathname]);

  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route) => (
          <div key={`navigator-${route.label}`}>
            <Link href={route.href}>
              <div
                className={cn(
                  "text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2",
                  route.isActive && "bg-neutral-800",
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700"></div>
      </section>
      <section className="px-6">
        <div className="hover:bg-neutral-700 cursor-pointer flex flex-row items-center bg-neutral-800 my-6 rounded-3xl p-2 justify-center font-[200] gap-2">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
      <section>
        <ul>
          {dummyPlaylistArray.map((pl) => {
            return <PlayListNav key={`playlist-${pl}`} playlist={pl} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Navigator;
