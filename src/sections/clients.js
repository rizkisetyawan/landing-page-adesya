/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import SectionHeading from "components/section-heading";
import { urlFor } from "utils/client";

const Clients = ({ data, text }) => {
  return (
    <Box as="section" id="clients" variant="section.clients">
      <Container sx={styles.wrap}>
        <SectionHeading
          sx={styles.heading}
          title={text.title}
          description={text.subTitle}
        />
        <Box sx={styles.features}>
          {data
            ?.sort((a, b) => a.order - b.order)
            .map((item) => (
              <Image
                key={item._id}
                src={urlFor(item.image)}
                alt={item.title}
                sx={styles.image}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  wrap: {
    minHeight: "55vh",
  },
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  image: {
    height: 80,
  },
  features: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    // mb: [0, 0, 0, 7, 10]
  },
};
