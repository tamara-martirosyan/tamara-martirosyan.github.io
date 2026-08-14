import { ProjectMock, ProjectMockPane } from "./ProjectMock";

export function DitatooWorkspaceMock() {
  return (
    <ProjectMock
      title="DITAToo Workspace"
      description="How authors work in the app — browse files, build the document map, then review details."
    >
      <ProjectMockPane
        step="1"
        title="Files"
        description="Browse folders and topics in the repository."
      >
        <ul className="space-y-2 text-sm text-foreground/70">
          <li className="flex items-center gap-2 font-medium text-ink">
            <FolderIcon />
            Product docs
          </li>
          <li className="flex items-center gap-2 rounded-lg bg-signal-soft px-2 py-1.5 text-signal-deep">
            <FileIcon active />
            Getting started
          </li>
          <li className="flex items-center gap-2 pl-6">
            <FileIcon />
            Installation
          </li>
          <li className="flex items-center gap-2 pl-6">
            <FileIcon />
            Configuration
          </li>
          <li className="flex items-center gap-2 font-medium text-ink">
            <FolderIcon />
            Shared content
          </li>
        </ul>
      </ProjectMockPane>

      <ProjectMockPane
        step="2"
        title="Document map"
        description="Arrange topics into the guide structure."
        highlight
      >
        <ul className="space-y-2 text-sm">
          <li className="rounded-lg border border-border bg-white px-3 py-2 font-medium text-ink">
            User Guide
          </li>
          <li className="rounded-lg border border-signal/40 bg-signal-soft px-3 py-2 pl-5 font-medium text-signal-deep">
            Getting started
            <span className="mt-0.5 block text-xs font-normal text-signal-deep/70">
              Selected topic
            </span>
          </li>
          <li className="rounded-lg border border-border bg-white px-3 py-2 pl-5 text-foreground/70">
            Installation
          </li>
          <li className="rounded-lg border border-border bg-white px-3 py-2 pl-5 text-foreground/70">
            Configuration
          </li>
        </ul>
      </ProjectMockPane>

      <ProjectMockPane
        step="3"
        title="Details"
        description="Preview content and manage workflow."
      >
        <div className="space-y-2 text-sm">
          <div className="rounded-lg border border-signal/30 bg-signal-soft px-3 py-2">
            <p className="font-medium text-signal-deep">Preview</p>
            <p className="mt-1 text-xs leading-relaxed text-signal-deep/70">
              See the topic content before publishing.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground/65">
            Workflow status
          </div>
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground/65">
            Version history
          </div>
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground/65">
            Translation
          </div>
        </div>
      </ProjectMockPane>
    </ProjectMock>
  );
}

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-4 shrink-0 text-amber-500"
      fill="currentColor"
      aria-hidden
    >
      <path d="M2 3.5h4.2l1.2 1.3H14A1.2 1.2 0 0 1 15.2 6v6.3A1.2 1.2 0 0 1 14 13.5H2A1.2 1.2 0 0 1 .8 12.3V4.7A1.2 1.2 0 0 1 2 3.5Z" />
    </svg>
  );
}

function FileIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={
        active
          ? "size-4 shrink-0 text-signal"
          : "size-4 shrink-0 text-foreground/35"
      }
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <path d="M4 2.5h5.2L12 5.3v8.2H4V2.5Z" />
      <path d="M9.1 2.5V5.4H12" />
    </svg>
  );
}
