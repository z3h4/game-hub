import { HStack, List, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List.Item paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <Skeleton height="20px" width="190px" />
      </HStack>
    </List.Item>
  );
};

export default GenreListSkeleton;
