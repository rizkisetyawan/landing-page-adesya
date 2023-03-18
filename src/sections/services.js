/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";

const Services = ({ data, text }) => {
  return (
    <Box as="section" id="services" variant="section.services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title={text.title}
          description={text.subTitle}
        />
        <Box sx={styles.features}>
          {data
            ?.sort((a, b) => a.order - b.order)
            .map((item) => (
              <Service key={item._id} data={item} />
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ["60px 24px", "60px 32px", 60, 40, 30, 60],
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
