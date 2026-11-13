import { Badge } from "@/components/ui/badge"

export function Tag({ children }: { children: React.ReactNode }) {
  return <Badge variant="outline">{children}</Badge>
}
