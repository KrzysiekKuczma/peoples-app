import { FC, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Grid,
  Flex,
  useColorMode,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ConnectButton from "../../Components/ConnectButton/ConnectButton";

import { initBackground } from "./background";
import { initLogo } from "./logo";
import { Logo } from "../../Logo";
import { LogoWhite } from "../../LogoWhite";
import { Web3ModalContext } from "../../Components/Web3Modal/Web3Modal";

import "./home.css";

const Home: FC = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    initBackground(colorMode);
    initLogo(colorMode);

    return () => {
      initBackground(colorMode);
      initLogo(colorMode);
    };
  }, [colorMode]);

  const { account } = useContext(Web3ModalContext);

  return (
    <>
      <Box id="background" position="fixed" height="100%" width="100%" />
      <Box id="logo" position="fixed" height="100%" width="50%" right="400px" />
      {/* page one */}
      <Box position="fixed" ml={6} mt={3}>
        <Link to="/">
          <Flex dir="row" alignItems="center">
            {colorMode === "dark" ? (
              <LogoWhite h={10} mr={1} />
            ) : (
              <Logo h={10} mr={1} />
            )}
            <Text fontWeight="bold">eople's</Text>
          </Flex>
        </Link>
      </Box>
      <Grid
        p={4}
        h="100%"
        minH="100vh"
        placeContent="center"
        alignItems="center"
        flexDirection="column"
        bgPosition="center"
        bgAttachment="fixed"
        pos="relative"
        templateColumns={{ base: "auto", md: "1fr 1fr" }}
      >
        <Box ml={12}>
          <Text fontSize="7xl" textAlign="right">
            People's
          </Text>
          <Text mb={5} fontSize="2xl" textAlign="right">
            a social media platform powered by Lens Protocol and Polygon.
          </Text>
          <Flex justifyContent="flex-end" alignItems="center">
            <Box mr={4}>
              <ConnectButton text="Join" size="md" />
            </Box>
            {account && (
              <Link to="/dashboard">
                <Button>Enter</Button>
              </Link>
            )}
          </Flex>
        </Box>
      </Grid>
      {/* page two */}
      <Grid
        p={4}
        h="100%"
        minH="100vh"
        placeContent="center"
        alignItems="center"
        flexDirection="column"
        bgPosition="center"
        bgAttachment="fixed"
        pos="relative"
        templateColumns={{ base: "auto", md: "1fr 1fr" }}
      >
        <Box ml={12} textAlign="right">
          <Text fontSize="3xl">Connect</Text>
          <Text>with people with similar interests & ideas</Text>
          <Text mb={5}>
            and become a part of the next-gen Social Media by participating in
            creating the future.
          </Text>

          <Text fontSize="3xl">Our mission</Text>
          <Text>
            is to attract people of web 2.0 to web 3.0 with the limitless
            ownership possibilities and flexibility
          </Text>
          <Text>
            harness the power of blockchain by forming token gated communities
          </Text>
          <Box ml="144px">
            <Box
              className="timeline"
              background={
                colorMode === "dark"
                  ? "rgba(255, 255, 255, 0.03)"
                  : "rgba(0, 0, 0, 0.04)"
              }
            >
              <Box
                className="event"
                data-date="1990"
                borderBottom={
                  colorMode === "dark"
                    ? "1px dashed rgba(75, 255, 255, 0.1)"
                    : "1px dashed rgba(255, 255, 255, 0.1)"
                }
              >
                <h3>Web 1.0</h3>
                <UnorderedList>
                  <ListItem>Mostly Read-Only</ListItem>
                  <ListItem>Company Focus</ListItem>
                  <ListItem>Owning Content</ListItem>
                  <ListItem>Dedicated Infrastructure</ListItem>
                </UnorderedList>
              </Box>
              <Box
                className="event"
                data-date="2005"
                borderBottom={
                  colorMode === "dark"
                    ? "1px dashed rgba(75, 255, 255, 0.1)"
                    : "1px dashed rgba(255, 255, 255, 0.1)"
                }
              >
                <h3>Web 2.0</h3>
                <UnorderedList>
                  <ListItem>Wildly Read-Write</ListItem>
                  <ListItem>Community Focus</ListItem>
                  <ListItem>Sharing Content</ListItem>
                  <ListItem>Centralized Infrastructure</ListItem>
                </UnorderedList>
              </Box>
              <Box
                className="event"
                data-date="2020"
                borderBottom={
                  colorMode === "dark"
                    ? "1px dashed rgba(75, 255, 255, 0.1)"
                    : "1px dashed rgba(255, 255, 255, 0.1)"
                }
              >
                <h3>Web 3.0</h3>
                <UnorderedList>
                  <ListItem> Payable and Personal</ListItem>
                  <ListItem> Individual Focus</ListItem>
                  <ListItem> Consolidating Content</ListItem>
                  <ListItem> Decentralized Infrastructure</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width="100%" marginTop="auto" pb={12}>
          <Text fontSize="xxx-large" align="center">
            Join us now!
          </Text>
          <Flex justifyContent="center">
            <Box mr={4}>
              <ConnectButton text="Join" size="md" />
            </Box>
            {account && (
              <Link to="/dashboard">
                <Button>Enter</Button>
              </Link>
            )}
          </Flex>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
