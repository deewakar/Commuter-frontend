
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


const Search = (props) => {
	return (
<VStack align="center">
		<Heading as="h2" color="brand.600" pb="6" size="md"> Search For Public Transit Routes</Heading>
        <Stack spacing={4} mt="25px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="brand.300"
              fontSize="1.2em"
              children={<FaSearch />}
            />
            <Input placeholder="Source" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="brand.300"
              fontSize="1.2em"
              children={<FaSearch />}
            />
            <Input placeholder="destination" />
          </InputGroup>
          <Button bg="brand.600" color="brand.100">
            Search
          </Button>
        </Stack>

      </VStack>
	);
};

export default Search;
