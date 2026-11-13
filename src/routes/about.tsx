import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/about")({ component: About })

function About() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="">
          <h1 className="text-6xl">About Me</h1>
        </div>
        <div className="bg-section">
          <h2>
            <span>I'm a software developer</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
