
const Feature = () => {
  return (
    <div>
        <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quantum Processing",
                description: "Harness the power of quantum computing for unprecedented AI capabilities.",
                icon: "🌌"
              },
              {
                title: "Neural Networks",
                description: "Advanced neural architectures that mimic human cognitive processes.",
                icon: "🧠"
              },
              {
                title: "Real-time Analysis",
                description: "Lightning-fast processing with microsecond response times.",
                icon: "⚡"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-black p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition duration-200">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feature