import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import WorkDetail1 from "public/WorkDetail1.png";
import WorkDetail2 from "public/WorkDetail2.png";
const DesignDetail = () => {
  return (
    <Box w="container.lg" mx="auto">
      <Flex direction="column">
        <Text
          w="506px"
          h="100px"
          lineHeight="49.94px"
          fontSize="34px"
          color="dark"
        >
          Designing Dashboards with usability in mind
        </Text>
        <Flex gap="10px" align="center">
          <Center
            bg="black"
            h="42px"
            w="60px"
            fontSize="18px"
            textAlign="center"
            color="white"
            borderRadius="16px"
            lineHeight="60px"
          >
            2020
          </Center>
          <Text color="light" lineHeight="29px">
            Dashboard, User Experience Design
          </Text>
        </Flex>
        <Text w="681px" h="44px" lineHeight="24px" color="dark">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Image src={WorkDetail2} alt="Work image" width="100%" height="460px" />
      </Flex>
    </Box>
  );
};

export default DesignDetail;
