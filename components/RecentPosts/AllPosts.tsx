import { Box, Center, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import EachPosts from "./EachPosts";

const Posts = () => {
  return (
    <Flex
      gap="20px"
      height={{ base: "auto", lg: "80%" }}
      mb={3}
      direction={{ base: "column", lg: "row" }}
    >
      <Box
        px="23px"
        bg="white"
        w="95%"
        mx="auto"
        pt="24px"
        pb="7px"
        height="auto"
      >
        <EachPosts
          date="12 Feb 2020"
          topic="Design, Pattern"
          title="Making a design system from scratch "
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </Box>
      <Box
        px="23px"
        bg="white"
        mx="auto"
        w="95%"
        pt="24px"
        pb="7px"
        height="auto"
      >
        <EachPosts
          date="12 Feb 2020"
          topic="Figma, Icon Design"
          title="Creating pixel perfect icons in Figma "
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </Box>
    </Flex>
  );
};

export default Posts;
