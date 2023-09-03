import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown, BsViewList } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGame";

interface MenuSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function MenuSelector({
  onSelectPlatform,
  selectedPlatform,
}: MenuSelectorProps) {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((data) => (
          <MenuItem key={data.id} onClick={() => onSelectPlatform(data)}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuSelector;
