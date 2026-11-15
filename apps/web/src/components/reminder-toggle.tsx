"use client";

import { useState } from "react";
import { Icon } from "./icon";

export function ReminderToggle({ label }: { label: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={`Reminder for ${label}`}
      onClick={() => setOn((v) => !v)}
      className={`flex h-9 items-center gap-2 rounded-md border px-3 text-sm font-semibold ${
        on ? "border-accent bg-accent text-white" : "border-line text-ink-muted"
      }`}
    >
      <Icon
        d="M6 17v-6a6 6 0 0 1 12 0v6l1.5 1.5h-15L6 17ZM10 21h4"
        className="h-4 w-4"
      />
      {on ? "ON" : "OFF"}
    </button>
  );
}
