import Stack from "../../../shared/Stack";
import { HStack } from "../../../shared/HStack";
import Text from "../../../shared/Text";
import { VStack } from "../../../shared/VStack";
import { QuoteInformation } from "../../../../assets/data";
import Circle from "../../../shared/Circle";
import Badge from "../../../shared/Badge";
import ICONS from "../../../../constant/icon";

interface QoutesInformationProps {
  title?: string;
  onEdit?: boolean;
}
export default function QoutesInformation({ onEdit = true, title = "Quote Information" }: QoutesInformationProps) {
  return (
    <Stack className="px-8 rounded-bl-xl flex flex-col justify-between">
      <VStack className="border border-gray-200 px-8 py-6 mt-8 rounded">
        <HStack className="justify-between">
          <Text className="text-xl font-satoshi-bold">{title}</Text>
          {onEdit ? (
            <Text className="text-sm font-satoshi-light text-gray-500">Expected delivery date : 2024-12-02</Text>
          ) : (
            <img src={ICONS.edit} className="w-5 h-5" />
          )}
        </HStack>

        <div className="flex flex-row justify-between flex-1 mt-8">
          <div className="flex flex-col flex-1">
            {QuoteInformation.map((item) => (
              <div className="flex flex-row items-center justify-between pt-4">
                <Text className="text-base font-satoshi-regular text-[#555E68]">{item.title}</Text>
                {item.title === "Requestor" || (
                  <div className="flex flex-row w-[305px]">
                    <Text className="text-base font-satoshi-medium text-right">{item.description}</Text>
                  </div>
                )}
                {item.title === "Requestor" && (
                  <div className="flex flex-row items-center gap-2">
                    <Circle name="JD" />
                    <Text className="text-base text-gray-700 font-satoshi-medium">John Doe</Text>
                    <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
                    <Text className="text-base text-text-tertiary font-satoshi-medium">Head Nurse, Paediatrics</Text>
                  </div>
                )}

                {item.title === "Status" && (
                  <div className="flex flex-row w-[305px]">
                    {onEdit ? (
                      <Badge name="Awaiting" />
                    ) : (
                      <Text className="text-base font-satoshi-medium text-gray-700">2024-12-02</Text>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end flex-1 h-[97px]">
            {onEdit && (
              <div className="flex flex-col flex-[0.6] border border-[#E4E7EC] px-3 pt-3 gap-2 rounded">
                <div className="flex flex-row gap-2">
                  <img src={ICONS.building} className="w-5 h-5" />
                  <Text className="text-sm font-satoshi-regular text-text-secondary">Client</Text>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                  <Circle name="w" />
                  <div>
                    <Text className="text-sm font-satoshi-medium text-gray-900">Westend Hospital</Text>
                    <Text className="text-xs font-satoshi-regular text-text-secondary">Clear street</Text>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </VStack>
    </Stack>
  );
}
