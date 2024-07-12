import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    accountType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(import.meta.env.VITE_API_URL + '/signup', formData);
      if (data.success) {
        setFormData({ username: '', email: '', password: '', accountType: '' });
        toast.success(data.message);
        navigate('/login');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <section className="Signup_container lg:px-24 md:px-16 sm:px-12 px-4 py-6 flex flex-col items-center justify-center">
      <div className="bg-gray-100 w-full flex items-center justify-center py-5 rounded-lg mb-8">
        <h1 className="text-3xl font-semibold">Let's Connect!</h1>
      </div>
      <div className="signup w-full flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow rounded-lg">
          <form onSubmit={handleSignup}>
            {['username', 'email', 'password'].map((field) => (
              <div className="inputbox flex flex-col w-full mb-4" key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field}
                  placeholder={`Enter the ${field}`}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}
            <div className="inputbox flex flex-col w-full mb-4">
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Account Type
              </label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="" disabled>
                  Select Account Type
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
