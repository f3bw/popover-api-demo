interface CodeLine {
  indent?: number;
  parts: { text: string; cls?: string }[];
}

interface CodeBlockProps {
  lines: CodeLine[];
  label?: string;
}

export function CodeBlock({ lines, label }: CodeBlockProps) {
  return (
    <div className="code-block">
      {label && (
        <div className="px-4 py-2 border-b border-stone-200 bg-stone-100 text-xs text-stone-400 font-mono">
          {label}
        </div>
      )}
      <pre>
        {lines.map((line, i) => (
          <div key={i}>
            {line.indent ? " ".repeat(line.indent * 2) : ""}
            {line.parts.map((part, j) => (
              <span key={j} className={part.cls}>
                {part.text}
              </span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  );
}
