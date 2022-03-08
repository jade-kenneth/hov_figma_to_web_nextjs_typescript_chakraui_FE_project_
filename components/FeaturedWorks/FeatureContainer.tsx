import { Flex, Spacer, Text } from "@chakra-ui/react";
import ContainerHeader from "components/ContainerHeader";
import Link from "next/link";
import React from "react";
import AllWorks from "./AllWorks";

const FeatureContainer = () => {
  return (
    <Flex
      w={{ base: "95%", lg: "container.lg" }}
      mx="auto"
      maxW="800px"
      height="auto"
      direction="column"
    >
      <ContainerHeader headerTitle="Featured Works" />
      <AllWorks />
    </Flex>
  );
};

export default FeatureContainer;
