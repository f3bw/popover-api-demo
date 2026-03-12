/**
 * CSSHooksDemo — demonstrates the three CSS primitives the Popover API
 * exposes, all with zero JavaScript:
 *
 *   [popover]            hidden by default (UA stylesheet)
 *   [popover]:popover-open   state selector — no class toggling
 *   [popover]::backdrop  optional scrim — no portal or overlay component
 */

export function CSSHooksDemo() {
  return (
    <div className="space-y-8">
      {/* ── 1. :popover-open state selector ── */}
      <div className="space-y-3">
        <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
          :popover-open — style on state, not on class
        </p>
        <p className="text-xs text-zinc-600 leading-relaxed">
          No{" "}
          <code className="text-zinc-400">
            className={"{isOpen ? 'visible' : 'hidden'}"}
          </code>{" "}
          toggling. The browser sets{" "}
          <code className="text-zinc-400">:popover-open</code> when the
          popover is in the top layer.
        </p>

        <div className="demo-stage" style={{ position: "relative", overflow: "visible" }}>
          <div className="flex flex-col items-center gap-3">
            <button
              popoverTarget="css-demo-state"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm text-zinc-100 transition-colors cursor-pointer"
            >
              Open styled popover
            </button>
            <span className="text-xs text-zinc-600">
              No JS — the border colour comes from <code>:popover-open</code>
            </span>
          </div>

          <div
            id="css-demo-state"
            popover="auto"
            className="css-state-popover"
          >
            <p className="text-sm font-medium text-zinc-100 mb-1">
              Styled via <code className="text-violet-400">:popover-open</code>
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The violet border and glow are applied purely in CSS using the{" "}
              <code className="text-violet-400">:popover-open</code> selector.
              No JS, no class toggling.
            </p>
          </div>
        </div>
      </div>

      {/* ── 2. ::backdrop ── */}
      <div className="space-y-3">
        <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
          ::backdrop — overlay without a portal
        </p>
        <p className="text-xs text-zinc-600 leading-relaxed">
          In the past you&apos;d render a separate{" "}
          <code className="text-zinc-400">&lt;div className=&quot;overlay&quot;&gt;</code>{" "}
          in a React portal and manage its z-index manually. The browser
          generates{" "}
          <code className="text-zinc-400">::backdrop</code> automatically for
          every popover in the top layer.
        </p>

        <div className="demo-stage">
          <div className="flex flex-col items-center gap-3">
            <button
              popoverTarget="css-demo-backdrop"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm text-zinc-100 transition-colors cursor-pointer"
            >
              Open with backdrop
            </button>
            <span className="text-xs text-zinc-600">
              The scrim behind is <code>::backdrop</code>, not a portal div
            </span>
          </div>

          <div
            id="css-demo-backdrop"
            popover="auto"
            className="css-backdrop-popover"
          >
            <p className="text-sm font-medium text-zinc-100 mb-1.5">
              No portal. No z-index juggling.
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The scrim is rendered by the browser via{" "}
              <code className="text-violet-400">::backdrop</code>. It sits
              below the popover in the top layer automatically.
            </p>
            <button
              popoverTarget="css-demo-backdrop"
              popoverTargetAction="hide"
              className="mt-3 text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Entry animation ── */}
      <div className="space-y-3">
        <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
          @starting-style — animate from hidden
        </p>
        <p className="text-xs text-zinc-600 leading-relaxed">
          <code className="text-zinc-400">@starting-style</code> lets you
          define the <em>from</em> state for an element that didn&apos;t
          exist in the DOM yet — enabling entry animations without any
          JavaScript. Exit animations pair with{" "}
          <code className="text-zinc-400">transition-behavior: allow-discrete</code>.
        </p>

        <div className="demo-stage">
          <div className="flex flex-col items-center gap-3">
            <button
              popoverTarget="css-demo-anim"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm text-zinc-100 transition-colors cursor-pointer"
            >
              Open animated popover
            </button>
            <span className="text-xs text-zinc-600">
              Fade + slide — pure CSS, no framer-motion
            </span>
          </div>

          <div
            id="css-demo-anim"
            popover="auto"
            className="css-anim-popover"
          >
            <p className="text-sm font-medium text-zinc-100 mb-1">
              CSS-only animation
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The fade and slide use{" "}
              <code className="text-violet-400">@starting-style</code> for
              the entry and{" "}
              <code className="text-violet-400">transition-behavior: allow-discrete</code>{" "}
              to animate the exit through the{" "}
              <code className="text-violet-400">display: none</code>{" "}
              boundary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
