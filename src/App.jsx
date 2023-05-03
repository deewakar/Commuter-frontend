import React from "react";
import {useState} from "react";

import "./App.css";
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
import Routes from "./components/routes.component";
import History from "./components/history.component";
import User from "./components/user.component";

import "./style.css";

export default function App() {
 const [bodyComponent, setBodyComponent] = useState("Search");

  function setBody(component) {
    setBodyComponent(component);
  }

  function Body(props) {
    if (bodyComponent === "Search") return <Search />;
    else if (bodyComponent === "Routes") return <Routes />;
    else if (bodyComponent === "History") return <History />;
    else if (bodyComponent === "User") return <User />;
  }

  return (
    <VStack className="App" maxHeight="100vh">
      <NavBar updateBody={setBody} currentBody={bodyComponent}/>

      <Body component={bodyComponent} />

      <Footer updateBody={setBody} currentBody={bodyComponent} />
    </VStack>
  );
}
 
