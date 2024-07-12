import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

import { useDispatch , useSelector } from 'react-redux';
import { login , logout ,refreshTokens } from '../../store/slice/authSlice';

const Login = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Form Data:', { email, password }); // Log form data to console
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + '/login', { email, password });
      const data = res.data;
      console.log('Success Response:', data); // Log success response to console


      // Dispatch login action to update the Redux state
      dispatch(login({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        role: data.role,
        author: data.author
      }));

			navigate(`${data.role}/profile`)

      toast.success(data.message);
    } catch (error) {
      console.error('Error Response:', error.response?.data || error.message); // Log error to console
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <section className="login lg:px-24 md:px-16 sm:px-12 px-4 py-6 flex flex-col items-center justify-center">
      <div className='bg-gray-100 w-full flex items-center justify-center py-5 rounded-lg mb-8'>
        <h1 className='text-3xl font-semibold'>Login</h1>
      </div>

      <div className="login w-full flex items-center justify-center">
        <div className='w-full max-w-md p-8 bg-white shadow rounded-lg'>
          <form onSubmit={handleLogin}>
            <div className="inputbox flex flex-col w-full mb-4">
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
              <input
                type="email"
                placeholder='Enter the Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <div className="inputbox flex flex-col w-full mb-4">
              <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
              <input
                type="password"
                placeholder='Enter the password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <div className='flex items-center justify-end gap-4 w-full mb-4'>
              <a href="#" className='text-sm'>Forget Password</a>
              <Link to='/signup' className='text-sm'>Create Account</Link>
            </div>

            <button
              type="submit"
              className='w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
