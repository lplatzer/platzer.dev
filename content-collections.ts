import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import { z } from "zod"

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.{md,mdx}",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.iso.date(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document)
    return {
      ...document,
      slug: document._meta.path,
      mdx,
    }
  },
})

export default defineConfig({
  content: [posts],
})
