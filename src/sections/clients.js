/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Client from 'components/cards/client';

import cj from 'assets/images/clients/cj-logistics.png';
import mii from 'assets/images/clients/mii.png'
import sinwa from 'assets/images/clients/sinwa.png';
import client2 from 'assets/images/clients/client2.png';
import pertamina from 'assets/images/clients/pertamina.png';
import petrochina from 'assets/images/clients/petrochina.png';
import airasia from 'assets/images/clients/airasia.png';



const data = [
  {
    id: 1,
    icon: cj,
    title: 'CJ Logistics',
  },
  {
    id: 2,
    icon: mii,
    title: 'Mitra Integrasi Informatika',
  },
  
  {
    id: 4,
    icon: pertamina,
    title: 'Pertamina Hulu Energi',
  },
  {
    id: 5,
    icon: petrochina,
    title: 'Petro China',
  },
  {
    id: 6,
    icon: airasia,
    title: 'Air Asia',
  },
  {
    id: 7,
    icon: client2,
    title: 'Client 2',
  },
  {
    id: 3,
    icon: sinwa,
    title: 'PT Sinwa Perdana Mandiri',
  },
];

const Clients = () => {
  return (
    <Box as="section" id="clients" variant="section.clients">
      <Container sx={styles.wrap}>
        <SectionHeading
          sx={styles.heading}
          title="Our Clients"
          description=""
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
             <Image key={item.id} src={item.icon} alt={item.title} sx={styles.image} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  wrap: {
    minHeight: '55vh'
  },
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  image: {
    height: 80,
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // mb: [0, 0, 0, 7, 10]
  },
};
