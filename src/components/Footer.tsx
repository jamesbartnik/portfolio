export function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
        © {new Date().getFullYear()} James Bartnik. All rights reserved.
      </div>
    </footer>
  );
}
