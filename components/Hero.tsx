export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">John Doe</h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 animate-fade-in-up animation-delay-200">
          Frontend Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Crafting beautiful and performant web experiences with modern technologies.
        </p>
      </div>
    </section>
  )
}

