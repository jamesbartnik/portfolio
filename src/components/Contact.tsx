export function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-12 pt-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-8 text-4xl font-bold">Get in Touch</h2>
        <p className="mb-4 text-lg">
          Feel free to reach out to me for collaborations or just to say hi!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:james.bartnik@gmail.com"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-600"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/jamesbartnik/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-300 px-6 py-3 font-semibold text-gray-800 shadow-md transition hover:bg-gray-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
