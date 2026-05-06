import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrorMessage('');
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setErrorMessage('');

    try {

      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {

        localStorage.setItem('token', data.token);

        toast.success(data.message || 'Login successful');

        navigate('/home');

      } else {

        setErrorMessage(data.message || 'Invalid email or password');

        toast.error(data.message || 'Login failed');
      }

    } catch (error) {

      setErrorMessage('Server error. Please try again.');

      toast.error('Server Error');

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 px-4">

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-300 mt-2">
            Login to continue...
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-16 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-sm text-purple-400 hover:text-purple-300"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>

            </div>

          </div>

          {errorMessage && (

            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
              {errorMessage}
            </div>

          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

        </form>

        <div className="mt-6 text-center">

          <p className="text-gray-400">
            Don't have an account?{' '}

            <Link
              to="/signup"
              className="text-purple-400 hover:text-purple-300"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;