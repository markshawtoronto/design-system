import React from "react";
import { storiesOf } from "@storybook/react";
import { Flex } from "../index";
import MenuLink from "./MenuLink";

storiesOf("MenuLink", module).add("MenuLink", () => (
  <Flex bg="blackBlue" justifyContent="center" alignItems="center" p="x2">
    <MenuLink href="/">Menu Link 1</MenuLink>
  </Flex>
));
