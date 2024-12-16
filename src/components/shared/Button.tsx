import Text from "./Text";
import Stack from "./Stack";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outlined";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  width?: string;
  height?: string;
  className?: string;
  borderColor?: string;
  textColor?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  width,
  height,
  className,
  borderColor = "gray-300",
  textColor = "gray-700",
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-primary border border-primary",
    outlined: `bg-transparent border border-${borderColor} text-${textColor}`,
  };

  const defaultSizes = {
    sm: {
      height: "h-[32px]",
      padding: "px-3",
      fontSize: "text-xs",
      iconSize: "w-4 h-4",
    },
    md: {
      height: "h-[36px]",
      padding: "px-4",
      fontSize: "text-sm",
      iconSize: "w-5 h-5",
    },
    lg: {
      height: "h-[40px]",
      padding: "px-5",
      fontSize: "text-base",
      iconSize: "w-6 h-6",
    },
  };

  const sizeStyles = {
    height: height || defaultSizes[size].height,
    padding: defaultSizes[size].padding,
    fontSize: defaultSizes[size].fontSize,
    iconSize: defaultSizes[size].iconSize,
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variant === "outlined" ? `bg-transparent border border-${borderColor} text-${textColor}` : variants[variant]}
        ${sizeStyles.height}
        ${sizeStyles.padding}
        ${width || "w-fit"}
        rounded-lg
        transition-all
        hover:opacity-90
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className || ""}
      `}
    >
      <Stack direction="row" alignItems="center" gap={2} className="justify-center">
        {icon && iconPosition === "left" && <img src={icon} alt="button icon" className={sizeStyles.iconSize} />}
        <Text fontSize={sizeStyles.fontSize as never} fontFamily="font-satoshi-medium">
          {children}
        </Text>
        {icon && iconPosition === "right" && <img src={icon} alt="button icon" className={sizeStyles.iconSize} />}
      </Stack>
    </button>
  );
}
