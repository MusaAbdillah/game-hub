import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store";

interface PlatformSelectorProps {
  onSelectSort: (sort: string) => void;
  selectedSort: string;
}

function PlatformSelector() {
  const sortOrders = [
    { name: "", label: "Relevance" },
    { name: "-released", label: "Released" },
    { name: "-added", label: "Added on" },
    { name: "-created", label: "Created at" },
    { name: "-updated", label: "Updated at" },
    { name: "-rating", label: "Rating" },
    { name: "metacritic", label: "Metacritic" },
  ];
  
  const setSelectedSort = useGameQueryStore(s => s.setSortOrder)
  const selectedSort = useGameQueryStore(s => s.gameQuery.Ordering)
  const currentSort = sortOrders.find((o) => o.name === selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSelectedSort(sortOrder.name)}
            key={sortOrder.name}
            value={sortOrder.name}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
