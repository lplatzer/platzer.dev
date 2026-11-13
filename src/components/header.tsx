import { Logo } from "@/components/logo"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "@tanstack/react-router"
import { ExternalLink } from "lucide-react"
import { Badge } from "./ui/badge"

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
