"use client";

import { useRef, useState } from "react";

export function ManualDemo() {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function show() {
    popoverRef.current?.showPopover();
    setIsOpen(true);
  }

  function hide() {
    popoverRef.current?.hidePopover();
    setIsOpen(false);
  }

  // The toggle event fires whenever the popover opens or closes, regardless of
  // how it happened (button, JS call, Escape). For manual popovers Escape
  // doesn't fire, but we keep the handler for symmetry and correctness.
  function onToggle(e: Event & { newState: string }) {
    setIsOpen(e.newState === "open");
  }

  return (
    <div className="space-y-4">
      <div className="demo-stage">
        <button
          onClick={show}
          disabled={isOpen}
          className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
        >
          Show notification
        </button>
        <button
          onClick={hide}
          disabled={!isOpen}
          className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
        >
          Dismiss
        </button>

        {/* popover="manual" — no auto-close on Escape or outside click */}
        <div
          ref={popoverRef}
          id="manual-demo"
          popover="manual"
          // @ts-expect-error – ToggleEvent is not yet in @types/react for popovers
          onToggle={onToggle}
          className="popover-manual"
        >
          <p className="text-sm font-medium text-zinc-100 mb-1">Manual mode</p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            This popover will{" "}
            <strong className="text-zinc-200">not</strong> close on Escape
            or outside click. You own the lifecycle.
          </p>
          <button
            onClick={hide}
            className="mt-3 text-xs text-violet-400 hover:text-violet-300 transition-colors"
          >
            Close via JS &rarr;
          </button>
        </div>
      </div>

      <p className="text-xs text-zinc-500">
        State:{" "}
        <code className="text-violet-400">{isOpen ? "open" : "closed"}</code>
        {" "}— synced via the{" "}
        <code className="text-violet-400">toggle</code> event, not a React
        useState workaround.
      </p>
    </div>
  );
}
