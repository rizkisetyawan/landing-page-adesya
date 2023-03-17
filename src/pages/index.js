import Layout from 'components/layout';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import Projects from 'sections/projects';
import Services from 'sections/services';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Startup Landing 010" />
        <Banner />
        <Services />
        <Projects />
        <Clients />
      </Layout>
    </ThemeProvider>
  );
}
