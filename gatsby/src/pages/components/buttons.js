import React from "react"
import Layout from '../../components/layout'
import Intro from '../../components/Intro'
import DocSection from '../../components/DocSection'
import CheckList from '../../components/CheckList'
import ComponentUsage from '../../components/components/UsageBox'
import {Button, DangerButton, PrimaryButton, QuietButton, Box, Flex, Text, SectionTitle, Title} from '@nulogy/components';

export default () => (
    <Layout>
    <Box>
        <Box bg='whiteGrey' p={5} borderRadius={1} mb={6}>
            <Title mb={0}>Buttons</Title>   
            <Intro>Buttons make common actions immediately detectable and easy to perform.</Intro>
        </Box>
        <DocSection>
            <Flex mb={6}>
                <Box width={1/4}>
                    <Button>Button</Button>
                </Box>
                <Box width={3/4}>
                    <Text>Buttons are used for actions that do not require any special emphasis and cover most cases.</Text>
                </Box>
            </Flex>
            <Flex mb={6}>
                <Box width={1/4}>
                    <PrimaryButton>Primary Button</PrimaryButton>
                </Box>
                <Box width={3/4}>
                    <Text>Primary buttons are used for the main action in a particular context. There is usually not more than one primary button per screen and not all of the screens require a Primary button.</Text>
                </Box>
            </Flex>        
            <Flex mb={6}>              
                <Box width={1/4}>
                    <DangerButton>Danger Button</DangerButton>
                </Box>
                <Box width={3/4}>
                    <Text>Danger buttons are used for destructive actions such as deleting. They are most likely to appear in confirmation dialogs.</Text>
                </Box>
            </Flex>   
            <Flex>              
                <Box width={1/4}>
                    <QuietButton>Quiet Button</QuietButton>
                </Box>
                <Box width={3/4}>
                    <Text>Quiet buttons are used for less important actions such as “Cancel” or actions that are not directly related to the context of the page (e.g Learn more …). Quiet buttons are often paired with a Primary button.</Text>
                </Box>
            </Flex>            
        </DocSection>               
        
        <DocSection>
            <SectionTitle>Sizes</SectionTitle>
            <Text>All buttons are available in three sizes</Text>
            <Button size="small" mr={3}>Small</Button>
            <Button size="medium" mr={3}>Medium</Button>
            <Button size="large">Large</Button>
        </DocSection>

        <DocSection>
            <SectionTitle>States</SectionTitle>
            <Text>All buttons can be disabled. When a button is disabled, it's greyed out and unable to be clicked.</Text>
            <Button disabled>Create project</Button>
        </DocSection>

        <DocSection>
            <SectionTitle>Content guidelines</SectionTitle>
                <CheckList>Always lead with an actionable verb</CheckList>
                <CheckList>Whenever possible follow by an object noun on Primary button to reduce ambiguity. Example: Create shipment, Approve delivery.</CheckList>
                <CheckList>Always use sentence case</CheckList>
        </DocSection>

        <ComponentUsage storybookLink='http://localhost:8080/?selectedKind=Button' source='/components/buttons/buttons.js'></ComponentUsage>

    </Box>
    </Layout>
)