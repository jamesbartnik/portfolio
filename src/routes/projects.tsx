import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectsLayout,
});

export function ProjectsLayout() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}
