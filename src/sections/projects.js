/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/project-1.png';
import gallery2 from 'assets/images/gallery/project-2.png';
import gallery3 from 'assets/images/gallery/project-3.png';
import gallery4 from 'assets/images/gallery/project-4.png';
import gallery5 from 'assets/images/gallery/project-5.png';
import gallery6 from 'assets/images/gallery/project-6.png';
import gallery7 from 'assets/images/gallery/project-7.png';
import gallery8 from 'assets/images/gallery/project-8.png';
import gallery9 from 'assets/images/gallery/project-9.png';
import gallery10 from 'assets/images/gallery/project-10.png';
import gallery11 from 'assets/images/gallery/project-11.png';
import gallery12 from 'assets/images/gallery/project-12.png';

const data = [
  {
    id: 6,
    image: gallery6,
    title: 'Kitchen room',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Meeting corner',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Guest meeting room',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Guest rest room',
  },
  
  {
    id: 5,
    image: gallery5,
    title: 'Single working space',
  },
  {
    id: 1,
    image: gallery1,
    title: 'Front working space',
  },
];

const moreData = [
  {
    id: 7,
    image: gallery7,
    title: 'Single working space',
  },
  {
    id: 8,
    image: gallery8,
    title: 'Single working space',
  },
  {
    id: 9,
    image: gallery9,
    title: 'Single working space',
  },
  {
    id: 10,
    image: gallery10,
    title: 'Single working space',
  },
  {
    id: 11,
    image: gallery11,
    title: 'Single working space',
  },
  {
    id: 12,
    image: gallery12,
    title: 'Single working space',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Projects = () => {
  const [projects, setProjects] = React.useState(data)

  const handleButton = () => {
    if (projects.length === 6) {
      setProjects([...data, ...moreData])
    } else {
      setProjects(data)
    }
  }

  return (
    <Box id="projects" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          title="Projects"
          description="Beberapa contoh project yang sudah kami kerjakan untuk memenuhi kebutuhan para client atau customers baik dalam kebutuhan jasa, material, ataupun perdagangan umum."
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {projects?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button} onClick={handleButton}>
          {projects.length === 6 ? 'Explore More' : 'Hide'}
          
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
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
