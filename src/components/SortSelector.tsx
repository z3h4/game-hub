import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-popularity", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" fontWeight="bold">
          Order by: {currentSortOrder?.label || "Relevance"} {<BsChevronDown />}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((sortOrder) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(sortOrder.value)}
                key={sortOrder.value}
                value={sortOrder.value}
              >
                {sortOrder.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
