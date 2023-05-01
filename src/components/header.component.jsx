import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.png";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg={["brand.300", "brand.300", "brand.100", "brand.100"]}
      color={["white", "white", "brand.600", "brand.600"]}
      fontSize="1.3rem"
      {...props}
    >
      {children}
    </Flex>
  );
};
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="#">Home</MenuItem>
        <MenuItem to="#">Routes</MenuItem>
        <MenuItem to="#">History</MenuItem>
        <MenuItem to="#">User Account</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBar = (props) => {
	return (
    <NavBarContainer {...props}>
      <Box boxSize="6rem">
		<Image boxSize="100%" objectFit="cover" src={logo} alt="App logo" />
		</Box>
		<MenuLinks />

		</NavBarContainer>
	);
};

export default NavBar;


