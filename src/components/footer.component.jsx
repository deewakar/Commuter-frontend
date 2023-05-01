import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  StackDivider,
  Text,
  Container,
  Box,
  Image,
  IconButton
} from "@chakra-ui/react";

import {
  FaHome,
  FaHistory,
  FaUserCircle,
  FaSearch,
  FaRoute
} from "react-icons/fa";

const Footer = (props) => {
  return (
    <Flex
      as="footer"
      justify="center"
      align="center"
      display={["flex","flex","none","none"]}
      bg={["brand.300", "brand.300", "none", "none"]}
      width="100%"
      position="fixed"
      bottom="0"
      padding="10px"
    >
      <HStack spacing={[8, 10, 12, 20]} justify="space-around">
        <IconButton
          size="lg"
          boxSize={[12, 12, 24, 24]}
          fontSize={[26, 26, 32, 32]}
          color="brand.600"
          aria-label="Home"
          icon={<FaHome />}
        />
        <IconButton
          size="lg"
          boxSize={[12, 12, 24, 24]}
          fontSize={[26, 26, 32, 32]}
          color="brand.600"
          aria-label="Routes"
          icon={<FaRoute />}
        />
        <IconButton
          size="lg"
          boxSize={[12, 12, 24, 24]}
          fontSize={[26, 26, 32, 32]}
          color="brand.600"
          aria-label="Routes History"
          icon={<FaHistory />}
        />
        <IconButton
          size="lg"
          boxSize={[12, 12, 24, 24]}
          fontSize={[26, 26, 32, 32]}
          color="brand.600"
          aria-label="User Account"
          icon={<FaUserCircle />}
        />
      </HStack>
    </Flex>
  );
};

export default Footer;
