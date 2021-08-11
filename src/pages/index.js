import {
  Link as ChakraLink,
  Heading,
  HStack,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";

const Index = () => (
  <VStack mt="25vh">
    <Heading>Hello, welcome to my assignment</Heading>
    <HStack>
      <ChakraLink href="/assignment1">
        <Button colorScheme="green">Assignment 1</Button>
      </ChakraLink>
      <ChakraLink href="/assignment2">
        <Button colorScheme="yellow">Assignment 2</Button>
      </ChakraLink>
    </HStack>
  </VStack>
);

export default Index;
