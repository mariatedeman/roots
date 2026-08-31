// components/ui/info/popover.tsx
import { Popover as TamaguiPopover, PopoverProps } from "tamagui";
import { ReactNode } from "react";

interface CustomPopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  placement?: PopoverProps["placement"];
}

export default function Popover({ trigger, children, placement = "bottom" }: CustomPopoverProps) {
  return (
    <TamaguiPopover placement={placement} offset={{mainAxis: 8, crossAxis: 0}}>
      <TamaguiPopover.Trigger asChild>{trigger}</TamaguiPopover.Trigger>

      <TamaguiPopover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation="quick"
        padding="$3"
      >
        <TamaguiPopover.Arrow />
        {children}
      </TamaguiPopover.Content>
    </TamaguiPopover>
  );
}