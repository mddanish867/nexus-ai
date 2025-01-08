
const Footer = () => {
  return (
    <div>
         <footer className="bg-black/50 border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                NexusAI
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering the future of artificial intelligence.
              </p>
            </div>
            {[
              {
                title: "Company",
                links: ["About", "Careers", "Blog", "Press"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Help Center", "API", "Status"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Cookies"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-6">{column.title}</h3>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            © 2025 NexusAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer