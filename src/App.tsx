import Navbar from "./components/home/Navbar"
import Hero from "./components/home/Hero"
import Feature from "./components/home/Feature"
import CTA from "./components/home/CTA"
import Footer from "./components/home/Footer"

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 z-0 w-full">
        <div className="absolute w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      <Hero />
      <Feature />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

