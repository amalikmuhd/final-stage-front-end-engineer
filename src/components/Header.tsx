import Stack from "./shared/Stack";
import Text from "./shared/Text";
import IconButton from "./shared/IconButton";
import ICONS from "../constant/icon";
import { HStack } from "./shared/HStack";

interface CustomHeaderProps {
  goBack?: boolean;
}

const CustomHeader = ({ goBack = true }: CustomHeaderProps) => {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-8 border border-b-gray-100 rounded-tl-xl">
      <Stack flex direction="row" alignItems="center" gap={2}>
        {goBack && (
          <>
            <img src={ICONS.chevronLeft} alt="back" className="w-[20px] h-[20px]" />
            <Text className="font-satoshi-medium text-sm text-gray-500">Back</Text>
          </>
        )}
      </Stack>

      <HStack className="flex flex-row items-center gap-10">
        <div className="flex flex-row items-center w-[450px] border-border rounded-lg border gap-2 pl-3">
          <IconButton src={ICONS.search} alt="bell icon" width={20} height={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="font-satoshi-medium text-gray-500 py-2 focus:outline-none"
          />
        </div>
        <Stack flex direction="row" alignItems="center" gap={4}>
          <IconButton src={ICONS.bell} alt="bell icon" width={31} height={32} />
          <IconButton src={ICONS.chats} alt="chats icon" width={31} height={32} />
          <Stack flex direction="row" alignItems="center" gap={2}>
            <IconButton src={ICONS.avatar} alt="avatar icon" width={31} height={32} />
            <IconButton src={ICONS.chevronDown} alt="down icon" width={18} height={18} />
          </Stack>
        </Stack>
      </HStack>
    </div>
  );
};

export default CustomHeader;
