import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown, BsViewList } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

function MenuSelector() {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((data) => (
          <MenuItem key={data.id}>{data.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuSelector;
