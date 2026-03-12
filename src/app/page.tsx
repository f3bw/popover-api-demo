import { ManualDemo } from "@/components/manual-demo";
import { MultiplePopovers } from "@/components/multiple-popovers";
import { DIYTooltipDemo } from "@/components/diy-tooltip-demo";
import { CSSHooksDemo } from "@/components/css-hooks-demo";
import { CodeBlock } from "@/components/code-block";

// ─── Library weight comparison data ─────────────────────────────────────────
// Source: bundlephobia.com — min+gzip sizes as of early 2026
const libraryWeights = [
  {
    name: "@radix-ui/react-tooltip",
    size: "7.9 kB",
    note: "tooltip primitive only",
  },
  {
    name: "@floating-ui/react",
    size: "11.8 kB",
    note: "required for positioning",
  },
  {
    name: "tippy.js + @popperjs/core",
    size: "14.2 kB",
    note: "combined min+gzip",
  },
  {
    name: "react-tooltip",
    size: "9.4 kB",
    note: "standalone tooltip lib",
  },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-20 space-y-24">
      {/* ── Hero ── */}
      <header className="space-y-5">
        <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">
          Popover API
        </p>
        <h1 className="text-4xl tracking-tight text-stone-900 leading-tight">
          The browser already
          <br />
          understands popovers.
        </h1>
        <p className="text-stone-500 leading-relaxed max-w-xl">
          What happens if you rebuild a tooltip using the browser&apos;s native
          model — without a library? Opening and closing, keyboard interaction,
          Escape handling, and much of the accessibility now come from the
          platform itself, not from ad-hoc JavaScript.
        </p>
      </header>

      {/* ── The library tax ── */}
      <section className="space-y-6">
        <SectionLabel label="01" />
        <h2 className="text-xl text-stone-900">
          What you used to reach for
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          A single accessible tooltip used to require one or more of these. Each
          solves a real problem the browser didn&apos;t own. Now it does.
        </p>

        <div className="divide-y divide-stone-200 border border-stone-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 px-4 py-2.5 bg-stone-100 text-xs text-stone-400 font-mono">
            <span>package</span>
            <span>min+gzip</span>
            <span>why it existed</span>
          </div>
          {libraryWeights.map((lib) => (
            <div
              key={lib.name}
              className="grid grid-cols-3 px-4 py-3 text-sm hover:bg-stone-50 transition-colors"
            >
              <code className="text-stone-800 text-xs">{lib.name}</code>
              <span className="text-amber-700 font-mono text-xs">
                {lib.size}
              </span>
              <span className="text-stone-400 text-xs">{lib.note}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-stone-400">
          These libraries are well-engineered — but when the need is a simple
          tooltip with keyboard support and ARIA, the browser now covers that.
        </p>

        {/* DIY tooltip — live demo of what a library wraps */}
        <div className="space-y-3">
          <p className="text-xs text-stone-400 font-medium uppercase tracking-widest">
            DIY approach — no library, just React
          </p>
          <p className="text-stone-500 text-sm leading-relaxed">
            Before libraries (and before the browser owned this), this is what
            you wrote. Every feature below is a hand-rolled workaround for
            something the browser didn&apos;t understand.
          </p>
          <DIYTooltipDemo />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-stone-200" />
        <span className="text-stone-400 text-xs font-mono">vs</span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>

      {/* ── The native equivalent ── */}
      <section className="space-y-6">
        <SectionLabel label="02" />
        <h2 className="text-xl text-stone-900">
          The native equivalent
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          Libraries like Radix UI wrapped all that DIY machinery into a clean
          API. That was a real improvement. But now the browser owns those same
          semantics — so the library exists to solve a problem that no longer
          exists.
        </p>

        {/* Radix vs Native code comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-2">
            <p className="text-xs text-stone-400 font-mono">
              library — @radix-ui/react-tooltip
            </p>
            <CodeBlock
              lines={[
                {
                  parts: [
                    { text: "<", cls: "token-tag" },
                    { text: "TooltipProvider", cls: "token-fn" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  indent: 1,
                  parts: [
                    { text: "<", cls: "token-tag" },
                    { text: "Tooltip", cls: "token-fn" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  indent: 2,
                  parts: [
                    { text: "<", cls: "token-tag" },
                    { text: "TooltipTrigger", cls: "token-fn" },
                    { text: " ", cls: "token-tag" },
                    { text: "asChild", cls: "token-attr" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  indent: 3,
                  parts: [
                    { text: "<", cls: "token-tag" },
                    { text: "button", cls: "token-tag" },
                    { text: ">", cls: "token-tag" },
                    { text: "Save" },
                    { text: "</", cls: "token-tag" },
                    { text: "button", cls: "token-tag" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  indent: 2,
                  parts: [
                    { text: "</", cls: "token-tag" },
                    { text: "TooltipTrigger", cls: "token-fn" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  indent: 2,
                  parts: [
                    { text: "<", cls: "token-tag" },
                    { text: "TooltipContent", cls: "token-fn" },
                    { text: ">", cls: "token-tag" },
                    { text: "Ctrl+S" },
                    { text: "</", cls: "token-tag" },
                    { text: "TooltipContent", cls: "token-fn" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  indent: 1,
                  parts: [
                    { text: "</", cls: "token-tag" },
                    { text: "Tooltip", cls: "token-fn" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  parts: [
                    { text: "</", cls: "token-tag" },
                    { text: "TooltipProvider", cls: "token-fn" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                { parts: [{ text: "" }] },
                {
                  parts: [
                    { text: "// +7.9 kB · +deps · Provider in root", cls: "token-cmt" },
                  ],
                },
              ]}
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs text-stone-400 font-mono">
              native — 0 kB of JavaScript
            </p>
            <CodeBlock
              lines={[
                {
                  parts: [
                    { text: "<", cls: "token-tag" },
                    { text: "button", cls: "token-tag" },
                    { text: " ", cls: "token-tag" },
                    { text: "popovertarget", cls: "token-attr" },
                    { text: '="save-tip"', cls: "token-value" },
                    { text: ">", cls: "token-tag" },
                    { text: "Save" },
                    { text: "</", cls: "token-tag" },
                    { text: "button", cls: "token-tag" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  parts: [
                    { text: "<", cls: "token-tag" },
                    { text: "div", cls: "token-tag" },
                    { text: " ", cls: "token-tag" },
                    { text: "id", cls: "token-attr" },
                    { text: '="save-tip"', cls: "token-value" },
                    { text: " ", cls: "token-tag" },
                    { text: "popover", cls: "token-attr" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                {
                  indent: 1,
                  parts: [{ text: "Ctrl+S" }],
                },
                {
                  parts: [
                    { text: "</", cls: "token-tag" },
                    { text: "div", cls: "token-tag" },
                    { text: ">", cls: "token-tag" },
                  ],
                },
                { parts: [{ text: "" }] },
                {
                  parts: [
                    { text: "// 0 kB · escape · outside-click · aria", cls: "token-cmt" },
                  ],
                },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Escape handling",
            "aria-expanded sync",
            "outside click close",
            "focus return",
            "popover stack",
          ].map((feat) => (
            <span
              key={feat}
              className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-700"
            >
              {feat} — browser
            </span>
          ))}
        </div>

        {/* Live demo */}
        <div className="space-y-3">
          <p className="text-xs text-stone-400 font-medium uppercase tracking-widest">
            Live demo — declarative, zero JS
          </p>
          <div className="demo-stage">
            <div className="flex flex-col items-center gap-3">
              <button
                popoverTarget="demo-tip-1"
                className="px-4 py-2 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-sm text-stone-800 transition-colors cursor-pointer shadow-sm"
              >
                Save
              </button>
              <span className="text-xs text-stone-400">
                Click to toggle &middot; Esc to close &middot; click outside to close
              </span>
            </div>

            <div id="demo-tip-1" popover="auto" className="popover-card">
              <p className="text-sm font-medium text-stone-900 mb-1.5">
                Keyboard shortcut
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                Press{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-xs border border-stone-300">
                  Ctrl
                </kbd>
                +
                <kbd className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-xs border border-stone-300">
                  S
                </kbd>{" "}
                to save.
              </p>
              <p className="text-xs text-stone-400 mt-3">
                No JS. aria-expanded managed by the browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── auto vs manual ── */}
      <section className="space-y-6">
        <SectionLabel label="03" />
        <h2 className="text-xl text-stone-900">
          <code className="text-amber-700 text-lg font-mono">auto</code> vs{" "}
          <code className="text-amber-700 text-lg font-mono">manual</code>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            title='popover="auto"'
            features={[
              "Closes on Escape",
              "Closes on outside click",
              "One open at a time (stack)",
              "aria-expanded managed",
              "Zero JavaScript needed",
            ]}
          />
          <FeatureCard
            title='popover="manual"'
            variant="muted"
            features={[
              "You control open/close",
              "Escape does nothing",
              "Outside click does nothing",
              "Multiple can be open",
              "Use for: notifications, toasts",
            ]}
          />
        </div>

        <div className="space-y-3">
          <p className="text-xs text-stone-400 font-medium uppercase tracking-widest">
            Live demo — manual mode
          </p>
          <ManualDemo />
        </div>
      </section>

      {/* ── Multiple popovers ── */}
      <section className="space-y-6">
        <SectionLabel label="04" />
        <h2 className="text-xl text-stone-900">
          The browser manages the stack
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          With <code className="text-amber-700">popover=&quot;auto&quot;</code>,
          opening a new popover automatically closes the previous one. This is
          the browser&apos;s native{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/Top_layer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-600 underline underline-offset-2"
          >
            top-layer
          </a>{" "}
          stack — the same mechanism used by{" "}
          <code className="text-amber-700">&lt;dialog&gt;</code>.
        </p>
        <MultiplePopovers />
      </section>

      {/* ── CSS hooks ── */}
      <section className="space-y-6">
        <SectionLabel label="05" />
        <h2 className="text-xl text-stone-900">
          CSS you get for free
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          Three CSS primitives ship with the Popover API. No class toggling, no{" "}
          <code className="text-amber-700">data-state</code> attributes, no
          portal components, no animation libraries.
        </p>

        <CSSHooksDemo />
      </section>

      {/* ── toggle event ── */}
      <section className="space-y-6">
        <SectionLabel label="06" />
        <h2 className="text-xl text-stone-900">
          The <code className="text-amber-700 font-mono">toggle</code> event
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          When you do need JavaScript — to sync external state, fire analytics,
          or run an animation — the{" "}
          <code className="text-amber-700">toggle</code> event gives you a
          reliable signal regardless of <em>how</em> the popover was opened or
          closed (Escape, outside click, JS call, or button press).
        </p>
        <CodeBlock
          label="toggle-event.ts"
          lines={[
            {
              parts: [
                { text: "const ", cls: "token-kw" },
                { text: "pop = document." },
                { text: "getElementById", cls: "token-fn" },
                { text: '("my-popover");' },
              ],
            },
            { parts: [{ text: "" }] },
            {
              parts: [
                { text: "pop." },
                { text: "addEventListener", cls: "token-fn" },
                { text: '("toggle", (e) => {' },
              ],
            },
            {
              indent: 1,
              parts: [
                { text: "if ", cls: "token-kw" },
                { text: "(e.newState === " },
                { text: '"open"', cls: "token-str" },
                { text: ") {" },
              ],
            },
            {
              indent: 2,
              parts: [
                { text: "analytics.", cls: "token-fn" },
                { text: "track(" },
                { text: '"popover_opened"', cls: "token-str" },
                { text: ");" },
              ],
            },
            { indent: 1, parts: [{ text: "}" }] },
            {
              indent: 1,
              parts: [
                { text: "// e.oldState, e.newState: 'open' | 'closed'", cls: "token-cmt" },
              ],
            },
            { parts: [{ text: "});" }] },
          ]}
        />
      </section>

      {/* ── When libraries are still worth it ── */}
      <section className="space-y-6">
        <SectionLabel label="07" />
        <h2 className="text-xl text-stone-900">
          When a library is still the right call
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          The Popover API doesn&apos;t do everything. Three real cases where a
          library earns its weight:
        </p>

        <div className="space-y-4">
          <LibraryStillWorthIt
            title="Collision detection across scroll containers"
            description="CSS Anchor Positioning (the companion spec) is still new and has known issues in nested scroll contexts. Libraries like Floating UI handle flip, shift, and overflow detection robustly across all browsers today."
            lib="@floating-ui/react"
          />
          <LibraryStillWorthIt
            title="Complex design systems requiring animation contracts"
            description="If your design system specifies shared enter/exit animation curves, mount/unmount lifecycle hooks, or compound components with shared context, Radix or Headless UI provide the right primitives."
            lib="@radix-ui/react-*"
          />
          <LibraryStillWorthIt
            title="Hover-triggered tooltips with entry/exit delay"
            description="popovertarget is toggle-on-click. True hover tooltips with enter/exit delays still require a small amount of JavaScript — though now that JS only manages timing, not ARIA or dismissal."
            lib="custom useTooltip hook"
          />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pt-12 border-t border-stone-200 text-xs text-stone-400 space-y-2">
        <p>
          Browser support: Chrome 114+, Firefox 125+, Safari 17+ &mdash;{" "}
          <a
            href="https://caniuse.com/mdn-html_global_attributes_popover"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-600 underline underline-offset-2"
          >
            caniuse
          </a>
        </p>
        <p>
          Further reading:{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-600 underline underline-offset-2"
          >
            MDN Popover API
          </a>
          {" · "}
          <a
            href="https://www.smashingmagazine.com/2026/03/getting-started-popover-api/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-600 underline underline-offset-2"
          >
            Smashing Magazine
          </a>
        </p>
      </footer>
    </main>
  );
}

// ─── Local components ────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return <span className="font-mono text-xs text-stone-400">{label}</span>;
}

function FeatureCard({
  title,
  features,
  variant = "default",
}: {
  title: string;
  features: string[];
  variant?: "default" | "muted";
}) {
  const accent =
    variant === "default"
      ? "bg-amber-50 border-amber-200"
      : "bg-stone-100 border-stone-200";
  const dotColor =
    variant === "default" ? "bg-amber-600" : "bg-stone-400";

  return (
    <div className={`rounded-lg border p-4 space-y-3 ${accent}`}>
      <code className="text-sm font-medium text-stone-800">{title}</code>
      <ul className="space-y-1.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-stone-500">
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor}`}
            />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LibraryStillWorthIt({
  title,
  description,
  lib,
}: {
  title: string;
  description: string;
  lib: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-lg border border-stone-200 bg-stone-50">
      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
      <div className="space-y-1.5 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium text-stone-800">{title}</p>
          <code className="text-xs text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
            {lib}
          </code>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
