import { Link } from "react-router-dom";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Projects", path: "/projects" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-gray-800 p-4 text-white shadow-md">
      {/* Left: Logo/Icon */}
      <div className="flex items-center gap-4">
        <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-lg font-bold">James Bartnik</span>
      </div>

      {/* Right: Navigation Links */}
      <div className="flex items-center gap-8">
        {navLinks.map(({ name, path }) => (
          <Link
            key={path}
            to={path}
            className="transition-colors duration-200 hover:text-gray-400"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
