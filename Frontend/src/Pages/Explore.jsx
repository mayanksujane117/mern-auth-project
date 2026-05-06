import React from 'react';

const Explore = () => {

  const profileImage =
    localStorage.getItem('profilePhoto') ||
    'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

  const email =
    localStorage.getItem('userEmail') ||
    'mayanksujane898@gmail.com';

  const username = email.split('@')[0];

  const projects = [
    {
      title: 'Tic-Tac-Toe Game',
      description:
        'Interactive game developed using React and Tailwind CSS.',
      tech: 'JavaScript'
    },
    {
      title: 'React Gallery App',
      description:
        'Modern responsive gallery application with API integration.',
      tech: 'React'
    },
    {
      title: 'CRAVEHUB',
      description:
        'Responsive bakery website with premium UI and animations.',
      tech: 'React'
    },
    {
      title: 'Password Generator',
      description:
        'Secure password generator with modern UI design.',
      tech: 'JavaScript'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">

      {/* Navbar */}
      <nav className="backdrop-blur-xl bg-white/10 border-b border-white/10 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-16">

            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Explore Dashboard
            </h1>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300">
              Explore More
            </button>

          </div>

        </div>

      </nav>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Profile Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl h-fit">

            <div className="flex flex-col items-center text-center">

              <img
                src={profileImage}
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-purple-500 object-cover shadow-xl"
              />

              <h2 className="text-3xl font-bold mt-6">
                {username}
              </h2>

              <p className="text-gray-400 mt-2">
                Full Stack Web Developer
              </p>

              <div className="mt-6 w-full space-y-4">

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <h3 className="mt-1 break-all">
                    {email}
                  </h3>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <h3 className="mt-1">
                    Indore, India
                  </h3>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">

                  <p className="text-gray-400 text-sm">
                    Skills
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">

                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                      React
                    </span>

                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      Tailwind
                    </span>

                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm">
                      Node.js
                    </span>

                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                      MongoDB
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 space-y-8">

            {/* Hero Card */}
            <div className="relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

              <div className="relative">

                <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
                Portfolio Dashboard 
                </div>

                <h1 className="text-5xl font-bold leading-tight mb-6">

                Welcome

                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {' '} {username}
                  </span>

                </h1>

                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                  Explore your projects, skills, contributions and
                  achievements in this premium dashboard interface.
                </p>

              </div>

            </div>

            {/* Projects */}
            <div>

              <h2 className="text-3xl font-bold mb-6">
                Popular Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {projects.map((project, index) => (

                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-xl"
                  >

                    <h3 className="text-xl font-bold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-5">

                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                        {project.tech}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Contribution Activity */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-6">
                Contribution Activity
              </h2>

              {/* Months */}
              <div className="grid grid-cols-12 gap-2 mb-4 text-xs text-gray-400">

                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>

              </div>

              {/* Contribution Grid */}
              <div className="grid grid-cols-12 gap-2">

                {[...Array(84)].map((_, i) => (

                  <div
                    key={i}
                    className={`h-5 rounded-md transition-all duration-300 hover:scale-110 ${
                      Math.random() > 0.7
                        ? 'bg-green-500'
                        : 'bg-white/10'
                    }`}
                  ></div>

                ))}

              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 text-sm text-gray-400">

                <p>
                  Your recent coding activity and project contributions.
                </p>

                <div className="flex items-center gap-2">

                  <span>Less</span>

                  <div className="w-4 h-4 rounded bg-white/10"></div>
                  <div className="w-4 h-4 rounded bg-green-800"></div>
                  <div className="w-4 h-4 rounded bg-green-600"></div>
                  <div className="w-4 h-4 rounded bg-green-400"></div>

                  <span>More</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Explore;