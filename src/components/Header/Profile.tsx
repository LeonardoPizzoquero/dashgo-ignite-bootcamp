import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leonardo Pizzoquero</Text>
        <Text 
          color="gray.300" 
          fontSize="small"
        >
          leonardo.pizzoquero@outlook.com
        </Text>
      </Box>
      <Avatar size="md" name="Leonardo Pizzoquero" />
    </Flex> 
  );
}