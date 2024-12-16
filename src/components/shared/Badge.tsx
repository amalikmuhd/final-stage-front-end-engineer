import Text from "./Text";

interface BadgeProps {
  name?: string;
}

export default function Badge({ name }: BadgeProps) {
  return (
    <div className="bg-orange-light flex flex-row items-center justify-center rounded-full px-2">
      <Text className="text-xs text-orange font-satoshi-medium">{name}</Text>
    </div>
  );
}
