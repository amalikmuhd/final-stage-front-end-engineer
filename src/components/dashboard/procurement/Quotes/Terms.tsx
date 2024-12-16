import ICONS from "../../../../constant/icon";
import { HStack } from "../../../shared/HStack";
import Stack from "../../../shared/Stack";
import Text from "../../../shared/Text";
import { VStack } from "../../../shared/VStack";

export default function QoutesTerms() {
  return (
    <Stack className="mx-8">
      <HStack className="border border-border px-8 py-6 mt-8 mb-4 rounded flex flex-row justify-between">
        <HStack className="justify-start gap-3">
          <img src={ICONS.contracts} className="w-8 h-8 mb-3" />
          <VStack>
            <Text className="text-xl font-satoshi-bold">Terms and Attachments</Text>
            <Text className="text-sm font-satoshi-regular text-text-secondary">Review payment and delivery terms</Text>
          </VStack>
        </HStack>
        <img src={ICONS.chevronDown} className="w-7 h-8" />
      </HStack>
    </Stack>
  );
}
