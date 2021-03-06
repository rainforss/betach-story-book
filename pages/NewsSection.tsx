import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import * as React from "react";
import AnchorSection from "../components/AnchorSection";
import { dynamicsPageSection } from "../utils/constants";

interface INewsSectionProps {}

const NewsSection: React.FunctionComponent<INewsSectionProps> = () => {
  return (
    <AnchorSection
      sectionId={dynamicsPageSection.bsi_sectionid || "introduction"}
      key={dynamicsPageSection.bsi_sectionid}
    >
      <Box w="100%" my={24}>
        <Flex flexDirection="column" w="90%" mx="auto" align="center">
          <Flex>
            {dynamicsPageSection.bsi_AttachedComponent_bsi_PageSection_bsi &&
              dynamicsPageSection.bsi_AttachedComponent_bsi_PageSection_bsi.map(
                (dp) => (
                  <Flex
                    flexDirection="column"
                    align="center"
                    w="33%"
                    px={6}
                    key={dp.bsi_attachedcomponentid}
                  >
                    <Text
                      as="h5"
                      fontWeight="extrabold"
                      color="blackAlpha.800"
                      fontSize="2.5rem"
                    >
                      {dp.bsi_title}
                    </Text>
                    {dp.bsi_subtitle && (
                      <Text
                        as="h5"
                        fontWeight="bold"
                        color="blackAlpha.800"
                        fontSize="1.3rem"
                        textAlign="center"
                      >
                        {dp.bsi_subtitle}
                      </Text>
                    )}
                    <Text as="p" textAlign="center" my={8} lineHeight="2">
                      {dp.bsi_description}
                    </Text>
                    {dp.bsi_hasctabutton && (
                      <Link
                        href={dp.bsi_ctabuttonlink || "/test"}
                        as="span"
                        py={4}
                        px={6}
                        bg="royalblue"
                        color="whiteAlpha.800"
                        borderRadius="300px"
                      >
                        {dp.bsi_ctabuttontext}
                      </Link>
                    )}
                  </Flex>
                )
              )}
          </Flex>
        </Flex>
      </Box>
    </AnchorSection>
  );
};

export default NewsSection;
