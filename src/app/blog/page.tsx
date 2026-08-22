import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Avatar } from "@/components/product-ui/widgets";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Platform thinking, engineering notes and operations strategy from the Meridian team.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from inside the operating layer."
        description="Platform thinking, engineering deep-dives and honest operations strategy — written by the people building it."
      />

      {/* featured */}
      <Section className="border-t border-zinc-100 pt-14">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-8 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 shadow-card transition-all duration-200 hover:border-accent-200 hover:shadow-lift md:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
                <span className="rounded-full bg-accent-600/10 px-2.5 py-1 text-accent-700">{featured.category}</span>
                <span className="text-zinc-400">{formatDate(featured.date)}</span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-400">{featured.readingTime} read</span>
              </div>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-zinc-600">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900">
                Read the post
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
            <div className="flex items-center gap-3 border-t border-zinc-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <Avatar name={featured.author.name} size="lg" />
              <div>
                <p className="text-sm font-semibold text-zinc-900">{featured.author.name}</p>
                <p className="text-xs text-zinc-500">{featured.author.role}</p>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 90}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider">
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-600">{post.category}</span>
                  <span className="text-zinc-400">{formatDate(post.date)}</span>
                  <span className="text-zinc-400">·</span>
                  <span className="text-zinc-400">{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-balance text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-2.5 border-t border-zinc-100 pt-4">
                  <Avatar name={post.author.name} size="xs" />
                  <span className="text-xs text-zinc-500">{post.author.name}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
