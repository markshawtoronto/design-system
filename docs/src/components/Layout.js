import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Box, Flex, NDSProvider,
} from "@nulogy/components";
import { Helmet } from "react-helmet";
import { Navigation } from "./Nav";
import theme from "../../../components/src/theme";

import HighlightStyles from "./HighlightStyles";

const Layout = ({ children }) => (
  <NDSProvider theme={ theme }>
    <Box>
      <Helmet titleTemplate="%s | Nulogy Design System">
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Welcome</title>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono" rel="stylesheet" />
      </Helmet>
      <HighlightStyles />
      <Navigation />
      <Box ml={{small: 0, large: "260px"}}>
        <Box pt={ { small: 0, large: "x8" } } px="x3" maxWidth="740px" m="0 auto">
          {children}
        </Box>
      </Box>
    </Box>
  </NDSProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;


// take off height/width/overflow
// remove intro padding on small screen
