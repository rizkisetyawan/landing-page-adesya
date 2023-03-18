/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";

import Masonry from "react-masonry-component";
import SectionHeading from "components/section-heading";
import GalleryCard from "components/cards/gallery-card";

const masonryOptions = {
  transitionDuration: 0,
};

const Projects = ({ data, text }) => {
  const [projects, setProjects] = React.useState(data.slice(0, 6));

  const handleButton = () => {
    if (projects.length === 6) {
      setProjects(data);
    } else {
      setProjects(data.slice(0, 6));
    }
  };

  return (
    <Box id="projects" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          title={text.title}
          description={text.subTitle}
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {projects
            ?.sort((a, b) => a.order - b.order)
            .map((item) => (
              <GalleryCard key={item._id} item={item} />
            ))}
        </Box>

        <Button variant="muted" sx={styles.button} onClick={handleButton}>
          {projects.length === 6 ? "Explore More" : "Hide"}
        </Button>
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
  galleryWrapper: {
    mx: "-15px",
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
