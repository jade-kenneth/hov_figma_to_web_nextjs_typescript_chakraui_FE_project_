import { Box, Button, Flex, Text } from "@chakra-ui/react";
import "@fontsource/heebo";
import ActiveLink from "./Link";
import { Icon } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "@chakra-ui/react";
const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 30em)");
  return (
    <Flex justify="flex-end" gap="10px" width="95%" height="10vh">
      <Box display={isMobile ? "none" : "flex"}>
        <ActiveLink href="/work">
          <Text
            height="43px"
            width="auto"
            fontSize="20px"
            lineHeight="29px"
            fontWeight="500"
            mt="27px"
          >
            Works
          </Text>
        </ActiveLink>
        <ActiveLink href="/blog">
          <Text
            height="43px"
            width="auto"
            fontSize="20px"
            lineHeight="29px"
            fontWeight="500"
            mt="27px"
          >
            Blog
          </Text>
        </ActiveLink>
        <ActiveLink href="/contact">
          <Text
            height="43px"
            width="auto"
            fontSize="20px"
            lineHeight="29px"
            fontWeight="500"
            mt="27px"
          >
            Contact
          </Text>
        </ActiveLink>
      </Box>
      <Flex align="center" justify="center">
        <Icon
          display={isMobile ? "flex" : "none"}
          as={GiHamburgerMenu}
          width="30px"
          h="30px"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
