import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Work1 from "public/Work1.png";
import Work2 from "public/Work2.png";
import Work3 from "public/Work3.png";
import Work4 from "public/Work4.png";
import Work5 from "public/Work5.png";
import EeachWorks from "./EeachWorks";
import Link from "next/link";
const AllWorks = () => {
  return (
    <Flex direction="column" gap="15px">
      <EeachWorks
        title="Designing Dashboards"
        year={2020}
        category="Dashboard"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      >
        <Image src={Work1} alt="work1" layout="fill" />
      </EeachWorks>

      <EeachWorks
        title="Vibrant Portraits of 2020"
        year={2018}
        category="Illustration"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      >
        <Image src={Work2} alt="work1" layout="fill" />
      </EeachWorks>
      <EeachWorks
        title="36 Days of Malayalam type"
        year={2018}
        category="Typography"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      >
        <Image src={Work3} alt="work1" layout="fill" />
      </EeachWorks>
      <EeachWorks
        title="Components"
        year={2018}
        category="Component, Design"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      >
        <Image src={Work4} alt="work1" layout="fill" />
      </EeachWorks>
      <EeachWorks
        title="Designing Landing pages"
        year={2020}
        category="Website"
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      >
        <Image src={Work5} alt="work1" layout="fill" />
      </EeachWorks>
    </Flex>
  );
};

export default AllWorks;
