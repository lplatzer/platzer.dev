import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/projects")({
  component: ProjectComponent,
})

function ProjectComponent() {
  return <div>Hello "/projects"!</div>
}
