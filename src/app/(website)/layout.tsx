import React from "react";
import { LandingpageNavbar } from "./_components/navbar";
type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col py-10 xl:px-0 container">
      <LandingpageNavbar />

      {children}
    </div>
  );
};

export default layout;
