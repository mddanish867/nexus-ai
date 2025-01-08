
const CTA = () => {
  return (
    <div>
        <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-10"></div>
        <div className="container mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the AI revolution and transform the way you work with our cutting-edge technology.
          </p>
          <button className="relative group inline-block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative px-8 py-4 bg-black rounded-lg leading-none">
              <span className="text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Start Free Trial
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default CTA