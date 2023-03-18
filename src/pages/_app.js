import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import "components/modal/modal.css";
import "typeface-dm-sans";

export default function CustomApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = React.useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return <Component {...pageProps} />;
}
