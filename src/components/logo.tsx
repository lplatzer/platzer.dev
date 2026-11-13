import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 136 30"
      fill="none"
      role="img"
      aria-label="Luis Platzer"
      className={cn("h-8 w-auto", className)}
    >
      <g
        stroke="var(--primary)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="2" x2="5" y2="28" />
        <line x1="5" y1="28" x2="18" y2="28" />
        <path d="M5,2 C9.5,2 21,2 21,11 C21,20 9.5,20 5,20" />
      </g>
      <text
        x="32"
        y="20"
        fontSize="14"
        fontWeight="600"
        letterSpacing="0.03em"
        fill="var(--foreground)"
        className="font-sans"
      >
        Luis Platzer
      </text>
    </svg>
  )
}
