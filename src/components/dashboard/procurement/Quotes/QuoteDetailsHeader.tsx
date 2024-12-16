import ICONS from "../../../../constant/icon";
import { HStack } from "../../../shared/HStack";
import Stack from "../../../shared/Stack";
import Text from "../../../shared/Text";
import Title from "./Title";

interface QoutesProps {
  onRespond?: () => void;
  onReject?: () => void;
}

export default function QuoteDetailsHeader({ onRespond, onReject }: QoutesProps) {
  return (
    <Stack className="pt-8 px-8 ">
      <HStack className="justify-between">
        <Title title="Quote details" desc="Created on Wed, 12th June 2022, 08:00am" />
        <HStack className="flex flex-row gap-4">
          <button className="bg-primary h-[36px] px-4 text-white rounded-lg text-sm" onClick={onRespond}>
            <Text className="font-satoshi-bold text-sm">Respond</Text>
          </button>
          <button
            className="bg-red-500 h-[36px] px-4 text-white rounded-lg text-sm flex flex-row items-center gap-1"
            onClick={onReject}
          >
            <img src={ICONS.xWhite} className="h-[18px] w-[18px]" />
            <Text className="text-sm font-satoshi-bold">Reject</Text>
          </button>
        </HStack>
      </HStack>
    </Stack>
  );
}
