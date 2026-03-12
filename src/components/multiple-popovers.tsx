"use client";

// No JS needed for the auto-close behaviour — this file only exists to
// show the demo in an interactive way; the actual behaviour is browser-native.

const items = [
  {
    id: "pop-a",
    label: "Accessibility",
    content:
      "aria-expanded is managed automatically. Screen readers hear the correct state without a line of JavaScript.",
  },
  {
    id: "pop-b",
    label: "Escape key",
    content:
      "The browser closes the topmost auto popover on Escape. No keydown listener needed.",
  },
  {
    id: "pop-c",
    label: "One at a time",
    content:
      "Opening a new auto popover closes any previously open one. This is the browser's native popover stack.",
  },
];

export function MultiplePopovers() {
  return (
    <div className="space-y-4">
      <div className="demo-stage">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <button
              popoverTarget={item.id}
              className="px-4 py-2 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-sm text-stone-800 transition-colors cursor-pointer shadow-sm"
            >
              {item.label}
            </button>
            <div id={item.id} popover="auto" className="popover-card">
              <p className="font-medium text-sm text-stone-900 mb-1.5">
                {item.label}
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-stone-500">
        Open one, then open another. The first closes automatically — zero
        JavaScript.
      </p>
    </div>
  );
}
