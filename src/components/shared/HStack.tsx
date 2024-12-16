// import Stack, { type StackProps } from "./Stack";
// import { PropsWithChildren } from "react";
// interface HStackProps extends StackProps {}
interface HStackProps {
  className?: string;
  children?: React.ReactNode | undefined;
}

export function HStack({ className, children }: HStackProps) {
  return <div className={`flex flex-row items-center ${className}`}>{children}</div>;
}
