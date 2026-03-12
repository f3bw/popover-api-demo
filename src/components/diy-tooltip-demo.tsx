"use client";

/**
 * DIYTooltipDemo — what you write when you don't have a library and the
 * browser doesn't natively own the popover model.
 *
 * Features implemented manually so the browser-native version can skip them:
 *   1. Open/close state (useState)
 *   2. Click-outside detection (useEffect + document listener)
 *   3. Escape key handling (useEffect + document listener)
 *   4. Focus return to trigger after close (useRef + focus())
 *   5. aria-expanded synchronisation (manual attribute on the trigger)
 *   6. aria-hidden on the tooltip element
 *   7. Positioning via getBoundingClientRect
 */

import { useState, useEffect, useRef, useCallback } from "react";

interface Position {
  top: number;
  left: number;
}

function useDIYTooltip() {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState<Position>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    if (!triggerRef.current) return;
    // getBoundingClientRect returns viewport-relative coords.
    // position:fixed is also viewport-relative — no scroll offset needed.
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // ── 4. Return focus to the trigger
    triggerRef.current?.focus();
  }, []);

  // ── 2. Click-outside
  useEffect(() => {
    if (!isOpen) return;
    function onMouseDown(e: MouseEvent) {
      if (
        contentRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      )
        return;
      setIsOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isOpen]);

  // ── 3. Escape key
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return { isOpen, pos, open, close, triggerRef, contentRef };
}

// ─── Stats shown in the UI ───────────────────────────────────────────────────
const diyItems = [
  { n: "useState", label: "open/close state", color: "text-red-400" },
  { n: "useRef ×2", label: "trigger + content refs", color: "text-orange-400" },
  { n: "useEffect ×2", label: "click-outside + Escape", color: "text-yellow-400" },
  { n: "getBoundingClientRect", label: "manual positioning", color: "text-orange-400" },
  { n: "aria-expanded", label: "manual ARIA sync", color: "text-red-400" },
  { n: "focus()", label: "manual focus return", color: "text-orange-400" },
];

export function DIYTooltipDemo() {
  const { isOpen, pos, open, close, triggerRef, contentRef } = useDIYTooltip();

  return (
    <div className="space-y-5">
      {/* ── What's required ── */}
      <div className="grid grid-cols-2 gap-2">
        {diyItems.map((item) => (
          <div
            key={item.n}
            className="flex items-start gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs"
          >
            <span className={`font-mono font-medium shrink-0 ${item.color}`}>
              {item.n}
            </span>
            <span className="text-zinc-500">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── Live demo ── */}
      <div className="demo-stage">
        <div className="flex flex-col items-center gap-3">
          <button
            ref={triggerRef}
            onClick={() => (isOpen ? close() : open())}
            aria-expanded={isOpen}
            aria-controls="diy-tooltip"
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm text-zinc-100 transition-colors"
          >
            Save
          </button>
          <span className="text-xs text-zinc-600">
            Click &middot; Esc to close &middot; click outside to close
          </span>
        </div>
      </div>

      {/* Rendered outside the demo-stage so fixed positioning is correct */}
      {isOpen && (
        <div
          ref={contentRef}
          id="diy-tooltip"
          role="tooltip"
          style={{
            position: "fixed",
            top: pos.top,
            left: pos.left,
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
          className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-xs text-zinc-300 shadow-xl w-52 pointer-events-none"
        >
          <p className="font-medium text-zinc-100 mb-1">Keyboard shortcut</p>
          <p className="text-zinc-400">
            Press{" "}
            <kbd className="px-1 py-0.5 rounded bg-zinc-700 border border-zinc-600 font-mono text-xs">
              Ctrl
            </kbd>
            +
            <kbd className="px-1 py-0.5 rounded bg-zinc-700 border border-zinc-600 font-mono text-xs">
              S
            </kbd>{" "}
            to save.
          </p>
          <p className="text-zinc-600 mt-2">~60 lines of boilerplate</p>
        </div>
      )}

      <p className="text-xs text-zinc-600">
        Open/close, Escape, click-outside, focus return, and aria-expanded —
        all written by hand. This is what a library wraps.
      </p>
    </div>
  );
}
