import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Work1 from "public/Work1.png";

interface EachWorksProps {
  title: string;
  category: string;
  content: string;
  year: string | number;
}

const EeachWorks: React.FC<EachWorksProps> = ({
  children,
  title,
  category,
  content,
  year,
}) => {
  return (
    <>
      <Flex
        h={{ base: "auto", lg: "180px" }}
        gap="18px"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
      >
        <Box
          w={{ base: "full", lg: "346px" }}
          h={{ base: "230px", lg: "auto" }}
          position="relative"
          minW="200px"
        >
          {children}
        </Box>
        <Flex direction="column" justify="space-between">
          <Text color="dark" fontSize="30px" lineHeight="44px" fontWeight="700">
            {title}
          </Text>
          <Flex gap="26px" align="center">
            <Center h="60px" w="42px" fontSize="18px" lineHeight="60px">
              <Flex
                borderRadius="16px"
                px={2}
                bg="dark"
                color="white"
                align="center"
                height="25px"
              >
                {year}
              </Flex>
            </Center>
            <Text color="light" lineHeight="29px">
              {category}
            </Text>
          </Flex>
          <Text
            lineHeight="23.5px"
            height="93px"
            width={{ base: "auto", lg: "594px" }}
            color="dark"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
      <hr />
    </>
  );
};

export default EeachWorks;
