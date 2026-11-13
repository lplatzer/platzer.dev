import { Link, createFileRoute } from "@tanstack/react-router"
import { allPosts } from "content-collections"

export const Route = createFileRoute("/blog/")({
  loader: () =>
    allPosts
      .map(({ slug, title, summary, date }) => ({ slug, title, summary, date }))
      .sort((a, b) => b.date.localeCompare(a.date)),
  component: BlogIndex,
})

function BlogIndex() {
  const posts = Route.useLoaderData()
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-6">
      <h1 className="text-6xl">Blog</h1>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to="/blog/$postId"
              params={{ postId: post.slug }}
              className="hover:underline"
            >
              <h2 className="text-xl font-medium">{post.title}</h2>
            </Link>
            <p className="text-sm text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time> · {post.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
