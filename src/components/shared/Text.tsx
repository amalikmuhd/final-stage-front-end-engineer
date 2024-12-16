interface TextProps {
  fontSize?:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  fontFamily?: "font-satoshi-regular" | "font-satoshi-light" | "font-satoshi-medium" | "font-satoshi-bold";
  children?: React.ReactNode;
  className?: string;
}

export default function Text({ fontSize, fontFamily, className, children }: TextProps) {
  return <p className={`${fontSize || ""} ${fontFamily || ""} ${className || ""}`}>{children}</p>;
}
