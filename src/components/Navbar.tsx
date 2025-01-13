import { Link } from "react-router-dom";

export function Navbar() {
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-gray-800 p-4 text-white shadow-md">
      {/* Left: Logo/Icon */}
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-bold">James Bartnik</span>
        </Link>
      </div>

      {/* Right: Navigation Links */}
      <div className="flex items-center gap-8">
        {navLinks.map(({ name, href }) => (
          <a
            key={href}
            href={href}
            className="transition-colors duration-200 hover:text-gray-400"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
