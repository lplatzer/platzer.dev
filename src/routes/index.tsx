import { Fragment } from "react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import luisPlatzerImage from "@/assets/image_luis_platzer.jpeg"
import { Badge } from "@/components/ui/badge"
import { Tag } from "@/components/tag"
import { tools } from "@/data/tools"
import { projects } from "@/data/projects"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { setup } from "@/data/setup"

export const Route = createFileRoute("/")({ component: Home })

const blogPosts = [
  {
    title: "My first post",
    category: "Reflection",
    summary: "something about my blog",
    slug: "my-first-post", // TODO: construct this from title automatically
  },
  {
    title: "My second post",
    category: "Coffee + Code",
    summary: "something about my blog",
    slug: "my-second-post", // TODO: construct this from title automatically
  },
  {
    title: "My third post",
    category: "AI",
    summary: "something about my blog",
    slug: "my-third-post", // TODO: construct this from title automatically
  },
]

function Home() {
  return (
    <div>
      <section className="grid grid-cols-2 px-6 py-24 md:px-14">
        <div className="mx-auto max-w-[1080px]">
          <p className="mb-5 text-xs font-semibold tracking-[0.24em] text-primary uppercase">
            Hi, I'm
          </p>
          <h1 className="font-serif text-[clamp(68px,9.5vw,132px)] leading-[0.92] tracking-[-0.04em]">
            <span className="block font-bold">Luis</span>
            <span className="block font-normal text-primary italic">
              Platzer.
            </span>
          </h1>
          <p className="mt-10 max-w-[520px] text-lg leading-relaxed font-light text-pretty text-muted-foreground">
            AI developer, tinkerer & architect. Building tools at the
            intersection of code and craft — currently exploring coffee
            chemistry, AI, and whatever comes next.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button render={<Link to="/projects" />}>See projects</Button>
            <Button variant="outline" render={<Link to="/about" />}>
              About Me
            </Button>
          </div>
        </div>
        <div>
          <img
            src={luisPlatzerImage}
            alt="Luis Platzer"
            width={724}
            height={1086}
            className="max-h-[560px] w-auto rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="bg-section px-6 py-24 md:px-14">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="mb-12 font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.02em]">
            <span className="block font-bold">Useful things,</span>
            <span className="block font-normal italic">for coffee nerds.</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <Card
                key={tool.title}
                className="transition-[transform, box-shadow, border-color] ease out h-60 bg-background ring-1 duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-ring"
              >
                <CardHeader>
                  <CardTitle>{tool.title}</CardTitle>
                  <CardAction>
                    <Badge>{tool.status}</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="max-h-40">{tool.description}</div>
                </CardContent>
                <CardFooter className="mt-auto justify-between">
                  <div>
                    {tool.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div>
                    <Button render={<Link to={tool.href} />}>
                      Explore {tool.title}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background px-6 py-24 md:px-14">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="mb-12 font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.02em]">
            <span className="block font-bold">Bigger ideas,</span>
            <span className="block font-normal italic">in the works.</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="transition-[transform, box-shadow, border-color] ease out h-60 bg-background ring-1 duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-ring"
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardAction>
                    <Badge>{project.status}</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="max-h-40">{project.description}</div>
                </CardContent>
                <CardFooter className="mt-auto justify-between">
                  <div>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div>
                    <Button render={<Link to={project.to} />}>
                      Explore {project.title}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-section px-6 py-24 md:px-14">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="mb-12 font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.02em]">
            <span className="block font-bold">What I use,</span>
            <span className="block font-normal italic">every day.</span>
          </h2>
          <div className="flex flex-col gap-16">
            {setup.map((category) => (
              <div key={category.title}>
                <div className="mb-9 flex items-center gap-3.5">
                  <span className="shrink-0 text-[10px] font-bold tracking-[0.24em] whitespace-nowrap uppercase opacity-30">
                    {category.title}
                  </span>
                  <Separator className="flex-1" />
                </div>
                <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
                  {category.groups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-5 border-b pb-3 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                        {group.title}
                      </h3>
                      <ul>
                        {group.items.map((item) => (
                          <li
                            key={item.name}
                            className="flex items-baseline justify-between gap-6 border-b py-[11px]"
                          >
                            <span className="text-[15px]">{item.name}</span>
                            <span className="text-right font-mono text-xs text-muted-foreground">
                              {item.note}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background px-6 py-24 md:px-14">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="mb-12 font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.02em]">
            <span className="block font-bold">Thoughts on</span>
            <span className="block font-normal italic">coffee & code</span>
          </h2>
          <ItemGroup className="gap-0 overflow-hidden rounded-[14px] border">
            {blogPosts.slice(0, 3).map((blogPost, i) => (
              <Fragment key={blogPost.slug}>
                {i > 0 && <ItemSeparator className="my-0" />}
                <Item
                  role="listitem"
                  className="rounded-none px-8 py-6 hover:bg-accent"
                >
                  <ItemContent>
                    <p className="text-[11px] font-semibold tracking-[0.1em] text-primary uppercase">
                      {blogPost.category}
                    </p>
                    <ItemTitle>{blogPost.title}</ItemTitle>
                    <ItemDescription>{blogPost.summary}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button
                      variant="outline"
                      size="sm"
                      render={
                        <Link
                          to="/blog/$postId"
                          params={{ postId: blogPost.slug }}
                        />
                      }
                    >
                      Read more
                    </Button>
                  </ItemActions>
                </Item>
              </Fragment>
            ))}
          </ItemGroup>
        </div>
      </section>
    </div>
  )
}
