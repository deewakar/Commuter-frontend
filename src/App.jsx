import React from "react";
//import "./styles.css";
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
  IconButton,
  Button,
  ButtonGroup
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";

import NavBar from "./components/header.component";
import Search from "./components/search.component";
import Footer from "./components/footer.component";

import "./style.css";

export default function App() {
  return (
    <Box className="App" maxHeight="100vh">
	  <NavBar />

      	  <Search />

	  <Footer />


    </Box>
  );
}
