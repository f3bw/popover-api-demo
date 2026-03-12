// Extend React's HTML attribute types to include the Popover API attributes,
// which are not yet in @types/react as of early 2026.

import "react";

type PopoverAttribute = "auto" | "manual" | "";

declare module "react" {
  interface HTMLAttributes<T> {
    popover?: PopoverAttribute;
    popoverTarget?: string;
    popoverTargetAction?: "show" | "hide" | "toggle";
    onToggle?: (event: ToggleEvent<T>) => void;
  }
}

interface ToggleEvent<T = Element> extends Event {
  oldState: "open" | "closed";
  newState: "open" | "closed";
  target: T & EventTarget;
}
