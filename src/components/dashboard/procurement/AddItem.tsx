import { useState } from "react";
import CustomInput from "../../CustomInput";
import { HStack } from "../../shared/HStack";
import Text from "../../shared/Text";
import { VStack } from "../../shared/VStack";
import ICONS from "../../../constant/icon";
import Divider from "../../Divider";
import { addItemData } from "../../../assets/data";

interface ItemRow {
  item: string;
  variant: string;
  quantity: string;
  unit: string;
  price: string;
  deliveryDate: string;
  amount: string;
}

export default function AddItems() {
  const [items, setItems] = useState<ItemRow[]>(addItemData);

  const handleDeleteRow = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const [noteText, setNoteText] = useState("");

  return (
    <VStack className="w-full">
      <Text className="text-base mb-4 font-medium">Add Items</Text>

      <HStack className="w-full grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_40px] gap-4 mb-4 bg-[#F7F9FC] py-2 px-4">
        <Text className="text-sm text-[#475367]">Items</Text>
        <Text className="text-sm text-[#475367]">Variant</Text>
        <Text className="text-sm text-[#475367]">Quantity</Text>
        <Text className="text-sm text-[#475367]">Price</Text>
        <Text className="text-sm text-[#475367]">Expected delivery date</Text>
        <Text className="text-sm text-[#475367]">Amount</Text>
        <div />
      </HStack>

      {/* Item Rows */}
      {items.map((item, index) => (
        <HStack key={index} className="w-full grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_40px] gap-4 mb-4">
          <div className="relative">
            <CustomInput
              disabled
              placeholder={item.item}
              mainContainer="w-full"
              TrailingComponent={
                <img
                  src={ICONS.chevronDown}
                  alt="Select"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 pointer-events-none"
                />
              }
            />
          </div>

          <div className="relative">
            <CustomInput
              type="select"
              value={item.variant}
              placeholder="Select variant"
              mainContainer="w-full"
              TrailingComponent={
                <img
                  src={ICONS.chevronDown}
                  alt="Select"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
              }
            />
          </div>

          <div className="relative">
            <CustomInput
              value={item.quantity}
              placeholder="0"
              mainContainer="w-full"
              TrailingComponent={
                <HStack className="flex flex-row items-center bg-secondary py-[4px] px-2 rounded gap-1">
                  <Text className="text-xs text-gra-500 font-satoshi-light">Pack</Text>
                </HStack>
              }
            />
          </div>

          <CustomInput
            value={item.price}
            placeholder="0.00"
            mainContainer="w-full"
            LeadingComponent={<img src={ICONS.dollarSign} className="w-5 h-5 mr-2" />}
          />

          <CustomInput
            LeadingComponent={<img src={ICONS.newCalendar} className="w-5 h-5 mr-2" />}
            value={item.deliveryDate}
            mainContainer="w-fit"
          />

          <Text className="text-sm text-gray-700 font-satoshi-medium flex items-center">${item.amount}</Text>

          <button onClick={() => handleDeleteRow(index)} className="p-2 hover:bg-gray-100 rounded-full">
            <img src={ICONS.trash} alt="Delete" className="w-5 h-5" />
          </button>
        </HStack>
      ))}

      {/* Sub Total */}
      <Divider />
      <HStack className="w-[90%] justify-end mt-4">
        <Text className="text-base text-gray-600 font-satoshi-regular">Sub Total</Text>
        <Text className="text-base text-gray-600 font-satoshi-regular ml-8">
          ${items.reduce((sum, item) => sum + parseFloat(item.amount), 0).toFixed(2)}
        </Text>
      </HStack>

      {/* Note Section */}
      <VStack className="w-[50%] mt-4">
        <Text className="text-sm text-gray-700 font-satoshi-bold mb-1">Note</Text>
        <textarea
          placeholder="Enter note here"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          maxLength={200}
          className="w-full h-[120px] p-3 border border-gray-300 text-sm font-satoshi-regular rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-text-tertiary"
        />
        <Text className="text-xs text-gra-500 font-satoshi-medium text-right mt-1">{noteText.length}/200</Text>
      </VStack>
    </VStack>
  );
}
