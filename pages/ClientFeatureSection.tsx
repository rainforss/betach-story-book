import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import * as React from "react";
import AnchorSection from "../components/AnchorSection";

const ClientFeatureSection: React.FunctionComponent = () => {
  const featuredproducts =
    "Featured Product 1; Featured Product 2; Featured Product 3";
  const videourl =
    "https://www.youtube.com/embed/zoaJ-rAPj4c?wmode=opaque&enablejsapi=1";
  const youtubevideoid = "zoaJ-rAPj4c";
  const youtubevideoalttext = "Tarin's owner Kim and her lovely pet";
  return (
    <AnchorSection sectionId="test" key="test" py={24}>
      <Center
        minH={{ base: "30vh", md: "60vh" }}
        flexDirection="column"
        mx="auto"
      >
        <Flex flexDirection="column" align="center" w={["90%", "70%"]}>
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
            color="inherit"
            fontWeight="700"
            mb={4}
            pb={4}
            borderStyle="dotted"
            borderColor="transparent"
            borderWidth="0 0 5px 0"
            textTransform="uppercase"
          >
            Main Heading
          </Text>
          <Text as="p" textAlign="center" color="inherit">
            Paragraph
          </Text>
          {featuredproducts && (
            <Text as="span" fontSize="1.2rem" fontWeight="900" mt={6} mb={10}>
              Built on{" "}
              {featuredproducts.split(";").map((p: any, index: number) => {
                if (index === 0) {
                  return (
                    <Text key={p} as="span">
                      {p}
                    </Text>
                  );
                } else {
                  return (
                    <Text key={p} as="span">
                      ,&nbsp;{p}
                    </Text>
                  );
                }
              })}
            </Text>
          )}
        </Flex>
        {videourl && (
          <Box h={{ base: "30vh", md: "60vh" }} w={["95%", "80%"]} mx="auto">
            <iframe
              src={videourl}
              srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${youtubevideoid}?autoplay=1><img src=https://img.youtube.com/vi/${youtubevideoid}/maxresdefault.jpg style="object-fit:cover;" alt='${youtubevideoalttext}'><span>▶</span></a>`}
              height="100%"
              width="100%"
              scrolling="no"
              frameBorder="0"
              loading="lazy"
              allowFullScreen={true}
            ></iframe>
          </Box>
        )}
      </Center>
    </AnchorSection>
  );
};

export default ClientFeatureSection;
