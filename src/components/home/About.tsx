
const About = () => {
  return (
    <div>
        <section id="about" className="py-20 px-4">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Beyond Traditional AI
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our revolutionary AI model transcends conventional boundaries, combining advanced neural networks with quantum processing capabilities to deliver unprecedented performance.
              </p>
              <ul className="space-y-6">
                {[
                  "Quantum-enhanced processing",
                  "Advanced neural architecture",
                  "Ethical AI development",
                  "Military-grade security"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative aspect-square rounded-2xl bg-black p-8 border border-white/10">
                  <div className="h-full w-full rounded-xl flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow"></div>
                      <div className="absolute inset-2 rounded-full bg-black"></div>
                      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow animation-delay-2000"></div>
                      <div className="absolute inset-6 rounded-full bg-black"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        🧠
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About