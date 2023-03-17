/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import banner from 'assets/images/banner2.png';

const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Kontraktor Jasa dan Perdagangan
            </Heading>
            <Text as="p" sx={styles.text}>
              Membantu anda dalam hal pekerjaan yang berhubungan segala jenis keperluan atau kebutuhan perkantoran.
              Kami memiliki tenaga ahli yang terampil dan sudah berpengalaman untuk mendapatkan hasil yang terbaik.
            </Text>
            <MenuLink
              to='services'
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="nav-item"
              activeClass="active"
            >
              <Button variant="primary" sx={styles.button}>
                Explore Now
              </Button>
            </MenuLink>
             
            {/* <Box sx={styles.clients}>
              <Image src={paypal} alt="paypal" />
              <Image src={google} alt="google" />
              <Image src={dropbox} alt="dropbox" />
            </Box> */}
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '52px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      width: '100%',
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
      borderRadius: '18px',
      maxHeight: ['350px', '500px'],
      objectFit: 'cover'
    },
  },
};
