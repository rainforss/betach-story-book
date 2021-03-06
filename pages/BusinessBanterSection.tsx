import { Center, Flex, Heading, Text } from "@chakra-ui/layout";
import * as React from "react";
import AnchorSection from "../components/AnchorSection";
import { dynamicsPageSection } from "../utils/constants";

const BusinessBanterSection: React.FunctionComponent = () => {
  return (
    <AnchorSection sectionId="test" key="test">
      <Center
        bgImage={``}
        bgSize="cover"
        bgPos="center"
        h="80vh"
        minH="80vh"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
      >
        <Flex w="90%" justify="center" flexDirection="column" align="center">
          <Flex direction="column" mb={12}>
            <Heading as="h2" color="whiteAlpha.900" fontSize="3rem" mb={6}>
              {dynamicsPageSection.bsi_mainheading}
            </Heading>
            <Text as="h3" textAlign="center">
              {dynamicsPageSection.bsi_subheading}
            </Text>
          </Flex>
          <iframe
            title="Betach‘s Business Banter - Episode 6 featuring Professor Theo Stratopoulos"
            loading="lazy"
            height="450px"
            style={{ border: "none", minWidth: "min(100%, 430px)" }}
            scrolling="no"
            data-name="pb-iframe-player"
            src="https://www.podbean.com/player-v2/?i=cxcpw-112081c-pb&amp;from=pb6admin&amp;square=1&amp;share=1&amp;download=1&amp;rtl=0&amp;fonts=Arial&amp;skin=f6f6f6&amp;font-color=&amp;btn-skin=7&amp;size=450"
            srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;height:450px;object-fit:fill;}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.podbean.com/player-v2/?i=cxcpw-112081c-pb&amp;from=pb6admin&amp;square=1&amp;share=1&amp;download=1&amp;rtl=0&amp;fonts=Arial&amp;skin=f6f6f6&amp;font-color=&amp;btn-skin=7&amp;size=450><img src=https://pbcdn1.podbean.com/imglogo/image-logo/9321474/BETACH_S_BUSINESS_BANTERauerq.png alt='podbeans cover'><span>▶</span></a>`}
            allowFullScreen={true}
          ></iframe>
        </Flex>
      </Center>
    </AnchorSection>
  );
};

export default BusinessBanterSection;
