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
  Settings,
  ArrowDownCircle
} from 'lucide-react';



const Portfolio = () => {
  const technologies = {
    languages: [
      { name: 'JavaScript', icon: FileCode2 },
      { name: 'Python', icon: Binary },
      { name: 'SQL', icon: Database },
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Palette }
    ],
    tools: [
      { name: 'Git', icon: GitBranch },
      { name: 'Jenkins', icon: Server },
      { name: 'Postman', icon: Send },
      { name: 'PowerShell', icon: Terminal },
      { name: 'AutoIt', icon: Settings }
    ]
  };
  return (
    <>
      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');
      `}</style>

      <div className="min-h-screen bg-black text-gray-100 font-['JetBrains_Mono']">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
          <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover opacity-40"
    >
      <source src="/background.mp4" type="video/mp4" />
    </video>
          </div>
          <div className="relative z-10 text-center px-4">
            <div className="text-green-500 text-sm mb-2">const introduction = {`{`}</div>
            <h1 className="text-6xl font-bold mb-2">Raqib Muktadir</h1>
            <p className="text-xl text-gray-300 mb-2 font-light">Software Developer & QA Specialist</p>
            <div className="text-green-500 text-sm mb-8">{`}`};</div>
            <ArrowDownCircle className="w-12 h-12 mx-auto animate-bounce text-white" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-green-500 text-sm">// About me</div>
            <h2 className="text-4xl font-bold mb-8">README.md</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="max-w-full h-auto rounded-lg border border-green-500/20"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Hi I'm Raqib, a software and business graduate with expertise in SQL, API integrations, and data-driven solutions. Experienced in designing
                  and deploying scalable customer intelligence systems using analytics and cloud technologies. Skilled in automation, data
                  modeling, and quality assurance, with a passion for solving complex problems and enhancing customer experiences through
                  technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I've Been Up To Section */}
        {/* What I've Been Up To Section */}
<section className="py-20 bg-black">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-green-500 text-sm">// Latest projects</div>
    <h2 className="text-4xl font-bold mb-12">Projects[]</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project Cards */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden border border-green-500/10 hover:scale-110 transition-transform duration-200">
        <img
          src="/musicAI.jpg"
          alt="Project 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Spotify Music Discovery AI</h3>
          <p className="text-gray-300 font-light">Created a music discovery AI chatbot using Next.js that allows you to discover
          music according to your mood, with the help of OpenAI and Spotify API integrations to process user data in real time.
          </p>
        </div>
      </div>
      
      {/* Second Project Card */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden border border-green-500/10 hover:scale-110 transition-transform duration-200">
        <img
          src="/sqaRMS.jpg"
          alt="Project 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">SQA Orders Database</h3>
          <p className="text-gray-300 font-light">Developed a web-based inventory management system for internal use,
          integrating SQL databases and PHP, which improved efficiency by 15%
          </p>
        </div>
      </div>

      {/* Third Project Card */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden border border-green-500/10 hover:scale-110 transition-transform duration-200">
        <img
          src="/PlateSpot.jpg"
          alt="Project 1"
          className="w-full h-48 object-cover"
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

        {/* Experience Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-green-500 text-sm">// Work history</div>
            <h2 className="text-4xl font-bold mb-12">Experience.log</h2>
            <div className="space-y-12">
              {/* Experience Item */}
              <div className="border-l-2 border-green-500/50 pl-6">
                <h3 className="text-2xl font-bold mb-2">Matrox Video</h3>
                <p className="text-xl text-gray-300 mb-2 font-light">SQA Programming Intern</p>
                <p className="text-gray-400 mb-4 font-light">05/2024 - Present</p>
                <p className="text-gray-300 font-light">
                Streamlined inventory management by optimizing SQL queries and enhancing system performance through Jenkins testing. Automated QA processes with custom tools and testing frameworks using PowerShell and AutoIt. Developed and maintained server-side features for a web-based inventory system with PHP, HTML, CSS, and SQL.
                </p>
              </div>
              {/* Add more experience items as needed */}
              <div className="border-l-2 border-green-500/50 pl-6">
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

        <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-green-500 text-sm">// technology</div>
          <h2 className="text-4xl font-bold mb-12">tech i use[]</h2>
          
          <div className="space-y-12">
            {/* Languages Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                {technologies.languages.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex flex-col items-center group hover:scale-110 transition-transform duration-200"
                    >
                      <div className="p-4 rounded-lg bg-zinc-900 border border-green-500/10 mb-2">
                        <IconComponent className="w-8 h-8 text-green-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Tools</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                {technologies.tools.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex flex-col items-center group hover:scale-110 transition-transform duration-200"
                    >
                      <div className="p-4 rounded-lg bg-zinc-900 border border-green-500/10 mb-2">
                        <IconComponent className="w-8 h-8 text-green-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Portfolio;