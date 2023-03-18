/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo.png";
import logoWhite from "assets/images/logo.png";

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image
        src={isWhite ? logoWhite : logo}
        alt="CV. ADESYA TECH INVESTMENT"
      />
    </Link>
  );
}
