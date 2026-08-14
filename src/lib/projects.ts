export const WORK_INDEX_PATH = "/work/";

export const projects = [
  {
    id: "teamworker",
    name: "TeamWorker.ai",
    category: "AI marketplace",
    role: "Product & engineering",
    period: "Selected work",
    tagline:
      "An AI-powered platform that assembles human specialists and AI agents for real client work.",
    summary:
      "TeamWorker is a marketplace where clients describe a project, the platform suggests mixed human+AI teams, and delivery runs through milestones, chat, payments, and configurable AI agents.",
    challenge:
      "Outsourcing platforms usually separate humans, payments, and AI tools. We needed one product that could match teams, run milestone escrow, support realtime collaboration, and let providers ship reusable AI agents with tools and knowledge.",
    outcome:
      "A full-stack product: Next.js client hub for marketing, role-based dashboards, agent studio, and chat — backed by a NestJS API with AI project matching, multi-LLM agents, Stripe payments, queues, and integrations.",
    highlights: [
      "Built frontend architecture for the client hub — marketing site, Client/Worker/Admin dashboards, project flows, and role-based navigation",
      "Shipped AI agent surfaces: create/configure agents, marketplace & subscriptions, integrations (Gmail, Drive, Calendar, Notion, and more), and in-project agent chat",
      "Implemented NestJS backend domains — projects & team matching (AI PM), milestone/Stripe escrow, Ably chat, BullMQ workers, and multi-provider LLM agents with RAG and tools",
      "Wired auth, server actions to `/v1` APIs, feature flags for AI paths, and a deployable REST + consumer architecture",
    ],
    capabilities: [
      "Auto team matching",
      "Client & worker dashboards",
      "AI agent studio",
      "Agent marketplace",
      "Milestone payments",
      "Realtime chat",
      "Integrations",
      "Admin ops",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "NextAuth",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "MongoDB",
      "Stripe",
      "Ably",
      "OpenAI / Anthropic / Gemini",
    ],
    featured: true,
    visualCaption:
      "Describe the work, match humans + AI agents, then deliver and pay",
  },
  {
    id: "ditatoo",
    name: "DITAToo Web",
    category: "Enterprise CCMS",
    role: "Frontend architecture & product UI",
    period: "Selected work",
    tagline: "A browser workspace for structured technical content.",
    summary:
      "DITAToo Web is the front end for an enterprise component content management system — where authors manage DITA repositories, build maps, run workflow and publishing, and keep translations and taxonomy in sync.",
    challenge:
      "Enterprise authoring tools are dense by nature. The goal was a modern Next.js workspace that feels fast and clear while still exposing repository operations, map structure editing, overview metadata, and secure session handling end to end.",
    outcome:
      "A production-ready App Router product with a three-pane workspace, feature-modular architecture, and a security-minded BFF path so CMS credentials stay server-side.",
    highlights: [
      "Designed the Workspace shell: repository tree, DITA Maps builder, and a contextual overview panel for preview, workflow, versions, taxonomy, and translation",
      "Built map authoring flows — topicrefs, topicheads, drag-and-drop structure, navtitles, relationship tables, and layered publish actions",
      "Hardened auth with NextAuth JWT sessions, a same-origin `/api/backend` proxy, editor-launch without exposing bearer tokens, CSP headers, and sanitized HTML preview",
      "Structured the codebase as thin routes → views → feature modules with Redux Toolkit domains for files, maps, search, and sync",
    ],
    capabilities: [
      "Repository & topics",
      "DITA Maps builder",
      "Workflow & versions",
      "Taxonomy",
      "Translation",
      "Publishing",
      "Secure BFF auth",
      "External editor launch",
    ],
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "NextAuth",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
    ],
    featured: true,
    visualCaption:
      "Files on the left, document map in the middle, details on the right",
  },
] as const;

export type Project = (typeof projects)[number];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectPath(id: string): string {
  return `${WORK_INDEX_PATH}${id}/`;
}

export function getNextProject(id: string): Project | undefined {
  if (projects.length < 2) return undefined;

  const index = projects.findIndex((project) => project.id === id);
  if (index < 0) return undefined;

  return projects[(index + 1) % projects.length];
}

export function getProjectHref(project: Project): string | undefined {
  return "href" in project ? project.href : undefined;
}
