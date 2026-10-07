export const WORK_INDEX_PATH = "/work/";

export const projects = [
  {
    id: "teamworker",
    name: "TeamWorker.ai",
    category: "AI marketplace",
    role: "Frontend lead & full-stack engineer",
    period: "Selected work",
    liveUrl: "https://teamworker.ai/",
    tagline:
      "An AI-powered platform that assembles human specialists and AI agents for real client work.",
    summary:
      "TeamWorker is a marketplace where clients describe a project, the platform proposes human, AI-agent, or mixed teams, and delivery runs through milestones, chat, payments, and configurable AI agents that work inside the client's own tools.",
    challenge:
      "Outsourcing platforms keep people, payments, and AI tools in separate worlds. TeamWorker needed one product where an AI agent is a real team member — recommended next to human specialists, invited to projects, chatting with clients, and acting in Gmail, Drive, or GitHub — with reliable long-running runs and safe access to client data.",
    outcome:
      "I built the Next.js client hub almost entirely myself — marketing site, client/worker/admin dashboards, agent studio, and chat — and led the NestJS work on AI agents: multi-provider LLM runs with RAG and tools, queue-backed execution, integrations, team recommendation, notifications, and security hardening, on top of the original API for projects, milestones, and Stripe escrow.",
    highlights: [
      "Built the client hub frontend — marketing site, client/worker/admin dashboards, project creation and invitation flows, milestone and Stripe payment UI, transactions, and role-based navigation",
      "Shipped the AI agent studio and marketplace: create and configure agents, pick models and providers, upload knowledge, subscriptions with trials, and paid agent creation",
      "Built the agent runtime on NestJS — OpenAI, Anthropic, and Gemini providers, RAG over embedded knowledge files, a tool registry with per-agent policies and a security audit trail, and Tavily web search",
      "Made agent runs survive real-world use: streamed responses over SSE through a Next.js proxy, detached async runs on BullMQ workers, and resume when a user reopens a chat mid-run",
      "Integrated agents with client tools via OAuth — Gmail, Google Drive, Docs, Sheets, Slides, Calendar (with video calls), Notion, GitHub, Facebook, and Power BI",
      "Extended team matching to recommend AI agents alongside human specialists, with human, agent, and mixed team options, assignment requests, and acceptance settings",
      "Added goal-driven task orchestration with a task board and stop/resume, a notification system (in-app, email, and realtime via Ably), worker reviews and payouts, and an admin dashboard",
      "Hardened the platform: Helmet, protected Bull Board, milestone ownership checks, admin access driven by an allowlist, email verification, and permanent account deletion",
    ],
    capabilities: [
      "Human + AI team matching",
      "Client & worker dashboards",
      "AI agent studio",
      "Agent marketplace",
      "RAG & tool-using agents",
      "Streaming & resumable runs",
      "Google, Notion & GitHub integrations",
      "Milestone payments",
      "Realtime chat & notifications",
      "Admin ops",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "NextAuth",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "MongoDB",
      "BullMQ / Redis",
      "Stripe",
      "Ably",
      "OpenAI / Anthropic / Gemini",
      "Google APIs",
    ],
    featured: true,
    cover: {
      src: "/projects/teamworker/integrations.jpg",
      alt: "TeamWorker integrations page with connect cards for Notion, Google, Gmail, Power BI, Facebook, and GitHub",
    },
    flow: ["Describe work", "Match the team", "Deliver & pay"],
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
    cover: {
      src: "/projects/ditatoo/map.jpg",
      alt: "DITAToo DITA map builder showing EasyPrint QuickStartGuide with nested API topics",
    },
    flow: ["Files", "Document map", "Details"],
  },
  {
    id: "kust",
    name: "Kust Reader",
    category: "Reading platform",
    role: "Product & engineering",
    period: "Selected work",
    tagline:
      "A PWA for discovering essays, reading them as EPUBs, and supporting the authors behind them.",
    summary:
      "Kust Reader is a digital reading product: readers browse publications, pick up in a custom EPUB viewer, keep progress and annotations, and donate to authors — while admins publish essays, manage catalogs, and notify the audience.",
    challenge:
      "Most reading apps stop at the viewer, and most CMS tools stop at publishing. We needed one product that felt like a native reader — pagination, themes, resume position, highlights — while still covering catalog, library, auth, author support, and a real publishing backend.",
    outcome:
      "A Next.js PWA with an epub.js reader, library, and admin CMS — backed by a NestJS API for publications, reading metadata, comments, Paylink donations, S3-hosted EPUBs, and Google/Apple/email auth.",
    highlights: [
      "Built the EPUB reading surface: chapter navigation, CFI-based progress, themes/font/brightness, highlights, page bookmarks, threaded comments, and prefetch so opening a book feels instant",
      "Shipped discovery and library flows — recommended/new tabs, categories, author pages and events, search, likes, notifications, and an installable PWA shell",
      "Designed the admin CMS for essays (EPUB upload), authors, categories, readers, and outbound notifications",
      "Implemented NestJS domains — publications & search, user reading metadata, comments, author subscriptions, Paylink donations, S3 content storage, and SSO plus email verification",
    ],
    capabilities: [
      "EPUB reader",
      "Highlights & bookmarks",
      "Reading progress",
      "Comments",
      "Author profiles",
      "Personal library",
      "Author donations",
      "Admin publishing",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "NextAuth",
      "Tailwind CSS",
      "shadcn/ui",
      "epub.js",
      "NestJS",
      "MongoDB",
      "AWS S3",
      "Paylink",
      "PWA",
    ],
    featured: true,
    cover: {
      src: "/projects/kust/discover.jpg",
      alt: "Kust Reader discover feed with recommended and new essays",
    },
    flow: ["Discover", "Read", "Keep & support"],
  },
  {
    id: "parztech",
    name: "Parz Tech",
    category: "Armenian tech blog",
    role: "Founder, author & engineer",
    period: "Personal project",
    liveUrl: "https://parztech.vercel.app/",
    tagline:
      "An Armenian-language blog that explains technology and AI in plain, jargon-free language.",
    summary:
      "Parz Tech (“parz” means “simple” in Armenian) is a blog I write and build myself — articles on AI, security, and the Armenian IT scene, written entirely in Armenian. Readers browse by topic and react to posts; behind it sits my own admin CMS for writing and publishing.",
    challenge:
      "Quality writing about AI and technology barely exists in Armenian. The blog had to make long-form Armenian text a pleasure to read, give me a fast writing and publishing workflow of my own, and stay discoverable through search and social sharing — without giving up privacy or safety for readers.",
    outcome:
      "A full-stack Next.js App Router blog on Vercel: public pages are prerendered and refreshed on publish, posts live in Turso (SQLite) via Drizzle, and a GitHub-authenticated admin CMS handles writing, previewing, and publishing in Markdown.",
    highlights: [
      "Designed and built the whole product — brand, gradient visual language, Noto Sans Armenian typography, and dark/light themes with next-themes",
      "Built the admin CMS: Markdown editor with formatting toolbar and keyboard shortcuts, live preview, drafts vs. published, featured toggle, tags, slug validation, ⌘S save, and an unsaved-changes guard",
      "Secured publishing with Auth.js GitHub login restricted to an admin allowlist, Zod-validated server actions, and a Markdown pipeline (remark/rehype) that drops raw HTML so rendered output is safe",
      "Shipped the reading experience — searchable, topic-filtered index, reading time, reading progress bar, Shiki code highlighting in light and dark themes, cited sources, tags, and related articles",
      "Added anonymous emoji reactions stored per visitor as a salted SHA-256 hash of a cookie (never the raw ID), with a unique index making double-clicks harmless",
      "Covered distribution: sitemap, robots, and RSS generated from published posts, per-article Open Graph images rendered with Satori, JSON-LD, localized `hy_AM` metadata, and Vercel Analytics",
    ],
    capabilities: [
      "Markdown CMS",
      "Drafts & publishing",
      "GitHub admin auth",
      "Search & topic filters",
      "Reader reactions",
      "Dark & light themes",
      "RSS & sitemap",
      "Dynamic OG images",
    ],
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Drizzle ORM",
      "Turso (SQLite)",
      "Auth.js",
      "Zod",
      "unified / Shiki",
      "Vercel",
    ],
    featured: true,
    cover: {
      src: "/projects/parztech/home.jpg",
      alt: "Parz Tech home page hero with the Armenian headline “Technology and AI in simple language”",
    },
    flow: ["Write in Markdown", "Publish", "Read & react"],
  },
] as const;

export type ProjectId = (typeof projects)[number]["id"];
export type Project = (typeof projects)[number] & {
  liveUrl?: string;
  cover?: { src: string; alt: string };
};

export const featuredProjects: readonly Project[] = projects.filter(
  (project) => project.featured,
);

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
