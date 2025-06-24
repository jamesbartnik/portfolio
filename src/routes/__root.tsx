import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
];

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold tracking-tight text-blue-600">
            James Bartnik
          </div>
          <nav className="flex gap-6">
            {navLinks.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="font-medium text-gray-600 transition-colors hover:text-blue-600 [&.active]:font-semibold [&.active]:text-blue-600"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50 text-gray-900">
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </>
  ),
});
