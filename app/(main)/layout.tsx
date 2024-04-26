type Props = {
  children: React.ReactNode;
};

import Siderbar from "@/components/sidebar";
import React from "react";

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Siderbar className={"hidden lg:flex"} />
      <main className="pl-[256px] h-full ">
        <div className="bg-red-400 h-full"> {children}</div>
      </main>
    </>
  );
};

export default MainLayout;
