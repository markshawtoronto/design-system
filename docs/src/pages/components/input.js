import React from "react";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight";
import {
  Box,
  SectionTitle,
  SubsectionTitle,
  Title,
  Input,
  Link,
  ListItem,
  List
} from "@nulogy/components";
import {
  Layout,
  Intro,
  IntroText,
  DocSection,
  PropsTable
} from "../../components";
import inputProps from "../../shared/inputProps";

export default () => (
  <Layout>
    <Helmet>
      <title>Input</title>
    </Helmet>
    <Intro>
      <Title>Input</Title>
      <IntroText>An input field that users can type into.</IntroText>
    </Intro>
    <DocSection>
      <Input id="input" labelText="Label" />
      <Highlight className="js">
        {`import { Input } from "@nulogy/components";

<Input id="input" labelText="Input label" />`}
      </Highlight>
    </DocSection>
    <DocSection>
      <SectionTitle>Use when</SectionTitle>
      <List>
        <ListItem>
          Users need to enter information that is best communicated in text
          form.
        </ListItem>
        <ListItem>
          You need to collect information that varies from one user to another
          and can’t be represented as a set of pre-determined choices.
        </ListItem>
      </List>
    </DocSection>
    <DocSection>
      <SectionTitle>Variations</SectionTitle>
      <Box mb="x6">
        <SubsectionTitle>Disabled</SubsectionTitle>
        <Input labelText="Label" placeholder="I'm an input" disabled />
        <Highlight className="js">
          {'<Input id="disabled-input" placeholder="I\'m an input" disabled />'}
        </Highlight>
      </Box>
      <Box mb="x6">
        <SubsectionTitle>Error</SubsectionTitle>
        <Input labelText="Label" errorMessage="Error message" />
        <Highlight className="js">
          {
            '<Input labelText="Label" id="error-input" errorMessage="Error message" />'
          }
        </Highlight>
      </Box>
      <Box mb="x6">
        <SubsectionTitle>With all labels</SubsectionTitle>
        <Input
          id="all-labels"
          labelText="Label"
          helpText="Additional help text"
          requirementText="(Optional)"
          placeholder="I'm an input"
        />
        <Highlight className="js">
          {`<Input
  id="all-labels"
  labelText="Label"
  helpText="Additional help text"
  requirementText="(Optional)"
  placeholder="I'm an input"
/>`}
        </Highlight>
      </Box>
    </DocSection>
    <DocSection>
      <SectionTitle>Guidelines</SectionTitle>
      <List>
        <ListItem>
          Whenever possible match the width of the input field with the expected
          length of the input. If that is not possible then fill the entire
          width of the container.
        </ListItem>
      </List>
    </DocSection>
    <DocSection>
      <SectionTitle>Props</SectionTitle>
      <PropsTable propsRows={inputProps} />
    </DocSection>

    <DocSection>
      <SectionTitle>Related components</SectionTitle>
      <List>
        <ListItem>
          <Link href="/components/form">Form</Link>
        </ListItem>
      </List>
    </DocSection>

    <DocSection>
      <SectionTitle>Resources</SectionTitle>
      <List>
        <ListItem>
          <Link href="https://storybook.nulogy.design/?path=/story/input--input">
            View in Storybook
          </Link>
        </ListItem>
      </List>
    </DocSection>
  </Layout>
);
