import Text from "../../../shared/Text";

interface TitleProps {
  title?: string;
  desc?: string;
}

export default function Title({ title, desc }: TitleProps) {
  return (
    <div>
      <Text fontSize="text-2xl" fontFamily="font-satoshi-bold">
        {title}
      </Text>
      <Text fontSize="text-sm" className="font-satoshi-light text-gray-500">
        {desc}
      </Text>
    </div>
  );
}
