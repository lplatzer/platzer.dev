import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tools/water-crafter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tools/water-crafter"!</div>
}
