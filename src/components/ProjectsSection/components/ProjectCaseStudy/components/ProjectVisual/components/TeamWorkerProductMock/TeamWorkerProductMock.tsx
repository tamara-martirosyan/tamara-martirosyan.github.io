import ProjectMock from "../ProjectMock";
import ProjectMockPane from "../ProjectMock/components/ProjectMockPane";

const TeamWorkerProductMock = () => {
  return (
    <ProjectMock
      title="TeamWorker.ai"
      description="How a project moves through the product — from brief to matched human+AI team to delivery."
    >
      <ProjectMockPane
        step="1"
        title="Describe work"
        description="Client submits a project brief and chooses humans, agents, or both."
      >
        <div className="space-y-2 text-sm">
          <div className="rounded-lg border border-border bg-background px-3 py-2">
            <p className="text-xs text-foreground/45">Project</p>
            <p className="mt-1 font-medium text-ink">Launch marketing site</p>
          </div>
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground/70">
            Need: Design + Frontend + Copy
          </div>
          <div className="rounded-lg border border-signal/30 bg-signal-soft px-3 py-2 text-signal-deep">
            Team preference: humans + AI agents
          </div>
        </div>
      </ProjectMockPane>

      <ProjectMockPane
        step="2"
        title="Match the team"
        description="AI suggests specialists and agents that fit the brief."
        highlight
      >
        <ul className="space-y-2 text-sm">
          <li className="rounded-lg border border-border bg-white px-3 py-2">
            <p className="font-medium text-ink">Maya · Designer</p>
            <p className="mt-0.5 text-xs text-foreground/50">Human specialist</p>
          </li>
          <li className="rounded-lg border border-border bg-white px-3 py-2">
            <p className="font-medium text-ink">Alex · Frontend</p>
            <p className="mt-0.5 text-xs text-foreground/50">Human specialist</p>
          </li>
          <li className="rounded-lg border border-signal/40 bg-signal-soft px-3 py-2">
            <p className="font-medium text-signal-deep">Copy Agent</p>
            <p className="mt-0.5 text-xs text-signal-deep/70">
              AI agent · marketplace
            </p>
          </li>
        </ul>
      </ProjectMockPane>

      <ProjectMockPane
        step="3"
        title="Deliver & pay"
        description="Work runs on milestones, chat, and escrow-style payments."
      >
        <div className="space-y-2 text-sm">
          <div className="rounded-lg border border-signal/30 bg-signal-soft px-3 py-2">
            <p className="font-medium text-signal-deep">Milestone · In progress</p>
            <p className="mt-1 text-xs leading-relaxed text-signal-deep/70">
              Homepage wireframes
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground/65">
            Team chat
          </div>
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground/65">
            Stripe milestone payment
          </div>
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground/65">
            Agent tools & knowledge
          </div>
        </div>
      </ProjectMockPane>
    </ProjectMock>
  );
};

export default TeamWorkerProductMock;
