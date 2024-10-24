import { DirectionProvider } from "@radix-ui/react-direction";

export function RadixDirectionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DirectionProvider dir="rtl">{children}</DirectionProvider>;
}
