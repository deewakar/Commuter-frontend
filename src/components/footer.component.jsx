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
		fontSize={[16, 16, 32, 32]}
		color="brand.600"
		aria-label="Home"
		icon={<FaHome />}
		_active={{ border: "solid 2px", background: "brand.300" }}
		_focus={{ outline: "none" }}
		isActive={props.currentBody === "Search" ? true : false}
		onClick={() => props.updateBody("Search")}
		/>
		<IconButton
		size="lg"
		boxSize={[12, 12, 24, 24]}
		fontSize={[16, 16, 32, 32]}
		color="brand.600"
		aria-label="Routes"
		icon={<FaRoute />}
		_active={{ border: "solid 2px", background: "brand.300" }}
		_focus={{ outline: "none" }}
		isActive={props.currentBody === "Routes" ? true : false}
		onClick={() => props.updateBody("Routes")}
		/>
		<IconButton
		size="lg"
		boxSize={[12, 12, 24, 24]}
		fontSize={[16, 16, 32, 32]}
		color="brand.600"
		aria-label="History"
		icon={<FaHistory />}
		_active={{ border: "solid 2px", background: "brand.300" }}
		_focus={{ outline: "none" }}
		isActive={props.currentBody === "History" ? true : false}
		onClick={() => props.updateBody("History")}
		/>
		<IconButton
		size="lg"
		boxSize={[12, 12, 24, 24]}
		fontSize={[16, 16, 32, 32]}
		color="brand.600"
		aria-label="User"
		icon={<FaUserCircle />}
		_active={{ border: "solid 2px", background: "brand.300" }}
		_focus={{ outline: "none" }}
		isActive={props.currentBody === "User" ? true : false}
		onClick={() => props.updateBody("User")}
		/>
		</HStack>
		</Flex>
	);
};

export default Footer;
