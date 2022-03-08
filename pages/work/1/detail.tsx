import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import WorkDetail1 from "public/WorkDetail1.png";
import WorkDetail2 from "public/WorkDetail2.png";
import WorkDetail3 from "public/WorkDetail3.png";
import Layout from "components/layouts/Layout";
const DesignDetail = () => {
  return (
    <Box
      mt={{ base: "32px", lg: "78px" }}
      width={["full", "container.lg", "container.lg", "container.lg"]}
      maxW="800px"
      mx="auto"
    >
      <Flex
        direction="column"
        mx={{ base: "auto", lg: "0" }}
        width={{ base: "95%", lg: "full" }}
      >
        <Text
          w={{ base: "full", lg: "506px" }}
          h={{ base: "auto", lg: "100px" }}
          fontSize="30px"
          color="dark"
          lineHeight="50px"
          fontWeight="bold"
        >
          Designing Dashboards with usability in mind
        </Text>
        <Flex gap="26px" align="center">
          <Center h="60px" w="42px" fontSize="18px" lineHeight="60px">
            <Flex
              borderRadius="16px"
              px={2}
              bg="primary"
              color="white"
              align="center"
              height="25px"
            >
              2021
            </Flex>
          </Center>
          <Text color="light" lineHeight="29px">
            Dashboard, User Experience Design
          </Text>
        </Flex>
        <Text
          lineHeight="24px"
          color="dark"
          w={{ base: "full", lg: "681px" }}
          h={{ base: "auto", lg: "44px" }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Box height="360px" width="100%" position="relative" mt={10}>
          <Image src={WorkDetail1} alt="Work image" layout="fill" />
        </Box>
      </Flex>
      <Flex
        direction="column"
        mx={{ base: "auto", lg: "0" }}
        width={{ base: "95%", lg: "full" }}
      >
        <Text
          w="506px"
          h="100px"
          fontSize="30px"
          color="dark"
          lineHeight="60px"
          fontWeight="500"
        >
          Heading 1
        </Text>
        <Text
          w="506px"
          h="100px"
          lineHeight="60px"
          fontSize="24px"
          color="dark"
          fontWeight="500"
        >
          Heading 2
        </Text>
        <Text
          lineHeight="24px"
          color="dark"
          w={{ base: "full", lg: "681px" }}
          h={{ base: "auto", lg: "44px" }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Box height="360px" width="100%" position="relative" mt={10}>
          <Image src={WorkDetail2} alt="Work image" layout="fill" />
        </Box>
        <Box height="360px" width="100%" position="relative" mt={10}>
          <Image src={WorkDetail3} alt="Work image" layout="fill" />
        </Box>
      </Flex>
    </Box>
  );
};

export default DesignDetail;
DesignDetail.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
