// Shared pieces for the multi-step onboarding screens (profile, connect apps).

export function ProgressBar({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  return (
    <div
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current + 1}
      aria-label={`Step ${current + 1} of ${total}`}
      className="flex gap-2"
    >
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 ${i <= current ? "bg-ink" : "bg-line"}`}
        />
      ))}
    </div>
  );
}

// Pinned to the bottom of the viewport, 50px up from the edge. Render it once
// per screen so the buttons stay in the same place between steps.
export function ActionBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-x-0 bottom-0 flex gap-2 border-t border-line bg-surface-100 px-4 pb-[50px] pt-4">
      {children}
    </div>
  );
}

export const backClass =
  "flex h-12 w-28 items-center justify-center rounded-md border border-line bg-surface-200 text-base font-semibold text-ink";

export const continueClass =
  "h-12 flex-1 rounded-md bg-red text-base font-semibold text-white";
