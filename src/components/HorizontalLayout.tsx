import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  const skillCategories = [
    {
      label: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'C++', 'SQL'],
    },
    {
      label: 'Frameworks & Tools',
      skills: ['Next.js', 'React', 'Node.js', 'Jenkins', 'PowerShell', 'AutoIt', 'Git', 'Jira'],
    },
    {
      label: 'Databases & APIs',
      skills: ['MySQL', 'MongoDB', 'OpenAI API', 'Spotify API', 'RESTful APIs', 'Jira API'],
    },
    {
      label: 'Spoken Languages',
      skills: ['English', 'Bengali', 'French (Professional)', 'Spanish', 'Hindi', 'Urdu'],
    },
  ];

  const projects = [
    {
      title: 'NewsFlow',
      description:
        'AI-powered news aggregator pulling from 20+ RSS sources (BBC, Reuters, TechCrunch and more), grouping related stories, with a GPT-4o-mini assistant that searches both the article database and the live web.',
      url: 'https://github.com/raqibzzz/News-App',
      image: null,
      gradient: 'from-blue-900 to-purple-900',
      tech: 'TypeScript',
    },
    {
      title: 'Spotify Music Discovery AI',
      description:
        'Music discovery AI chatbot built with Next.js that recommends music based on your mood, powered by OpenAI and Spotify API integrations to process user data in real time.',
      url: 'https://github.com/raqibzzz/ai-music-discovery',
      image: '/musicAI.jpg',
      gradient: null,
      tech: null,
    },
    {
      title: 'AI Product Readiness Critic',
      description:
        'AI tool that reviews PRDs, product specs, and feature descriptions, flagging ambiguities, risks, edge cases, and missing acceptance criteria, built to think like a skeptical PM and QA reviewer.',
      url: 'https://github.com/raqibzzz/AI-Product-Readiness-Critic',
      image: null,
      gradient: 'from-orange-900 to-red-900',
      tech: 'TypeScript',
    },
    {
      title: 'AudioVisual — 555(SOUNDS)',
      description:
        'Desktop-friendly VJ-lite tool built for 555(SOUNDS) live events using Three.js and Web Audio API, featuring real-time audio-reactive scenes and live cursor control for performances.',
      url: 'https://github.com/raqibzzz/AudioVisual',
      image: null,
      gradient: 'from-purple-900 to-pink-900',
      tech: 'TypeScript · Three.js · Web Audio API',
    },
    {
      title: 'Avio2 Web UI Automation',
      description:
        "Python automation tool for Matrox Video's Avio2 IPKVM product, streamlining QA test validation and enabling consistent coverage across complex hardware-software environments.",
      url: 'https://github.com/raqibzzz/Avio2_Automation',
      image: null,
      gradient: 'from-zinc-800 to-neutral-900',
      tech: 'Python',
    },
    {
      title: 'Paycheck Budget',
      description:
        'Personal finance web app to budget paychecks, track spending, and manage financial goals, live at paycheck-budget.vercel.app.',
      url: 'https://github.com/raqibzzz/PaycheckBudget',
      image: null,
      gradient: 'from-emerald-900 to-teal-900',
      tech: 'TypeScript',
    },
  ];

  return (
    <>
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

        .photo-hover {
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .photo-hover:hover {
          transform: scale(1.02);
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
            {/* Hero Content */}
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-6xl font-bold mb-2">raqib muktadir</h1>
                <p className="text-xl text-gray-300 mb-2 font-light">Aspiring Technology and Business Strategy Consultant</p>
                <div className="h-4"></div>
              </div>
            </div>

            <div className="bg-black">
              {/* About Section */}
              <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4">
                  <h2 className="text-4xl font-bold mb-8">about me</h2>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <Image
                        src="/IMG_0078.jpg"
                        alt="Profile"
                        width={500}
                        height={300}
                        className="max-w-full h-auto rounded-lg border border-green-500/20"
                      />
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        Hi, I&apos;m Raqib. I&apos;m a Computer Science graduate with a Minor in Business Administration from Memorial University of Newfoundland. I build things at the intersection of software, automation, and strategy.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        Professionally, I&apos;ve spent the last two years at Matrox Video as a Software Developer and QA Engineer, building automation tools, improving testing infrastructure, and shipping reliable systems for complex hardware-software products.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        Outside of work, I co-founded{' '}
                        <a
                          href="https://555-studio.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white underline underline-offset-2 hover:text-green-400 transition-colors"
                        >
                          555 Studio
                        </a>
                        , a creative experimentation platform in Montreal designed to bring curious people together through intentional events, talks, and cultural experiences. It is something I care deeply about building.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section className="py-16 bg-black border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4">
                  <h2 className="text-4xl font-bold mb-10">skills</h2>
                  <div className="space-y-6">
                    {skillCategories.map((cat) => (
                      <div key={cat.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-white/5 pb-6">
                        <span className="text-green-500 text-xs uppercase tracking-widest font-medium w-44 shrink-0">
                          {cat.label}
                        </span>
                        <span className="text-gray-300 font-light text-sm leading-relaxed">
                          {cat.skills.join('  /  ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Projects Section */}
            <section className="py-20 bg-black/50">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="bg-zinc-900 rounded-lg overflow-hidden border border-green-500/10 project-card"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover project-image"
                          />
                        ) : (
                          <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-end p-4`}>
                            {project.tech && (
                              <span className="text-xs text-white/50 font-mono">{project.tech}</span>
                            )}
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-300 font-light">{project.description}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 555 Studio Section */}
            <section className="py-20 bg-black">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <h2 className="text-4xl font-bold">555 studio</h2>
                    <p className="text-green-500 text-xs uppercase tracking-widest font-medium mt-2">Montreal, QC</p>
                  </div>
                  <a
                    href="https://555-studio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-green-400 transition-colors font-light underline underline-offset-4"
                  >
                    555-studio.com
                  </a>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Text */}
                  <div className="lg:w-2/5 space-y-4">
                    <p className="text-gray-300 font-light leading-relaxed">
                      555 is a creative experimentation studio I co-founded in Montreal with Vilakshan Khanna and Christian. We design spaces, formats, and experiences that bring people into deeper conversation, guided by curiosity and attention.
                    </p>
                    <p className="text-gray-300 font-light leading-relaxed">
                      Our events are not conferences or networking nights. They are intentionally designed experiences for founders, engineers, designers, and artists who want to think more carefully about ideas, creativity, and culture.
                    </p>
                    <p className="text-gray-300 font-light leading-relaxed">
                      Formats we have run include Presentation Night, a five stories, five slides, five minutes format; Builder Sundays with Shopify; and Electra, a live visual sound experience. The long-term vision is to build something culturally meaningful that keeps evolving.
                    </p>
                    <div className="pt-2 flex gap-6">
                      <a
                        href="https://555-studio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm font-medium hover:text-green-400 transition-colors"
                      >
                        Website
                      </a>
                      <a
                        href="https://www.instagram.com/fivefivefive_studio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm font-medium hover:text-green-400 transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>

                  {/* Photo Grid */}
                  <div className="lg:w-3/5 grid grid-cols-2 gap-3">
                    <div className="col-span-2 overflow-hidden rounded-lg">
                      <Image
                        src="/555/555-northstar-stage.jpg"
                        alt="555 Presentation Night at Northstar Montreal"
                        width={1200}
                        height={600}
                        className="w-full h-64 object-cover photo-hover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/555/555-northstar-raqib.jpg"
                        alt="555 Northstar event"
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover photo-hover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/555/555-electra-crowd.jpg"
                        alt="555 Electra event crowd"
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover photo-hover"
                      />
                    </div>
                    <div className="col-span-2 overflow-hidden rounded-lg">
                      <Image
                        src="/555/555-electra-convo.jpg"
                        alt="555 Electra intimate conversation"
                        width={1200}
                        height={500}
                        className="w-full h-52 object-cover object-center photo-hover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 bg-black/50">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">experience</h2>
                <div className="space-y-12">
                  {/* FiveFiveFive */}
                  <div className="border-l-2 border-green-500/30 pl-6 bg-black p-6">
                    <h3 className="text-2xl font-bold mb-2">555 Studio Montreal</h3>
                    <p className="text-xl text-gray-300 mb-2 font-light">Co-founder and Co-host</p>
                    <p className="text-gray-400 mb-4 font-light">September 2025 – Present</p>
                    <ul className="list-disc list-outside ml-4 text-gray-300 font-light space-y-2">
                      <li>Co-led strategy, programming, and execution for a recurring creative speaker series spotlighting founders, designers, and engineers in the Montreal tech and creative ecosystem.</li>
                      <li>Designed and built the official{' '}
                        <a href="https://555-studio.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-500 transition-colors">
                          555 Studio website
                        </a>
                        , integrating event details, speaker showcases, and registration into a cohesive user experience.
                      </li>
                      <li>Led speaker outreach, sponsorship negotiations, and end-to-end event operations, reducing costs and scaling audience reach across social channels. Partners have included Shopify, ETS, HEC, and Cansbridge.</li>
                    </ul>
                  </div>

                  {/* Matrox QA */}
                  <div className="border-l-2 border-green-500/30 pl-6 bg-black p-6">
                    <h3 className="text-2xl font-bold mb-2">Matrox Video</h3>
                    <p className="text-xl text-gray-300 mb-2 font-light">Software Automtion Developer, IPKVM Products</p>
                    <p className="text-gray-400 mb-4 font-light">April 2025 – Present</p>
                    <ul className="list-disc list-outside ml-4 text-gray-300 font-light space-y-2">
                      <li>Led end-to-end functional, regression, and performance testing for the Avio2 IPKVM product line, defining test coverage for 5K multi-display workflows and influencing release readiness decisions.</li>
                      <li>Diagnosed systemic hardware-software interaction issues by analyzing IGMP behavior, display synchronization, and firmware edge cases across varied network environments.</li>
                      <li>Improved test-cycle consistency by 30% by integrating reliable automated test scripts and resolving recurring automation failures.</li>
                      <li>Facilitated cross-functional sessions between QA, development, and client-success teams, translating customer issues into reproducible test cases.</li>
                    </ul>
                  </div>

                  {/* Matrox Dev Intern */}
                  <div className="border-l-2 border-green-500/30 pl-6 bg-black p-6">
                    <h3 className="text-2xl font-bold mb-2">Matrox Video</h3>
                    <p className="text-xl text-gray-300 mb-2 font-light">Software Developer Intern</p>
                    <p className="text-gray-400 mb-4 font-light">May 2024 – April 2025</p>
                    <ul className="list-disc list-outside ml-4 text-gray-300 font-light space-y-2">
                      <li>Improved internal inventory system performance by 20% by redesigning SQL queries and resolving long-standing data bottlenecks.</li>
                      <li>Built automated Jenkins pipelines for IP and SDI workflows, translating client-reported failures into structured, reproducible test cases.</li>
                      <li>Developed a full automated bug-reporting system integrating test logs with Jira&apos;s API, reducing manual documentation time by 30%.</li>
                      <li>Designed overnight automation frameworks using PowerShell and AutoIt, enabling early detection of intermittent bugs across hundreds of nightly test cycles.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="bg-black pb-8">
              <section className="py-20 mx-4">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                      <a href="https://555-studio.com" target="_blank" rel="noopener noreferrer" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        555 Studio
                      </a>
                      <a href="/resume.pdf" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        Resume
                      </a>
                    </div>
                    <div className="space-y-4">
                      <a href="#top" className="block text-white/95 font-medium hover:text-gray-600 transition-colors">
                        Back to top
                      </a>
                    </div>
                    <div></div>
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
