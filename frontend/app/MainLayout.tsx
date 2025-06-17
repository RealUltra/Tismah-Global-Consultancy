import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

const MainLayout = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow">{props.children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
