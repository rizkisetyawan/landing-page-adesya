import Layout from "components/layout";
import SEO from "components/seo";
import Banner from "sections/banner";
import Clients from "sections/clients";
import Projects from "sections/projects";
import Services from "sections/services";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function IndexPage({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Startup Landing 010" />
        <Banner data={data.home} />
        <Services />
        <Projects />
        <Clients />
      </Layout>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const home = await fetch(`${URL}/api/home`);
  const homeJson = await home.json();
  return {
    props: {
      data: {
        home: homeJson[0],
      },
    },
  };
};
