import { Box } from "@chakra-ui/react";
import EeachPosts from "components/RecentPosts/EachPosts";
import React from "react";

const EachBlog = () => {
  return (
    <Box>
      <EeachPosts
        title="UI Interactions of the week"
        date="12 Feb 2019"
        topic="Express, Handlebars"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <EeachPosts
        title="UI Interactions of the week"
        date="12 Feb 2019"
        topic="Express, Handlebars"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <EeachPosts
        title="UI Interactions of the week"
        date="12 Feb 2019"
        topic="Express, Handlebars"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
    </Box>
  );
};

export default EachBlog;
