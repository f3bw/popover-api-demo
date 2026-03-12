"use client";

import React, { useRef, useState } from "react";

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
          style={{ anchorName: "--manual-trigger" } as React.CSSProperties}
          className="px-4 py-2 rounded-lg bg-amber-700 hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
        >
          Show notification
        </button>
        <button
          onClick={hide}
          disabled={!isOpen}
          className="px-4 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 disabled:opacity-40 disabled:cursor-not-allowed text-stone-700 text-sm font-medium transition-colors"
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
          <p className="text-sm font-medium text-stone-900 mb-1">Manual mode</p>
          <p className="text-xs text-stone-500 leading-relaxed">
            This popover will{" "}
            <strong className="text-stone-700">not</strong> close on Escape
            or outside click. You own the lifecycle.
          </p>
          <button
            onClick={hide}
            className="mt-3 text-xs text-amber-700 hover:text-amber-600 transition-colors"
          >
            Close via JS &rarr;
          </button>
        </div>
      </div>

      <p className="text-xs text-stone-500">
        State:{" "}
        <code className="text-amber-700">{isOpen ? "open" : "closed"}</code>
        {" "}— synced via the{" "}
        <code className="text-amber-700">toggle</code> event, not a React
        useState workaround.
      </p>
    </div>
  );
}
