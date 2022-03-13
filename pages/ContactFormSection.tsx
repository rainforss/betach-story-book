import * as React from "react";
import AnchorSection from "../components/AnchorSection";
import { Box, Flex, Text } from "@chakra-ui/react";

const ContactFormSection: React.FunctionComponent = () => {
  return (
    <AnchorSection
      sectionId="test"
      key="test"
      w="100%"
      minH={{ base: "60vh", md: "80vh" }}
      position="relative"
      overflow="hidden"
      bgImage={`https://images.ctfassets.net/vjn6k5wzhope/4IegsXM0UjJENBm7qhFJAN/2c1cb8da71f2af8dc3a5a3e6bb783a8a/Sharp_Line_Background.png`}
      bgSize="cover"
      bgPos="center"
    >
      {/* <Center
        id="hero-background"
        bgImage={`${dynamicsPageSection.bsi_Background.bsi_cdnurl}?fm=jpg&fl=progressive`}
        opacity={0.45}
        bgSize="cover"
        bgPos="center"
        w="100%"
        minH={["80vh", "100vh"]}
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        flexDirection="column"
        position="relative"
      ></Center> */}
      <Flex
        w="100%"
        minH={{ base: "60vh", md: "80vh" }}
        justify="space-between"
        flexDirection={{ base: "column", md: "row" }}
        bgColor="rgba(255,255,255,0.75)"
        mx="auto"
        p={16}
      >
        <Flex w={{ base: "100%", md: "45%" }} flexDir="column" mb={[12, 0]}>
          <Text
            as="h4"
            color="inherit"
            fontWeight="bold"
            fontSize="1.2rem"
            textTransform="uppercase"
          >
            Overline
          </Text>
          <Text
            as="h2"
            fontSize={["1.75rem", "2.5rem"]}
            fontWeight="700"
            color="inherit"
            mb={4}
            pb={4}
            borderStyle="dotted"
            borderColor="transparent"
            borderWidth="0 0 5px 0"
            textTransform="uppercase"
          >
            Main Heading
          </Text>
          <Text
            as="h4"
            color="inherit"
            fontWeight="bold"
            fontSize="1.2rem"
            textTransform="uppercase"
            mb={6}
          >
            Sub Heading
          </Text>
          <Text as="p" color="inherit">
            Paragraph
          </Text>
        </Flex>
        <Box w={{ base: "100%", md: "45%" }} suppressHydrationWarning>
          D365 Marketing Form
        </Box>
      </Flex>
    </AnchorSection>
  );
};

export default ContactFormSection;
