import { Flex, Spacer, Text } from "@chakra-ui/react";
import ContainerHeader from "components/ContainerHeader";
import Link from "next/link";
import React from "react";
import Posts from "./AllPosts";

const RecentPosts = () => {
  return (
    <Flex height="auto" w="full" bg="#EDF7FA">
      <Flex
        direction="column"
        justify="space-around"
        maxW="800px"
        width={{ base: "full", lg: "container.lg" }}
        mx={{ base: "0", lg: "auto" }}
      >
        <ContainerHeader
          headerTitle="Recent Posts"
          navLink="#"
          navTitle="View All"
        />

        <Posts />
      </Flex>
    </Flex>
  );
};

export default RecentPosts;
