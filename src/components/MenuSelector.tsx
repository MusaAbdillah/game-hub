import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown, BsViewList } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGame";

interface MenuSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

function MenuSelector({
  onSelectPlatform,
  selectedPlatformId,
}: MenuSelectorProps) {
  const { data: platforms, error } = usePlatform();
  const selectedPlatform = platforms?.results.find((p) => p.id === selectedPlatformId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((data) => (
          <MenuItem key={data.id} onClick={() => onSelectPlatform(data)}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuSelector;
