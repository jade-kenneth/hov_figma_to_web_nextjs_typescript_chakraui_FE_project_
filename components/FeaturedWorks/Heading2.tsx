import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Heading2Props {
  year: number;
  category: string;
}

const Heading2: React.FC<Heading2Props> = ({ year, category }) => {
  return (
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
        {year}
      </Center>
      <Text color="light" lineHeight="29px">
        {category}
      </Text>
      ;
    </Flex>
  );
};

export default Heading2;
