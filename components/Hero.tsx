export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-10 left-10 h-40 w-40 bg-cyan-400/30 blur-[80px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 h-40 w-40 bg-purple-500/30 blur-[80px] rounded-full"></div>

      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Hi, I'm <span className="text-cyan-400">Ronit Shah</span>
      </h1>
      <p className="mt-4 max-w-xl text-gray-300 text-lg">
        A passionate developer crafting beautiful, modern, animated digital experiences.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
