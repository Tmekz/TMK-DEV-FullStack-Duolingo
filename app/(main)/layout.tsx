type Props = {
  children: React.ReactNode;
};

import { MobileHeader } from "@/components/mobile-header";
import Siderbar from "@/components/sidebar";

import React from "react";

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      {/* on peut ajouter className à la sidebar grace à la fonction cn dans lib > utils.ts */}
      <Siderbar className={"hidden lg:flex"} />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0 ">
        <div className="max-w-[1056px] mx-auto pt-6 h-full"> {children}</div>
      </main>
    </>
  );
};

export default MainLayout;
