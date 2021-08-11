import {
  Heading,
  HStack,
  Button,
  VStack,
  Center,
  Box,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";

const assignment2 = () => {
  const [category, setCategory] = useState("mountain");
  return (
    <Box backgroundColor="#f2f1ee" align="center" h="100vh" w="100%">
      <Heading>Assignment 2~~~~</Heading>
      <Center>
        <VStack>
          <HStack>
            <Button colorScheme="gray" onClick={() => setCategory("mountain")}>
              Mountain
            </Button>
            <Button colorScheme="blue" onClick={() => setCategory("beaches")}>
              Beaches
            </Button>
            <Button colorScheme="yellow" onClick={() => setCategory("birds")}>
              Birds
            </Button>
            <Button colorScheme="orange" onClick={() => setCategory("food")}>
              Food
            </Button>
          </HStack>
          <SimpleGrid columns={4} spacing={5}>
            {[...Array(8)].map((_, i) => {
              return <Image src={`${category}/${category}${i}.jpg`} />;
            })}
          </SimpleGrid>
        </VStack>
      </Center>
    </Box>
  );
};

export default assignment2;
