import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col justify-end overflow-hidden bg-surface-100">
      <Image
        src="/images/hero-runner.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Legibility scrim: fades the photo into the page background behind the text */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-surface-100 via-surface-100/70 via-35% to-transparent to-65%"
      />

      <div className="relative w-full px-4 pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Athletic Intelligence
        </p>
        <h1 className="mt-2 text-[54px] font-extrabold uppercase leading-[60px] text-ink">
          Transform
          <br />
          your
          <br />
          training
        </h1>
        <p className="mt-2 text-base text-ink-muted">
          Comprehensive Data · Customized Workouts
        </p>
        <Link
          href="/profile"
          className="mt-8 flex h-12 w-full items-center justify-center rounded-md bg-red text-base font-semibold text-white"
        >
          Start Training
        </Link>
      </div>
    </main>
  );
}
