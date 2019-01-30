import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import PrimaryButton from "./PrimaryButton";
import DangerButton from "./DangerButton";
import QuietButton from "./QuietButton";

storiesOf("Buttons", module)
  .add("Button", () => (
    <Button>Create project</Button>
  ))
  .add("PrimaryButton", () => (
    <PrimaryButton>Create project</PrimaryButton>
  ))
  .add("DangerButton", () => (
    <DangerButton>Delete project</DangerButton>
  ))
  .add("QuietButton", () => (
    <QuietButton>Create project</QuietButton>
  ))
  .add("With a selected size", () => (
    <React.Fragment>
      <Button size="small">Create project</Button>
      <Button size="medium">Create project</Button>
      <Button size="large">Create project</Button>
    </React.Fragment>
  ))
  .add("With a selected Icon", () => (
    <React.Fragment>
      <Button iconName="add" iconSide="left">Create project</Button>
      <Button iconName="add" iconSide="right">Create project</Button>
    </React.Fragment>
  ))
  .add("Set to full width", () => (
    <PrimaryButton fullWidth>Create project</PrimaryButton>
  ))
  .add("Set to disabled", () => (
    <PrimaryButton disabled>Create project</PrimaryButton>
  ))
  .add("As a link", () => (
    <PrimaryButton as="a" href="/">Create project</PrimaryButton>
  ));
