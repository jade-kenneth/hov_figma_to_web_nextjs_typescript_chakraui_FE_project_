import { Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface EachPostProps {
  title: string;
  content: string;
  date: string;
  topic: string;
}

const EeachPosts: React.FC<EachPostProps> = ({
  title,
  date,
  topic,
  content,
}) => {
  return (
    <Flex height="auto" direction="column" w="full" bg="#FFFFFF" align="left">
      <Text
        color="dark"
        fontWeight="700"
        //set auto to break word
        height="auto"
        fontSize={{ base: "32px", lg: "26px" }}
        mb="17px"
      >
        {title}
      </Text>
      <Stack
        direction={{ base: "column", lg: "row" }}
        h={{ base: "auto", lg: "25px" }}
        mb="11px"
      >
        <Text color="dark">{date}</Text>
        <Divider orientation="vertical" borderColor="dark" />
        <Text color="dark">{topic}</Text>
      </Stack>
      <Text
        color="dark"
        lineHeight="23.5px"
        height={{ base: "auto", lg: "117px" }}
        width={{ base: "full", lg: "none" }}
        mb={{ base: "24px", lg: "0" }}
      >
        {content}
      </Text>
    </Flex>
  );
};

export default EeachPosts;
