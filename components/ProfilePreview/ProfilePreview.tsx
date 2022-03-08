import React from "react";
import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import Profile from "public/Ellipse 1.png";
const ProfilePreview = () => {
  return (
    <Flex
      width={{ base: "85%", lg: "container.lg" }}
      mx="auto"
      h="auto"
      maxW="800px"
      mb="71px"
      mt={{ base: "33px", lg: "140px" }}
      align={["center", "flex-start", "flex-start", "flex-start"]}
      direction={["column-reverse", "row", "row", "row"]}
      justify="flex-start"
    >
      <Flex
        direction="column"
        gap="20px"
        justify="space-between"
        align={{ base: "center", lg: "flex-start" }}
        height="100%"
        width="100%"
      >
        <Text
          fontWeight="700"
          w={{ base: "100%", lg: "465px" }}
          height="auto"
          fontSize="44px"
          color="dark"
          lineHeight="60px"
          textAlign={{ base: "center", lg: "left" }}
          mb={["21px", "0", "0", "0"]}
        >
          Hi, I am John, Creative Technologists
        </Text>
        <Text
          fontSize="16px"
          lineHeight="24px"
          h={{ base: "auto", lg: "66px" }}
          w={{ base: "100%", lg: "497px" }}
          textAlign={{ base: "center", lg: "left" }}
          mb={{ base: "27px", lg: "0" }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.{" "}
        </Text>
        <Button background="primary" color="white" h="47px" w="208px">
          Download Resume
        </Button>
      </Flex>
      <Spacer />
      <Box
        width="230px"
        height="230px"
        borderRadius="2px"
        mb={{ base: "43.4px", lg: "0" }}
      >
        <Image src={Profile} alt="pofile" />
      </Box>
    </Flex>
  );
};

export default ProfilePreview;
