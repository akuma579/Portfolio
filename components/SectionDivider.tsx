// Decorative diagonal divider between sections
export default function SectionDivider() {
  return (
    <div className="relative px-6 py-2 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, var(--border-medium))" }} />
        <div className="flex gap-1.5">
          {[0,1,2].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full"
              style={{ background: "var(--accent-primary)", opacity: 0.3 + i * 0.2 }} />
          ))}
        </div>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, var(--border-medium))" }} />
      </div>
    </div>
  );
}
