import {
  HStack,
  VStack,
  Image,
  Box,
  Text,
  Divider,
  Flex,
  Center,
} from "@chakra-ui/react";

export const JobCard = (props) => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      border="1px"
      height="auto"
      width={["95vw", "95vw", "450px", "320px", "400px"]}
      borderRadius="10"
      p={["3", "5"]}
      backgroundColor="#ffffff"
      borderColor="#e1e0dd"
    >
      <Flex direction={["row", "row", "column", "column", "column"]}>
        <Center>
          <Image
            boxSize={["70px", "90px", "90px", "90px", "100px"]}
            borderRadius="5"
            src={props.image}
          />
        </Center>
        <VStack
          align="start"
          pt={["0", "3"]}
          m={["3", "3", "0", "0", "0"]}
          width={["250px", "auto", "auto", "auto", "auto"]}
        >
          <Text fontSize="md" as="sub" mb="2">
            {props.sub}
          </Text>
          <Text
            align="left"
            fontWeight="bold"
            fontSize={["md", "xl", "2xl", "2xl", "2xl"]}
            noOfLines="2"
            /**
             * 70px for alignment of card details when title does not fill 2 lines in standard view
             */
            height={["", "", "", "", "70px"]}
          >
            {props.title}
          </Text>

          {props.salary ? (
            <Flex align="center">
              <Text fontSize={["13px", "md", "md", "md", "md"]} as="sup" pt="3">
                {props.salary}
              </Text>
              <Box
                px="2"
                py="1"
                borderRadius="5"
                fontSize={["10px"]}
                backgroundColor="#f1f1f1"
                color="#3a3a3a"
                ml={["1", "1", "1", "1", "2"]}
              >
                {props.est}
              </Box>
            </Flex>
          ) : (
            <div>
              <br />
            </div>
          )}
        </VStack>
      </Flex>

      <HStack mt="2" justifyContent="space-between" width="100%">
        <Text color="#969696" fontStyle="italic" fontSize="md" as="sup">
          about {props.time} hours ago
        </Text>
        <Box
          px="3"
          py="1"
          borderRadius="5"
          fontWeight="bold"
          backgroundColor="#ddf7e9"
          color="#38cd7b"
        >
          {props.role}
        </Box>
      </HStack>
      <Divider my="3" />

      <HStack overflow="hidden">
        {props.skills.map((skill, i) => (
          <Box
            px="3"
            py="1"
            borderRadius="5"
            fontWeight="bold"
            backgroundColor="#f1f1f1"
            color="#838383"
            key={i}
          >
            {skill}
          </Box>
        ))}
      </HStack>
    </Flex>
  );
};
