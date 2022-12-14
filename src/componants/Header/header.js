import Nav from "./nav";
import React from "react";
import Head from "next/head";
const Header = () => {
  return (
    <>
      <Head>
        <title>Charlie Delta</title>
        <link rel="stylesheet" href="../src/styles/index.scss" />
        <link rel="icon" href="./logo.png"></link>

        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </Head>

      <Nav />
    </>
  );
};

export default Header;
