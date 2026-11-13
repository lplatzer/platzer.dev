import type { Status } from "./status"
import type { Tag } from "./tags"

export type Tools = {
  title: string
  summary: string
  description: string
  status: Status
  tags: Tag[]
  href: string
}

export const tools: Tools[] = [
  {
    title: "Water Crafter",
    summary: "",
    description:
      "Calculate custom brewing water recipes with a web implementation of Jonathan Gagnes's excel sheet",
    status: "Coming Soon",
    tags: ["coffee", "water chemistry", "tinkering"],
    href: "/tools/water-crafter",
  },
  {
    title: "Cupping tool",
    summary: "",
    description:
      "Digital SCA cupping form for professional coffee tasting. Score, compare and track evaluations with precision. Optimised for mobile use at the cupping table.",
    status: "Planned",
    tags: ["coffee", "cupping"],
    href: "/tools/cupping-tool",
  },
  {
    title: "Flavour Wheel",
    summary: "",
    description:
      "Interactive coffee flavour wheel based on the SCA Coffee Taster's Flavour Wheel.",
    status: "Coming Soon",
    tags: ["coffee", "SCA"],
    href: "tools/flavour-wheel",
  },
  {
    title: "QR Code Generator",
    summary: "",
    description: "Generate QR Codes for whatever you need.",
    status: "Coming Soon",
    tags: ["Utility"],
    href: "tools/qr-code-generator",
  },
]
