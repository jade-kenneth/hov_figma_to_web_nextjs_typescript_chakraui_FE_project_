import { Box, Flex, Grid } from "@chakra-ui/react";

import Header from "components/Header";

import React from "react";

import Footer from "components/Footer";

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid templateRows="auto auto 10vh" gap="10px">
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};

export default Layout;
