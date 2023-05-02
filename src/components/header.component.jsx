import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.png";

const NavBarContainer = (props) => {
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
		</Flex>
	);
};

const MenuLinks = (props) => {
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
		<Button
		colorScheme="brand.600"
		isActive={props.currentBody === "Search" ? true : false}
		_active={{ textDecoration: "underline" }}
		_focus={{ outline: "none", textDecoration: "underline" }}
		variant="link"
		onClick={(component) => props.updateBody("Search")}
		>
		Home
		</Button>
		<Button
		colorScheme="brand.600"
		isActive={props.currentBody === "Routes" ? true : false}
		_active={{ textDecoration: "underline" }}
		_focus={{ outline: "none", textDecoration: "underline" }}
		variant="link"
		onClick={(component) => props.updateBody("Routes")}
		>
		Routes
		</Button>
		<Button
		colorScheme="brand.600"
		isActive={props.currentBody === "History" ? true : false}
		_active={{ textDecoration: "underline" }}
		_focus={{ outline: "none", textDecoration: "underline" }}
		variant="link"
		onClick={(component) => props.updateBody("History")}
		>
		History
		</Button>

		<Button
		colorScheme="brand.600"
		isActive={props.currentBody === "User" ? true : false}
		_active={{ textDecoration: "underline" }}
		_focus={{ outline: "none", textDecoration: "underline" }}
		variant="link"
		onClick={(component) => props.updateBody("User")}
		>
		User Account
		</Button>
		</Stack>
		</Box>
	);
};

const NavBar = (props) => {
	return (
		<NavBarContainer >
		<Box boxSize="6rem">
		<Image boxSize="100%" objectFit="cover" src={logo} alt="App logo" />
		</Box>
		<MenuLinks
		{...props}
		/>
		</NavBarContainer>
	);
};

export default NavBar;


