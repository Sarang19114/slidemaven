"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

const CustomSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "relative flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border border-gray-400 bg-gray-300 shadow-inner transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
      className
    )}
    {...props}
    ref={ref}
  >
    {/* Sun Icon (Light Mode) */}
    <Sun
      className={cn(
        "absolute left-2 h-5 w-5 text-yellow-500 transition-opacity duration-300 ease-in-out",
        "data-[state=checked]:opacity-0 data-[state=unchecked]:opacity-100"
      )}
    />

    {/* Toggle Thumb (Moving Part) */}
    <SwitchPrimitives.Thumb
      className={cn(
        "absolute left-1 h-6 w-6 z-50 rounded-full bg-white shadow-md ring-0 transition-transform duration-300 ease-in-out transform",
        "data-[state=checked]:translate-x-11 data-[state=unchecked]:translate-x-0"
      )}
    />

    {/* Moon Icon (Dark Mode) */}
    <Moon
      className={cn(
        "absolute right-2 h-5 w-5 text-gray-600 transition-opacity duration-300 ease-in-out",
        "data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-0"
      )}
    />
  </SwitchPrimitives.Root>
));
CustomSwitch.displayName = "CustomSwitch";

export { CustomSwitch };
