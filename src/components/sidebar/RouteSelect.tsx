import Text from "../shared/Text";

interface RouteSelectProps {
  name?: string;
  src?: string;
  icon?: React.ReactNode;
  active?: boolean;
}
export default function RouteSelect({ src, name, icon, active = true }: RouteSelectProps) {
  return (
    <div
      className={`w-full flex flex-row py-3 h-[40px] px-2 mb-1 rounded-[4px] gap-2 items-center justify-between cursor-pointer ${
        active ? "bg-selected" : "transparent"
      }`}
    >
      <div className="flex flex-row items-center gap-3">
        {src ? <img src={src} className="w-[20px] h-[20px]" /> : <div className="w-[20px] h-[20px]" />}
        <Text className={`${active ? "font-satoshi-bold" : "font-satoshi-light"} text-sm text-gray-700`}>{name}</Text>
      </div>
      <div>{icon}</div>
    </div>
  );
}
