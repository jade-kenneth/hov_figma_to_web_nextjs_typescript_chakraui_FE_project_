import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { createBreakpoints } from "@chakra-ui/theme-tools";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      dark: {
        default: "#21243D",
      },
      light: {
        default: "#8695A4",
      },

      primary: "#FF6464",

      secondary: "#00A8CC",
    },
  },
  sizes: {
    full: "100%",
    lg: "90%",
    container: {
      lg: "70%",
    },
  },
  breakpoints,
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
