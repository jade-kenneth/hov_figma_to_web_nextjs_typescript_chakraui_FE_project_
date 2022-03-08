import { Box, Text } from "@chakra-ui/react";
import Layout from "components/layouts/Layout";
import EeachPosts from "components/RecentPosts/EachPosts";
import React from "react";

const Blog = () => {
  return (
    <Box
      w={["95%", "container.lg", "container.lg", "container.lg"]}
      maxW="800px"
      mx="auto"
      mt={["24px", "90px", "90px", "90px"]}
    >
      <Text
        h="69px"
        color="dark"
        lineHeight="60px"
        fontWeight="900"
        fontSize="44px"
        w="auto"
        mb={25}
      >
        Blog
      </Text>
      <EeachPosts
        title="UI Interactions of the week"
        date="12 Feb 2019"
        topic="Express, Handlebars"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <hr />
      <EeachPosts
        title="UI Interactions of the week"
        date="12 Feb 2019"
        topic="Express, Handlebars"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <hr />
      <EeachPosts
        title="UI Interactions of the week"
        date="12 Feb 2019"
        topic="Express, Handlebars"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <hr />
    </Box>
  );
};

export default Blog;
Blog.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
