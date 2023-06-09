/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from "theme-ui";
import { urlFor } from "utils/client";

const Service = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box sx={styles.boxIcon}>
        <figure>
          <Image src={urlFor(data.image)} alt={data?.title} />
        </figure>
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.subTitle}</Text>
      </Box>
    </Box>
  );
};

export default Service;

const styles = {
  boxIcon: {
    display: "flex",
    justifyContent: ["center", "center", "center", "center", "flex-start"],
  },
  feature: {
    textAlign: ["center", "center", "center", "center", "left"],
    // maxWidth: [230, 230, 230, 230, 'none'],
    width: [150, 180, 230],
    // margin: '0 auto',
    display: "flex",
    flexDirection: "column",
    gap: [16, 18, 24],
    figure: {
      backgroundColor: "white",
      boxShadow: "0px 8px 24px rgba(53, 95, 158, 0.1)",
      height: ["60px", "60px", "90px"],
      // margin: [
      //   '0 auto 30px',
      //   '0 auto 30px',
      //   '0 auto 30px',
      //   '0 auto 30px',
      //   '0 0 40px',
      // ],
      width: ["60px", "60px", "90px"],

      borderRadius: "50%",
      margin: 0,
    },
    h4: {
      fontSize: ["16px", "18px"],
      lineHeight: 1.28,
      color: "heading",
      marginBottom: ["12px", "12px", "16px"],
    },
    p: {
      fontSize: [14, 16],
      lineHeight: [1.6, 1.6, 1.6, 1.88],
      color: "text",
    },
  },
};
