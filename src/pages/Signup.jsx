import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
	return (
		<>
			<section className="Signup_container lg:px-24 md:px-16 sm:px-12 px-4 py-6 flex flex-col items-center justify-center">
				<div className='bg-gray-100 w-full flex items-center justify-center py-5 rounded-lg mb-8'>
					<h1 className='text-3xl font-semibold'>Let's Connect!</h1>
				</div>

				<div className="signup w-full flex items-center justify-center">
					<div className='w-full max-w-md p-8 bg-white shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px] rounded-lg'>
						<form>
							<div className="inputbox flex flex-col w-full mb-4">
								<label htmlFor="username" className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
								<input 
									type="text" 
									placeholder='Enter the Text'
									name='username'
									className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
								/>
							</div>

							<div className="inputbox flex flex-col w-full mb-4">
								<label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
								<input 
									type="email" 
									placeholder='Enter the Email'
									name='email'
									className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
								/>
							</div>

							<div className="inputbox flex flex-col w-full mb-4">
								<label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
								<input 
									type="password" 
									placeholder='Enter the password'
									name='password'
									className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
								/>
							</div>

							<div className="inputbox flex flex-col w-full mb-4">
								<label htmlFor="accountType" className='block text-sm font-medium text-gray-700 mb-2'>Select Your Account Type</label>
								<select
									name="accountType"
									className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
									
								>
									<option value="" disabled>Select Account Type</option>
									<option value="buyer">Buyer</option>
									<option value="seller">Seller</option>
								</select>
							</div>

						

							<button 
								type="submit"
								
								className='w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							>
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default Signup;
