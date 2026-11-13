import { Logo } from "@/components/logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "@tanstack/react-router"
import { ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { tools } from "@/data/tools"

export function Header() {
  return (
    <header className="flex items-center gap-4 p-6">
      <Link to="/">
        <Logo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {/* <NavigationMenuItem className="hidden md:flex"> */}
          {/*   <NavigationMenuTrigger>Tools</NavigationMenuTrigger> */}
          {/*   <NavigationMenuContent> */}
          {/*     <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]"> */}
          {/*       {tools.map((tool) => ( */}
          {/*         <ListItem */}
          {/*           key={tool.title} */}
          {/*           title={tool.title} */}
          {/*           href={tool.href} */}
          {/*         > */}
          {/*           {tool.description} */}
          {/*         </ListItem> */}
          {/*       ))} */}
          {/*     </ul> */}
          {/*   </NavigationMenuContent> */}
          {/* </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link to="/about">About</Link>} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center gap-2">
        <Badge
          variant="outline"
          className="p-4"
          render={<a href="https://github.com/lplatzer" />}
        >
          GitHub
          <ExternalLink />
        </Badge>
        <Badge
          variant="outline"
          className="p-4"
          render={<a href="https://linkedin.com/in/luis-platzer" />}
        >
          LinkedIn
          <ExternalLink />
        </Badge>
      </div>
    </header>
  )
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link to={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}
