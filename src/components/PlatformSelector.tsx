import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

function PlatformSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {"Order by: Relevance"}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance 1</MenuItem>
        <MenuItem>Relevance 2</MenuItem>
        <MenuItem>Relevance 3</MenuItem>
        <MenuItem>Relevance 4</MenuItem>
        <MenuItem>Relevance 5</MenuItem>
        <MenuItem>Relevance 6</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
