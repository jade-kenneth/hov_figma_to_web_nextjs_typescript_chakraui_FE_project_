import { Center, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Header = {
  headerTitle: string;
};
type HeaderOnly = Header & {
  navLink?: never;
  navTitle?: never;
};
type Nav = Header & {
  navLink: string;
  navTitle: string;
};
// interface ContainerHeaderProps {
//   headerTitle: string;
//   navLink?: string;
//   navTitle?: string;
// }
type ContainerHeaderProps = Nav | HeaderOnly;
const ContainerHeader: React.FC<ContainerHeaderProps> = ({
  headerTitle,
  navLink,
  navTitle,
}) => {
  return (
    <Flex align="center" justify={{ base: "center", lg: "space-between" }}>
      <Text
        color="dark"
        w="auto"
        h="60px"
        fontSize="22px"
        lineHeight="60px"
        mb={{ base: "11px", lg: "0" }}
      >
        {headerTitle}
      </Text>

      <Link href={`${navLink}`} passHref>
        <Text display={{ base: "none", lg: "flex" }} color="secondary">
          {navTitle}
        </Text>
      </Link>
    </Flex>
  );
};

export default ContainerHeader;
