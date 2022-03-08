import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Flex align="center" height="182px" justify="center">
      <Flex gap="5px" direction="column">
        <Flex width="100%" justify="space-around">
          <Icon as={BsFacebook} w="30px" h="30px" />
          <Icon as={BsInstagram} w="30px" h="30px" />
          <Icon as={BsTwitter} w="30px" h="30px" />
          <Icon as={BsLinkedin} w="30px" h="30px" />
        </Flex>
        <Text fontSize="14px" color="dark" lineHeight="20.56px">
          Copyright ©2020 All rights reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
