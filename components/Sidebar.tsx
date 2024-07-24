import React from "react";
import Logo from "@/elements/Logo";
import Navigator from "@/elements/Navigator";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-full">
      <nav className="hidden lg:block w-60 border-r-[1px] border-neutral-600">
        <div className="p-[16px]">
          <Logo onClickClose={() => {}} />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
