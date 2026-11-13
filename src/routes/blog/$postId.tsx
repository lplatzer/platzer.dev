import { createFileRoute, notFound } from "@tanstack/react-router"
import { MDXContent } from "@content-collections/mdx/react"
import { allPosts } from "content-collections"
import { Tag } from "@/components/tag"

// Components available inside .mdx posts
const mdxComponents = { Tag }

export const Route = createFileRoute("/blog/$postId")({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.postId)
    if (!post) throw notFound()
    // Only send what the page renders, not the raw markdown
    const { title, summary, date, mdx } = post
    return { title, summary, date, mdx }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.title },
          { name: "description", content: loaderData.summary },
        ]
      : [],
  }),
  component: BlogPostComponent,
})

function BlogPostComponent() {
  const post = Route.useLoaderData()
  return (
    <article className="typeset typeset-docs mx-auto max-w-2xl p-6">
      <p className="text-sm text-muted-foreground">
        <time dateTime={post.date}>{post.date}</time>
      </p>
      <MDXContent code={post.mdx} components={mdxComponents} />
    </article>
  )
}
