import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface NavBarProps {
  onSearch: (search: string) => void;
}

function NavBar({ onSearch }: NavBarProps) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
