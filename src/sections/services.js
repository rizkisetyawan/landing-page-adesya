/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";

import ac from "assets/images/icons/reshot-ac.svg";
import elictricity from "assets/images/icons/reshot-elictricity.svg";
import cctv from "assets/images/icons/reshot-cctv.svg";
import safety from "assets/images/icons/reshot-safety.svg";
import atk from "assets/images/icons/reshot-atk.svg";
import repair from "assets/images/icons/reshot-repair.svg";
import other from "assets/images/icons/reshot-other.svg";

const data = [
  {
    id: 1,
    icon: ac,
    title: "AC (Air Conditioning)",
    description: "Service, Instalasi dan Pengadaan",
  },
  {
    id: 2,
    icon: elictricity,
    title: "Elictricity",
    description: "Instalasi dan Peremajaan Jaringan Listrik",
  },
  {
    id: 3,
    icon: cctv,
    title: "CCTV",
    description: "Pengadaan dan Instalasi CCTV",
  },

  {
    id: 5,
    icon: atk,
    title: "Alat Tulis Kantor",
    description: `Buku, Pulpen, Pensil, Penggaris dll`,
  },
  {
    id: 6,
    icon: repair,
    title: "Repair",
    description: `Office Maintenance/Repair`,
  },
  {
    id: 4,
    icon: safety,
    title: "Safety",
    description: `Alat Pelindung Diri (APD) & Perlengkapan Kesehatan dan Keselamatan Kerja dan Lingkungan Hidup (K3LH)`,
  },
  {
    id: 7,
    icon: other,
    title: "DLL",
    description: `Jasa dan Perdagangan Umum Lainnya`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Services"
          description="Melayani jasa service, pengadaan, perdagangan umum dan lainnya yang
          berhubungan dengan kebutuhan/keperluan kantor"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Service key={item.id} data={item} />
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
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    // display: ['grid', 'grid'],
    // gridTemplateColumns: [
    //   'repeat(1, 1fr)',
    //   'repeat(1, 1fr)',
    //   'repeat(1, 1fr)',
    //   'repeat(2, 1fr)',
    //   'repeat(4, 1fr)',
    // ],
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
