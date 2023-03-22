/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";
import { urlFor } from "utils/client";

const accordionData = [
  {
    isExpanded: false,
    title: "How much does it cost to be a credit card merchant?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How can I open a merchant account?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How long does the application take?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Can I make payment outside of Hong Kong?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How do I get the payment complete?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
];

const Projects = ({ data, text }) => {
  const sortData = data
    .sort((a, b) => a.order - b.order)
    .map((row) => ({
      isExpanded: false,
      title: row.title,
      contents: (
        <div sx={styles.wrapImage}>
          {row.images.map((image) => (
            <Image key={image.asset._ref} src={urlFor(image)} alt={row.title} />
          ))}
        </div>
      ),
    }));

  return (
    <Box id="projects" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          title={text.title}
          description={text.subTitle}
        />
        <Accordion items={sortData} />
      </Container>
    </Box>
  );
};

export default Projects;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  wrapImage: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 16,
    img: {
      maxWidth: "400px",
      borderRadius: "4px",
    },
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: "100%",
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
    },
    ":hover": {
      svg: {
        ml: "5px",
      },
    },
  },
};
