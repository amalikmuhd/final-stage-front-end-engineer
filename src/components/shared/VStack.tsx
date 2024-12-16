interface VStackProps {
  className?: string;
  children?: React.ReactNode | undefined;
}

export function VStack({ className, children }: VStackProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
