import React from 'react';
import { 
  FileCode2,
  Binary, 
  Database,
  Globe,
  Palette,
  GitBranch,
  Server,
  Send,
  Terminal,
  Settings
} from 'lucide-react';
import Image from 'next/image';



const Portfolio = () => {
  return (
    <>
      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
        }

        h1, h2, h3 {
          letter-spacing: -0.03em;
          font-weight: 700;
        }

        p, .text-gray-300 {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        .project-image {
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .project-card:hover .project-image {
          filter: grayscale(0%);
        }

        .tech-icon {
          transition: transform 0.2s ease;
        }
        .tech-icon:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="min-h-screen bg-black text-gray-100">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <div className="fixed inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-40"
              preload="auto"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
            >
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-10">
            {/* Content Sections */}
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-6xl font-bold mb-2">raqib muktadir</h1>
                <p className="text-xl text-gray-300 mb-2 font-light">Software Developer & QA Specialist</p>
                <div className="h-4"></div>
              </div>
            </div>
            
            {/* Make about section have black background */}
            <div className="bg-black">
              {/* About Section */}
              <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4">
                  <div className="text-green-500 text-sm">{/* About me */}</div>
                  <h2 className="text-4xl font-bold mb-8">about me</h2>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <Image
                        src="/profile.jpg"
                        alt="Profile"
                        width={500}
                        height={300}
                        className="max-w-full h-auto rounded-lg border border-green-500/20"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        Hi I&apos;m Raqib, a software and business graduate with expertise in SQL, API integrations, and data-driven solutions. Experienced in designing
                        and deploying scalable customer intelligence systems using analytics and cloud technologies. Skilled in automation, data
                        modeling, and quality assurance, with a passion for solving complex problems and enhancing customer experiences through
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Projects Section with video background */}
            <section className="py-20 bg-black/50">
              <div className="max-w-6xl mx-auto px-4">
                <div className="text-green-500 text-sm">{/* Latest projects */}</div>
                <h2 className="text-4xl font-bold mb-12">projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Project Cards */}
                  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-green-500/10 project-card">
                    <Image
                      src="/musicAI.jpg"
                      alt="Music AI Project"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover project-image"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Spotify Music Discovery AI</h3>
                      <p className="text-gray-300 font-light">Created a music discovery AI chatbot using Next.js that allows you to discover
                      music according to your mood, with the help of OpenAI and Spotify API integrations to process user data in real time.
                      </p>
                    </div>
                  </div>
                  
                  {/* Second Project Card */}
                  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-green-500/10 project-card">
                    <Image
                      src="/sqaRMS.jpg"
                      alt="SQA RMS Project"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover project-image"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">SQA Orders Database</h3>
                      <p className="text-gray-300 font-light">Developed a web-based inventory management system for internal use,
                      integrating SQL databases and PHP, which improved efficiency by 15%
                      </p>
                    </div>
                  </div>

                  {/* Third Project Card */}
                  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-green-500/10 project-card">
                    <Image
                      src="/PlateSpot.jpg"
                      alt="Plate Spot Project"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover project-image"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Plate Spot</h3>
                      <p className="text-gray-300 font-light">Created a full-stack web app using Node.js, MongoDB, HTML, and CSS to help users locate
                      restaurants. Demonstrates your ability to build client-server systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section with video background */}
            <section className="py-20 bg-black/50">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-green-50 text-sm">{/* Work history */}</div>
                <h2 className="text-4xl font-bold mb-12">experience</h2>
                <div className="space-y-12">
                  {/* Experience Item */}
                  <div className="border-l-2 pl-6 bg-black p-6">
                    <h3 className="text-2xl font-bold mb-2">Matrox Video</h3>
                    <p className="text-xl text-gray-300 mb-2 font-light">SQA Programming Intern</p>
                    <p className="text-gray-400 mb-4 font-light">05/2024 - Present</p>
                    <p className="text-gray-300 font-light">
                      Streamlined inventory management by optimizing SQL queries and enhancing system performance through Jenkins testing. Automated QA processes with custom tools and testing frameworks using PowerShell and AutoIt. Developed and maintained server-side features for a web-based inventory system with PHP, HTML, CSS, and SQL.
                    </p>
                  </div>
                  
                  <div className="border-l-2 pl-6 bg-black p-6">
                    <h3 className="text-2xl font-bold mb-2">Matrox Video</h3>
                    <p className="text-xl text-gray-300 mb-2 font-light">SQA Technician Intern</p>
                    <p className="text-gray-400 mb-4 font-light">09/2023 - 05/2024</p>
                    <p className="text-gray-300 font-light">
                      Streamlined inventory management by optimizing SQL queries and enhancing system performance through Jenkins testing. Automated QA processes with custom tools and testing frameworks using PowerShell and AutoIt. Developed and maintained server-side features for a web-based inventory system with PHP, HTML, CSS, and SQL.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer with black background */}
            <div className="bg-black pb-8">
              <section className="py-20 bg-[#] mx-4">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 - Contact */}
                    <div className="space-y-4">
                      <a href="mailto:raqibmuktadir2@gmail.com" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        Email
                      </a>
                      <a href="https://instagram.com/raqibzzz" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        Instagram
                      </a>
                      <a href="https://linkedin.com/in/raqibmuktadir" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        LinkedIn
                      </a>
                      <a href="/resume.pdf" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        Resume
                      </a>
                    </div>

                    {/* Column 2 - Navigation */}
                    <div className="space-y-4">
                      <a href="#top" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        Back to top
                      </a>
                    </div>

                    {/* Column 3 & 4 - Empty for spacing */}
                    <div></div>

                    {/* Brand */}
                    <div className="text-right">
                      <h2 className="text-white text-2xl font-bold">raqib.</h2>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;