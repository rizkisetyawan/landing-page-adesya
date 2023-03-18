import Layout from "components/layout";
import SEO from "components/seo";
import Banner from "sections/banner";
import Clients from "sections/clients";
import Projects from "sections/projects";
import Services from "sections/services";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

const URL = process.env.NEXT_PUBLIC_BASE_URL;
const find = (data, number) => data.find((row) => row.order === number);

export default function IndexPage({ data }) {
  const { home, sections, services, projects, clients, contacts } = data;
  return (
    <ThemeProvider theme={theme}>
      <Layout data={contacts}>
        <SEO title="Adesya Tech Investment" />
        <Banner data={home} />
        <Services data={services} text={find(sections, 1)} />
        <Projects data={projects} text={find(sections, 2)} />
        <Clients data={clients} text={find(sections, 3)} />
      </Layout>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(`${URL}/api/data`);
  const dataJson = await data.json();
  return {
    props: {
      data: dataJson,
    },
  };
};
