import ICONS from "../../../constant/icon";
import CustomInput from "../../CustomInput";
import Divider from "../../Divider";
import { HStack } from "../../shared/HStack";
import AddItems from "./AddItem";
import Title from "./Quotes/Title";

export default function QuoteRequest() {
  return (
    <div>
      <Title title="Request for Quote" desc="Fill out these details to send the RFQ" />
      <HStack className="flex flex-row justify-between gap-4 mt-8">
        <CustomInput disabled mainContainer="flex-1" label="RFQ-10234" placeholder="RFQ-10234" />
        <CustomInput disabled mainContainer="flex-1" label="Title" placeholder="Request for Equipments" />
      </HStack>

      <HStack className="flex flex-row justify-between gap-4 mt-6">
        <div className="flex-1">
          <CustomInput
            disabled
            mainContainer="flex-1"
            label="Department"
            placeholder="Maternity"
            TrailingComponent={<img src={ICONS.x} className="h-[18px] w-[18px]" />}
          />
          <div className="h-[22px]" />
        </div>
        <div className="flex-1">
          <CustomInput
            disabled
            mainContainer="w-full"
            label="Expected delivery date"
            placeholder="2024-12-02"
            LeadingComponent={<img src={ICONS.newCalendar} className="h-[18px] w-[18px]" />}
          />
          <label className="text-left mb-[4px] font-satoshi-medium text-xs text-gray-500">
            Calculated based on lead time and issue date
          </label>
        </div>
      </HStack>

      <Divider />
      <AddItems />
    </div>
  );
}
