import type { PropsWithChildren } from "react";
import { defaultShortcuts, ShortCutsProps } from "../../styles/shortcuts";

export interface StackProps extends PropsWithChildren, ShortCutsProps {
  flex?: boolean;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
  alignItems?: "start" | "end" | "center" | "stretch" | "baseline";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  className?: string;
  radius?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  bg?: string;
  borderColor?: string;
  borderWidth?: 0 | 1 | 2 | 4 | 8;
}

export default function Stack({
  flex,
  direction = "column",
  gap,
  alignItems,
  justifyContent,
  children,
  radius,
  bg,
  className,
  borderColor,
  borderWidth,
  ...props
}: StackProps) {
  const classes = {
    flex: flex ? "flex" : "",
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    }[direction],
    gap: gap ? `gap-${gap}` : "",
    alignItems: alignItems ? `items-${alignItems}` : "",
    justifyContent: justifyContent ? `justify-${justifyContent}` : "",
    radius: radius ? `rounded-${radius}` : "",
    bg: bg ? `bg-${bg}` : "",
    borderColor: borderColor ? `border-${borderColor}` : "",
    borderWidth: borderWidth ? `border-${borderWidth}` : "",
  };

  return (
    <div
      style={defaultShortcuts(props)}
      className={`
        ${classes.flex}
        ${classes.direction}
        ${classes.gap}
        ${classes.alignItems}
        ${classes.justifyContent}
        ${classes.radius}
        ${classes.bg}
        ${classes.borderColor}
        ${classes.borderWidth}
        ${className || ""}
      `.trim()}
    >
      {children}
    </div>
  );
}
