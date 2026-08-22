import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid-bg relative flex min-h-[70vh] items-center overflow-hidden">
      <Container className="relative py-24 text-center">
        <p className="font-mono text-7xl font-semibold tracking-tight text-zinc-200 md:text-8xl">404</p>
        <div className="mx-auto mt-6 grid size-12 place-items-center rounded-xl border border-zinc-200 bg-white shadow-card">
          <Compass className="size-6 text-accent-600" />
        </div>
        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          This route never made it past policy review.
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-zinc-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Everything
          important is one click away.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/platform" variant="secondary" size="lg">
            Explore the platform
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-wider text-zinc-400">
          Or try{" "}
          <Link href="/pricing" className="underline underline-offset-4 hover:text-zinc-600">
            pricing
          </Link>{" "}
          ·{" "}
          <Link href="/customers" className="underline underline-offset-4 hover:text-zinc-600">
            customers
          </Link>{" "}
          ·{" "}
          <Link href="/contact" className="underline underline-offset-4 hover:text-zinc-600">
            contact
          </Link>
        </p>
      </Container>
    </section>
  );
}
