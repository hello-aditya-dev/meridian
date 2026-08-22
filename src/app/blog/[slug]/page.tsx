import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Avatar } from "@/components/product-ui/widgets";
import { posts, type Block } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: { type: "article", publishedTime: post.date },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item.slice(0, 24)} className="flex items-start gap-3 leading-relaxed text-zinc-700">
              <span className="mt-[11px] size-1 shrink-0 rounded-full bg-accent-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-8 border-l-2 border-accent-400 pl-6">
          <p className="text-pretty text-lg font-medium leading-relaxed text-zinc-800">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.author ? (
            <cite className="mt-2 block text-sm not-italic text-zinc-500">— {block.author}</cite>
          ) : null}
        </blockquote>
      );
    default:
      return (
        <p key={i} className="mt-5 text-pretty leading-[1.85] text-zinc-700">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-zinc-100">
        <Container className="max-w-3xl py-14 md:py-20">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <ArrowLeft className="size-4" />
              All posts
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
              <span className="rounded-full bg-accent-600/10 px-2.5 py-1 text-accent-700">{post.category}</span>
              <span className="text-zinc-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-zinc-400">·</span>
              <span className="text-zinc-400">{post.readingTime} read</span>
            </div>
            <h1 className="mt-4 text-balance text-3xl font-semibold leading-[1.15] tracking-tight md:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">{post.excerpt}</p>
            <div className="mt-7 flex items-center gap-3 border-t border-zinc-100 pt-6">
              <Avatar name={post.author.name} size="lg" />
              <div>
                <p className="text-sm font-semibold text-zinc-900">{post.author.name}</p>
                <p className="text-xs text-zinc-500">{post.author.role}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="max-w-3xl py-12 md:py-16">
        <Reveal>
          <article>{post.blocks.map(renderBlock)}</article>
        </Reveal>

        {/* related */}
        <div className="mt-16 grid gap-4 border-t border-zinc-200 pt-10 sm:grid-cols-2">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent-600">{r.category}</p>
              <p className="mt-2 text-balance font-semibold leading-snug tracking-tight text-zinc-900">
                {r.title}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-zinc-800">
                Read post
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
