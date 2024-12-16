import Text from "./Text";

interface CircleProps {
  name?: string;
  className?: string;
  textStyle?: string;
}

export default function Circle({ name, className, textStyle }: CircleProps) {
  return (
    <div className={`bg-[#FFECE5] flex flex-row items-center justify-center rounded-full w-8 h-8 ${className}`}>
      <Text className={`${textStyle} font-satoshi-bold`}>{name}</Text>
    </div>
  );
}
