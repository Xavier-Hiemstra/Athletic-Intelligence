import Link from "next/link";
import { Icon } from "@/components/icon";

// Placeholder so the chat's "See your Training plan" button has somewhere to go.
export default function Plan() {
  return (
    <main className="min-h-dvh bg-surface-100 px-6 pt-4">
      <Link
        href="/home"
        aria-label="Back"
        className="flex h-12 w-12 items-center justify-center rounded-md bg-surface-200 text-ink"
      >
        <Icon d="M15 5l-7 7 7 7" className="h-5 w-5" />
      </Link>
      <h1 className="mt-6 text-4xl font-extrabold leading-10 text-ink">
        Your training plan
      </h1>
      <p className="mt-2 text-base text-ink-muted">Coming soon.</p>
    </main>
  );
}
