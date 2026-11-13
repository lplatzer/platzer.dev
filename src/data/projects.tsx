import type { Tag } from "./tags"
import type { Status } from "./status"

export type Projects = {
  title: string
  summary: string
  description: string
  status: Status
  tags: Tag[]
  to: string
}

export const projects: Projects[] = [
  {
    title: "Coffee & Code Blog",
    summary: "",
    description:
      "A space for writing about coffee, code, and findings in software.",
    status: "In Progress",
    tags: ["Writing", "Coffee", "Code", "AI"],
    to: "/blog",
  },
  {
    title: "Self Hosted AI Stack",
    summary: "",
    description:
      "Custom AI deployment of containerized infrastructure using OpenWebUI, Authentik, Qdrant, LiteLLM, Hermes Agent, Pi.dev. Custom agent loops written in Python, coupled with a custom web orchestrator/front end.",
    status: "Planned",
    tags: ["Code", "AI"],
    to: "/projects/ai-stack",
  },
]
