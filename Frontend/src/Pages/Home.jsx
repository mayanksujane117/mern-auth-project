import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const decodedUser = useMemo(() => {

    if (!token) return null;

    try {

      const payload = JSON.parse(atob(token.split('.')[1]));

      return payload;

    } catch (error) {

      return null;

    }

  }, [token]);

  useEffect(() => {

    if (!decodedUser) {

      localStorage.removeItem('token');

      toast.error('Please login first');

      navigate('/login');

    }

  }, [decodedUser, navigate]);

  const handleLogout = () => {

    localStorage.removeItem('token');

    toast.success('Logged out successfully');

    navigate('/login');

  };

  if (!decodedUser) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        Loading...
      </div>
    );

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">

      {/* Navbar */}
      <nav className="backdrop-blur-xl bg-white/10 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center h-16">

            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Auth App
            </h1>

            <div className="flex items-center gap-4">

              <div className="text-right">
                <p className="text-sm text-gray-400">
                  Welcome Back
                </p>

                <h2 className="font-semibold text-white">
                  {decodedUser.email.split('@')[0]}
                </h2>
              </div>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <div className="mb-8 flex items-center gap-5">

  <div className="relative">

    <img
      src={
        localStorage.getItem('profilePhoto') ||
        'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
      }
      alt="Profile"
      className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-lg"
    />

    <label
      htmlFor="profileUpload"
      className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full cursor-pointer transition-all"
    >
      ✎
    </label>

    <input
      id="profileUpload"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {

        const file = e.target.files[0];

        if (file) {

          const reader = new FileReader();

          reader.onloadend = () => {

            localStorage.setItem('profilePhoto', reader.result);

            window.location.reload();

          };

          reader.readAsDataURL(file);
        }
      }}
    />

  </div>

  <div>

    <h2 className="text-2xl font-bold text-white">
      {decodedUser.email.split('@')[0]}
    </h2>

    <p className="text-purple-400">
      MERN Authentication User
    </p>

  </div>

</div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

              Welcome To Your

              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Dashboard
              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Passionate B.Tech CSE student with a strong foundation in web development. Skilled in building responsive and user-friendly applications using React, JavaScript, and Tailwind CSS. Eager to apply technical skills and learn in a real-world development environment
            </p>

            <div className="flex gap-4">

              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => navigate('/explore')}>
                Explore
              </button>

              <button
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                  onClick={() => navigate('/fa')}>
                  Learn More
              </button>

            </div>

          </div>

          {/* Right Card */}
          <div className="relative">

            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8">
                User Information
              </h2>

              <div className="space-y-6">

                <div>
                  <p className="text-gray-400 mb-1">
                    Email Address
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    {decodedUser.email}
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">
                    User ID
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 break-all">
                    {decodedUser.email.split('@')[0]}
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">
                    Authentication
                  </p>

                  <div className="flex items-center gap-2 text-green-400 font-medium">
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    Successfully Authenticated
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;