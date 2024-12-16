import { Steps } from "../../../../assets/data";
import Circle from "../../../shared/Circle";
import { HStack } from "../../../shared/HStack";
import Stack from "../../../shared/Stack";
import Text from "../../../shared/Text";
import { VStack } from "../../../shared/VStack";

interface QuoutesStepper {
  step?: number;
  active?: boolean;
}

export default function QoutesStepper({ step }: QuoutesStepper) {
  return (
    <Stack className="mx-8">
      <HStack className="border border-border px-8 py-6 mt-8 mb-4 rounded flex flex-row justify-between">
        {Steps.map((item, index) => {
          const stepNumber = index + 1;
          const isActive = step === stepNumber;
          const isDone = step !== undefined ? step > stepNumber : 0;

          return (
            <HStack key={index} className="justify-start gap-3">
              <Circle
                name={`${stepNumber}`}
                className={`mb-3 ${
                  isActive ? "bg-primary" : isDone ? "bg-green-500" : "bg-white border border-gray-300"
                }`}
                textStyle={isDone ? "text-green-800" : isActive ? "text-white" : "text-gray-400"}
              />
              <VStack>
                <Text className={`${isActive || isDone ? "text-gray-900 font-medium" : "text-gray-700"}`}>
                  {item.title}
                </Text>
                <Text className="text-sm text-gray-500">{item.description}</Text>
              </VStack>
            </HStack>
          );
        })}
      </HStack>
    </Stack>
  );
}
