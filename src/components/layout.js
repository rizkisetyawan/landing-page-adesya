/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children, data }) {
  return (
    <React.Fragment>
      <Header />
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer data={data} />
    </React.Fragment>
  );
}
