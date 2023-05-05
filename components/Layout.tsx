import React, { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import Head from "next/head";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <Head>
        <title>AMBI</title>
      </Head>
      {children}
    </>
  );
};
export default Layout;
