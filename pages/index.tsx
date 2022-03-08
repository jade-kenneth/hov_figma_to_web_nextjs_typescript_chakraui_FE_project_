import type { NextPage } from "next";
import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import Layout from "components/layouts/Layout";
import "@fontsource/heebo";
import ProfilePreview from "components/ProfilePreview/ProfilePreview";
import RecentPosts from "components/RecentPosts/RecentPostsContainer";
import FeatureContainer from "components/FeaturedWorks/FeatureContainer";

const Home = () => {
  return (
    <Flex gap="10px" height="auto" direction="column">
      <ProfilePreview />
      <RecentPosts />
      <FeatureContainer />
    </Flex>
  );
};

export default Home;
Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
