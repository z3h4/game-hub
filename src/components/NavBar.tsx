import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" px={6} py={4} w="full">
      <HStack gap={3}>
        <Image src={logo} boxSize="60px" />
        <Text fontSize="lg" fontWeight="bold">
          Game Hub
        </Text>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
