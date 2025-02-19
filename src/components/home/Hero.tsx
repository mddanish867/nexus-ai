const Hero = () => {
  return (
    <section className="relative pt-40 pb-20">
      <div className="container mx-auto text-center px-4">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            Future of AI is Here
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg blur opacity-20"></div>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience unprecedented AI capabilities with our revolutionary model that pushes the boundaries of what's
          possible.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative px-8 py-4 bg-black rounded-lg leading-none">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-lg">
                Get Started
              </span>
            </div>
          </button>
          <button className="px-8 py-4 rounded-lg font-bold text-lg border border-white/20 hover:border-purple-500 hover:text-purple-400 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

