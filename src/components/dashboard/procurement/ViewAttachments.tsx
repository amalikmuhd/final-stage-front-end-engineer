import ICONS from "../../../constant/icon";
import CustomInput from "../../CustomInput";
import Divider from "../../Divider";
import Button from "../../shared/Button";
import { HStack } from "../../shared/HStack";
import Text from "../../shared/Text";
import { VStack } from "../../shared/VStack";
import Title from "./Quotes/Title";

export default function ViewAttachments() {
  return (
    <div>
      <Title title="Terms and Attachments" desc="Provide detailed information on payment and delivery terms" />
      <HStack className="flex flex-row justify-between gap-4 mt-8">
        <CustomInput
          mainContainer="flex-1"
          label="Payment Terms"
          value="Net 30"
          TrailingComponent={<img src={ICONS.chevronDown} className="h-5 w-5" />}
        />
        <CustomInput
          mainContainer="flex-1"
          label="Delivery Schedule"
          value="Immediate delivery"
          TrailingComponent={<img src={ICONS.chevronDown} className="h-5 w-5" />}
        />
      </HStack>

      <HStack className="flex flex-row justify-between gap-4 mt-6">
        <CustomInput
          mainContainer="flex-1"
          label="Shipping Method"
          value="Courier Services"
          TrailingComponent={<img src={ICONS.chevronDown} className="h-5 w-5" />}
        />
        <CustomInput
          mainContainer="flex-1"
          label="Lead time"
          value="2024-12-02"
          TrailingComponent={
            <HStack className="flex flex-row items-center bg-secondary py-[4px] px-2 rounded gap-1">
              <Text className="text-xs text-gray-500 font-satoshi-regular">Days</Text>
              <img src={ICONS.chevronDown} className="h-[18px] w-[18px]" />
            </HStack>
          }
        />
      </HStack>

      <VStack className="w-[50%] mt-6">
        <Divider />
        <Text className="text-base font-satoshi-bold text-[#1D2739]">Attachments</Text>
        <Text className="text-sm mt-2 font-satoshi-light text-text-tertiary">
          Attach all necessary files or documents
        </Text>

        <VStack className="mt-6 border-[1.5px] border-dashed rounded-2xl pl-10 pb-4">
          <HStack className="w-[352px] h-[203px] pt-12 pb-4">
            <VStack className="flex-1 flex flex-col items-center justify-between">
              <img src={ICONS.fileUpload} className="h-14 w-14 mb-2" />

              {/* Text and description */}
              <VStack className="mb-4">
                <HStack className="gap-2">
                  <Text className="text-sm text-primary font-satoshi-medium">Click to upload </Text>
                  <Text className="text-sm text-text-secondary font-satoshi-regular"> or drag and drop</Text>
                </HStack>
                <Text className="text-sm text-text-tertiary font-satoshi-light">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </Text>
              </VStack>

              {/* Updated divider section */}
              <div className="flex items-center w-full px-4 pb-3">
                <div className="flex-1 border-t border-gray-100" />
                <span className="px-4 text-sm text-gray-400">OR</span>
                <div className="flex-1 border-t border-gray-100" />
              </div>

              <Button
                width="w-[125px]"
                height="h-[36px]"
                variant="outlined"
                borderColor="primary"
                textColor="primary"
                className="border-[2px]"
              >
                Browse Files
              </Button>
            </VStack>
          </HStack>
        </VStack>
      </VStack>

      <Divider />
    </div>
  );
}
