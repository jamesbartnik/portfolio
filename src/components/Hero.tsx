export function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 text-center"
    >
      <div>
        <h1 className="mb-4 text-5xl font-extrabold">Hi, I'm James!</h1>
        <p className="mb-6 text-lg">
          A Full-Stack Developer crafting elegant web applications.
        </p>
        <a
          href="#projects"
          className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-600"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
