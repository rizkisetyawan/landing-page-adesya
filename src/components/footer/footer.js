/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import Logo from "components/logo";
import { rgba } from "polished";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

export default function Footer({ data }) {
  const footerInfo = [
    {
      icon: <BsFillTelephoneFill size={20} />,
      value: data.phone,
    },
    {
      icon: <MdEmail size={20} />,
      value: data.email,
    },
    {
      icon: <SiGooglemaps size={30} />,
      value: data.address,
    },
  ];
  return (
    <Box as="footer" variant="layout.footer">
      <Container>
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            <Logo />
            <Text as="span">
              Copyright by {new Date().getFullYear()} CV. Adesya Tech Investment
            </Text>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            {footerInfo.map(({ icon, value }, i) => (
              <li key={i} sx={styles.wrapIcons}>
                {icon}
                <Text>{value}</Text>
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ["grid"],
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      "repeat(5, 1fr)",
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ["block", null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 0 40px",
    "@media only screen and (max-width: 400px)": {
      pb: 10,
    },
  },
  copyright: {
    display: ["flex"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    span: {
      fontSize: "14px",
      lineHeight: 1.29,
      color: rgba("#0F2137", 0.6),
      mt: ["18px", "18px", "7px"],
    },
  },
  footerNav: {
    listStyle: "none",
    margin: ["15px 0 0", "15px 0 0", "0"],
    padding: 0,
    display: ["flex"],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, "flex-start"],
    // flexDirection: 'column'
    "li + li": {
      ml: ["18px", "18px", "20px"],
      "@media only screen and (max-width: 400px)": {
        mb: "10px",
      },
    },
    a: {
      color: "textSecondary",
    },
  },
  wrapIcons: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 3,
  },
};
