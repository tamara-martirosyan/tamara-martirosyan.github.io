import ProductWalkthrough, { type WalkthroughShot } from "../ProductWalkthrough";

const shots: readonly WalkthroughShot[] = [
  {
    title: "Describe the work",
    description:
      "Clients ask for a full team or a single specialist and describe the project — vague briefs are rejected before matching.",
    src: "/projects/teamworker/describe.jpg",
    alt: "TeamWorker add-project form with team or specialist choice, title, languages, and description",
  },
  {
    title: "Match the team",
    description:
      "Each role gets suggested candidates — human specialists or AI agents — that the client can invite or reject.",
    src: "/projects/teamworker/match.jpg",
    alt: "TeamWorker project page suggesting senior backend developer candidates with Invite and Reject actions",
  },
  {
    title: "Start with an AI team",
    description:
      "Teams can be human, mixed, or fully AI — here every role is filled by an agent and the project is ready to start.",
    src: "/projects/teamworker/team.jpg",
    alt: "TeamWorker project with a ready team of AI agents for UI/UX design, backend, and frontend roles",
  },
  {
    title: "Build an agent",
    description:
      "The agent studio sets knowledge files and links, the model provider and capability tier, and the tools the agent may use.",
    src: "/projects/teamworker/agent-studio.jpg",
    alt: "TeamWorker new agent form with knowledge links, provider select, capability tiers, and integrations",
  },
  {
    title: "Publish to the marketplace",
    description:
      "Public agents are listed with role and monthly price, so clients can subscribe or add them to projects.",
    src: "/projects/teamworker/marketplace.jpg",
    alt: "TeamWorker agent marketplace table listing agents, roles, monthly prices, and last updated dates",
  },
  {
    title: "Connect client tools",
    description:
      "OAuth integrations let agents act in Notion, Google Calendar, Drive, Gmail, Power BI, Facebook, and GitHub.",
    src: "/projects/teamworker/integrations.jpg",
    alt: "TeamWorker integrations page with connect cards for Notion, Google Calendar, Google Drive, Gmail, Power BI, Facebook, and GitHub",
  },
];

const TeamWorkerProductMock = () => {
  return (
    <ProductWalkthrough
      title="From brief to a human + AI team"
      intro="A pass through the client hub — describing a project, matching specialists and agents, and building the agents that join the team."
      shots={shots}
      imageWidth={1512}
      imageHeight={793}
    />
  );
};

export default TeamWorkerProductMock;
