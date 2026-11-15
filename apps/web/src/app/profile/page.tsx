"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ActionBar,
  ProgressBar,
  backClass,
  continueClass,
} from "@/components/onboarding";

const inputClass =
  "h-12 w-full rounded-sm border border-line bg-surface-200 px-3 text-base text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </p>
      {children}
      {hint && <p className="mt-2 text-sm text-ink-muted">{hint}</p>}
    </div>
  );
}

function Unit({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute right-3 top-3 text-ink-muted">{children}</span>
  );
}

function Chips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`h-12 flex-1 rounded-sm border px-3 text-base font-semibold ${
            value === o
              ? "border-accent bg-accent text-white"
              : "border-line bg-surface-200 text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

const STEPS = ["Personal info", "Training experience"];

export default function Profile() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [sex, setSex] = useState("");
  const [experience, setExperience] = useState("");
  const [days, setDays] = useState("");

  return (
    <main className="min-h-dvh bg-surface-100 px-4 pb-[160px] pt-6">
      <ProgressBar total={STEPS.length} current={step} />

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Step {step + 1} of {STEPS.length}
      </p>
      <h1 className="mt-2 text-4xl font-extrabold leading-10 text-ink">
        {STEPS[step]}
      </h1>
      <p className="mt-2 text-base text-ink-muted">
        Your coach builds every plan from this.
      </p>

      <form
        id="personal-form"
        className={`mt-8 flex-col gap-6 ${step === 0 ? "flex" : "hidden"}`}
        onSubmit={(e) => {
          e.preventDefault();
          setStep(1);
          window.scrollTo(0, 0);
        }}
      >
        <Field label="First name">
          <input
            autoComplete="given-name"
            className={inputClass}
            placeholder="Alex"
          />
        </Field>

        <Field label="Age">
          <input
            type="number"
            inputMode="numeric"
            className={inputClass}
            placeholder="32"
          />
        </Field>

        <Field
          label="Sex"
          hint="Used for heart-rate zones and recovery baselines."
        >
          <Chips options={["Male", "Female"]} value={sex} onChange={setSex} />
        </Field>

        <Field label="Height">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                inputMode="numeric"
                className={inputClass}
                placeholder="5"
              />
              <Unit>ft</Unit>
            </div>
            <div className="relative flex-1">
              <input
                inputMode="numeric"
                className={inputClass}
                placeholder="10"
              />
              <Unit>in</Unit>
            </div>
          </div>
        </Field>

        <Field label="Weight">
          <div className="relative">
            <input
              inputMode="decimal"
              className={inputClass}
              placeholder="160"
            />
            <Unit>lbs</Unit>
          </div>
        </Field>
      </form>
      <form
        id="training-form"
        className={`mt-8 flex-col gap-6 ${step === 1 ? "flex" : "hidden"}`}
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/connect");
        }}
      >
        <Field label="Running experience">
          <Chips
            options={["Beginner", "Intermediate", "Advanced"]}
            value={experience}
            onChange={setExperience}
          />
        </Field>

        <Field label="Days per week you can train">
          <Chips
            options={["2", "3", "4", "5", "6", "7"]}
            value={days}
            onChange={setDays}
          />
        </Field>

        <Field
          label="Injuries or limitations (optional)"
          hint="Anything your coach should plan around."
        >
          <textarea
            rows={3}
            className={`${inputClass} h-auto py-3`}
            placeholder="Left knee, shin splints last spring"
          />
        </Field>
      </form>

      {/* One bar for every step so the buttons never move or remount. */}
      <ActionBar>
        {step === 0 ? (
          <Link href="/" className={backClass}>
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
          type="submit"
          form={step === 0 ? "personal-form" : "training-form"}
          className={continueClass}
        >
          Continue
        </button>
      </ActionBar>
    </main>
  );
}
