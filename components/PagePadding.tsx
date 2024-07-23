import React from "react";

const PagePadding = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto py-2 px-2.5 lg:px-24">{children}</div>;
};

export default PagePadding;
