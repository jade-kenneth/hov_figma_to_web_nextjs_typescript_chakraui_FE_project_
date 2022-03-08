import { Box, Center, Text } from "@chakra-ui/react";
import AllWorks from "components/FeaturedWorks/AllWorks";
import Layout from "components/layouts/Layout";
import React from "react";

const Work = () => {
  return (
    <Box w="container.lg" mx="auto" mt={{ base: "24px", lg: "90px" }}>
      <Text
        w="156px"
        h="69px"
        color="dark"
        lineHeight="60px"
        fontWeight="900"
        fontSize="44px"
        mb={25}
      >
        Works
      </Text>
      <AllWorks />
    </Box>
  );
};

export default Work;
Work.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
