import { HStack } from "./HStack";
import Text from "./Text";

export default function BreadCrumb() {
  return (
    <HStack className="px-8 mt-8 flex flex-row gap-3">
      <Text className="text-primary text-sm font-satoshi-medium">Quotes</Text>
      <Text className="text-sm font-satoshi-medium">/</Text>
      <Text className="text-sm font-satoshi-medium">Quote Response</Text>
    </HStack>
  );
}
