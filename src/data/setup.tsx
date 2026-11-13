export type DevSetup = {
  editor: string
  aiCodingTools: string[]
  notes: string
  voiceRecording: string
}

export type CoffeeSetup = {
  grinder: string
  kettle: string
  pourOver: string[]
}
export type HardwareSetup = {
  keyboard: string
  mouse: string
}
export type SetupItem = {
  name: string
  note: string
}
export type SetupGroup = {
  title: string
  items: SetupItem[]
}
export type SetupCategory = {
  title: string
  groups: SetupGroup[]
}

export const setup: SetupCategory[] = [
  {
    title: "Development",
    groups: [
      {
        title: "Software",
        items: [
          {
            name: "Neovim",
            note: "Default editor",
          },
          {
            name: "VS Code",
            note: "Secondary editor",
          },
          {
            name: "Jetbrains IDE suite",
            note: "Secondary editors",
          },
          {
            name: "Claude Code",
            note: "AI coding",
          },
          {
            name: "Codex",
            note: "AI coding",
          },
          {
            name: "Pi",
            note: "AI coding",
          },
          {
            name: "Obsidian",
            note: "second brain, notes",
          },
          {
            name: "SuperWhisper",
            note: "Voice",
          },
        ],
      },
      {
        title: "Building with",
        items: [
          {
            name: "TypeScript",
            note: "Frontend/UI",
          },
          {
            name: "Python",
            note: "ML, AI-based applications",
          },
          {
            name: "Rust",
            note: "Embedded development",
          },
          {
            name: "Tailwind",
            note: "styling",
          },
          {
            name: "TanStack",
            note: "frontend framework",
          },

          {
            name: "Hetzner",
            note: "Hosting",
          },
        ],
      },
    ],
  },
  {
    title: "Hardware",
    groups: [
      {
        title: "Dev Setup",
        items: [
          {
            name: 'MacBook Pro M1, 16" 32GB RAM',
            note: "daily driver",
          },
          {
            name: "Custom PC build",
            note: "secondary machine on CachyOS",
          },
          {
            name: "ZSA Moonlander",
            note: "keyboard",
          },
          {
            name: "MX Master 3",
            note: "mouse",
          },
          {
            name: "Samsung Odyssey G9",
            note: "monitor",
          },
        ],
      },
      {
        title: "Audio setup",
        items: [
          {
            name: "Sennheiser HD650",
            note: "headphones",
          },
          {
            name: "Audient iD44",
            note: "audio interface",
          },
          {
            name: "Audio Technica AT-4040",
            note: "Studio microphone",
          },
        ],
      },
    ],
  },
  {
    title: "Coffee",
    groups: [
      {
        title: "Filter Equipment",
        items: [
          {
            name: "Comandante C40",
            note: "grinder",
          },
          {
            name: "Kinu M47 Classic",
            note: "grinder",
          },
          {
            name: "Fellow Stagg EKG",
            note: "kettle",
          },
          {
            name: "Hario V60",
            note: "go-to pour over",
          },
          {
            name: "Pulsar Dripper",
            note: "go-to no-bypass brewer",
          },
          {
            name: "Orea V1",
            note: "secondary brewer",
          },
          {
            name: "Acaia Pearl S",
            note: "pour over scale",
          },
        ],
      },
      {
        title: "Espresso Equipment",
        items: [
          {
            name: "Decent Espresso Bengle",
            note: "machine",
          },
          {
            name: "Weber Workshops EG-1",
            note: "grinder",
          },
          {
            name: "PuqPress",
            note: "auto-tamper",
          },
          {
            name: "Acaia Lunar",
            note: "espresso scale",
          },
        ],
      },
      {
        title: "Roasting equipment",
        items: [
          {
            name: "Bullet R1",
            note: "1kg roaster",
          },
          {
            name: "artisan",
            note: "roasting software",
          },
          {
            name: "DiFluid Omni Plus",
            note: "color meter",
          },
          {
            name: "DiFluid R2",
            note: "TDS Refractometer",
          },
        ],
      },
    ],
  },
]
