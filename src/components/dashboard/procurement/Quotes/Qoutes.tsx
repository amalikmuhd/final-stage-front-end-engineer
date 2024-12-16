import { HStack } from "../../../shared/HStack";
import Stack from "../../../shared/Stack";
import Text from "../../../shared/Text";
import { VStack } from "../../../shared/VStack";
import Table from "./Table";

export default function QoutesItems() {
  return (
    <Stack className="px-8 rounded-bl-xl flex flex-col justify-between">
      <VStack className="border border-[#E4E7EC] px-8 py-6 mt-8 rounded shadow-custom">
        <Text fontSize="text-xl" fontFamily="font-satoshi-bold" className="mb-4">
          Item(s)
        </Text>
        <Table />

        <HStack className="w-[90%] justify-end mt-4">
          <Text className="text-base text-gray-600 font-satoshi-regular">Sub Total:</Text>
          <Text className="text-base text-gray-600 font-satoshi-regular ml-8">$8,000.00</Text>
        </HStack>
        <HStack className="w-[90%] justify-end mt-4">
          <Text className="text-base text-gray-600 font-satoshi-regular">Total:</Text>
          <Text className="text-base text-gray-600 font-satoshi-bold ml-8">$8,750.00</Text>
        </HStack>
      </VStack>
    </Stack>
  );
}
