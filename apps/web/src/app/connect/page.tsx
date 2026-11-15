"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ActionBar,
  ProgressBar,
  backClass,
  continueClass,
} from "@/components/onboarding";
import {
  DEFAULT_EXTRA,
  INSTALLED_APPS,
  OTHER_APPS,
  iconSrc,
  type App,
} from "./apps";

const STEPS = ["On your device", "Search other apps"];

const rowClass =
  "flex h-16 w-full items-center gap-3 rounded-md border border-line bg-surface-200 px-3 text-left";

function AppIcon({ app }: { app: App }) {
  return (
    <Image
      src={iconSrc(app.id)}
      alt=""
      width={40}
      height={40}
      className="h-10 w-10 rounded-md"
    />
  );
}

function Check({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-6 w-6 items-center justify-center rounded-sm border ${
        on ? "border-ink bg-ink" : "border-line"
      }`}
    >
      {on && (
        <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 text-surface-100">
          <path
            d="M2 6.5 5 9.5 10 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      )}
    </span>
  );
}

function CheckRow({
  app,
  on,
  onToggle,
}: {
  app: App;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={on}
      onClick={onToggle}
      className={`${rowClass} ${on ? "border-ink" : ""}`}
    >
      <AppIcon app={app} />
      <span className="flex-1 text-base font-semibold text-ink">
        {app.name}
      </span>
      <Check on={on} />
    </button>
  );
}

export default function Connect() {
  const [step, setStep] = useState(0);
  const [installed, setInstalled] = useState<string[]>([]);
  // Apps added on the search page, and which of them are checked.
  const [extra, setExtra] = useState<string[]>(DEFAULT_EXTRA);
  const [checkedExtra, setCheckedExtra] = useState<string[]>(DEFAULT_EXTRA);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const toggle = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    id: string,
  ) => setter((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const matches = OTHER_APPS.filter(
    (a) =>
      !extra.includes(a.id) &&
      a.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const addExtra = (id: string) => {
    setExtra((s) => [...s, id]);
    setCheckedExtra((s) => [...s, id]);
    setQuery("");
    setOpen(false);
  };

  return (
    <main className="min-h-dvh bg-surface-100 px-4 pb-[160px] pt-6">
      <ProgressBar total={STEPS.length} current={step} />

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Connect your apps · Step {step + 1} of {STEPS.length}
      </p>
      <h1 className="mt-2 text-4xl font-extrabold leading-10 text-ink">
        {STEPS[step]}
      </h1>
      <p className="mt-2 text-base text-ink-muted">
        {step === 0
          ? "Pick the apps your coach can pull training and recovery data from."
          : "Don't see yours? Search for it and add it."}
      </p>

      {step === 0 ? (
        <ul className="mt-8 flex flex-col gap-2">
          {INSTALLED_APPS.map((app) => {
            const on = installed.includes(app.id);
            return (
              <li key={app.id}>
                <CheckRow
                  app={app}
                  on={on}
                  onToggle={() => toggle(setInstalled, app.id)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Search apps
          </p>
          <div className="relative">
            <input
              role="combobox"
              aria-expanded={open}
              aria-controls="app-options"
              autoComplete="off"
              value={query}
              placeholder="Search for an app"
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (matches[0]) addExtra(matches[0].id);
                }
                if (e.key === "Escape") setOpen(false);
              }}
              className="h-12 w-full rounded-sm border border-line bg-surface-200 px-3 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
            />
            {open && (
              <ul
                id="app-options"
                role="listbox"
                className="absolute inset-x-0 top-14 z-10 max-h-64 overflow-y-auto rounded-md border border-line bg-surface-300"
              >
                {matches.length === 0 ? (
                  <li className="px-3 py-4 text-base text-ink-muted">
                    No apps found
                  </li>
                ) : (
                  matches.map((app) => (
                    <li key={app.id} role="option" aria-selected={false}>
                      <button
                        type="button"
                        // keep focus in the input so onBlur doesn't close the list first
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => addExtra(app.id)}
                        className="flex h-14 w-full items-center gap-3 border-b border-line px-3 text-left last:border-b-0"
                      >
                        <AppIcon app={app} />
                        <span className="text-base text-ink">{app.name}</span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

          {extra.length > 0 && (
            <>
              <p className="mb-2 mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Added
              </p>
              <ul className="flex flex-col gap-2">
                {extra.map((id) => {
                  const app = OTHER_APPS.find((a) => a.id === id)!;
                  return (
                    <li key={id}>
                      <CheckRow
                        app={app}
                        on={checkedExtra.includes(id)}
                        onToggle={() => toggle(setCheckedExtra, id)}
                      />
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      )}

      <ActionBar>
        {step === 0 ? (
          <Link href="/profile" className={backClass}>
            Back
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              setStep(0);
              window.scrollTo(0, 0);
            }}
            className={backClass}
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            if (step === 0) {
              setStep(1);
              window.scrollTo(0, 0);
            }
          }}
          className={continueClass}
        >
          Continue
        </button>
      </ActionBar>
    </main>
  );
}
