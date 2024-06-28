import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const menus = [
		{ path: '/', label: 'Home' },
		{ path: '/login', label: 'Login' },
		{ path: '/signup', label: 'Signup' },
	];

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			<header className='sticky top-0 left-0 w-full z-20 flex items-center justify-between lg:px-24 md:px-16 sm:px-12 px-4 py-6 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] bg-white'>
				<div className='logo'>
					<Link to='/' className='font-semibold text-lg'>PicPrism</Link>
				</div>
				<nav className='hidden md:flex'>
					<div className='flex space-x-4'>
						{menus.map((item, index) => (
							<div key={index}>
								<NavLink 
									to={item.path}
									className='hover:text-gray-600 font-semibold text-md'
								>
									{item.label}
								</NavLink>
							</div>
						))}
					</div>
				</nav>
				<button
					className='md:hidden p-2 focus:outline-none'
					onClick={toggleSidebar}
				>
					{/* Icon for the hamburger menu */}
					<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'/>
					</svg>
				</button>
			</header>

			{/* Sidebar for small screens */}
			<div
				className={`fixed w-56 inset-0 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] z-50 transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out md:hidden`}
			>
				<div className='flex justify-end p-0'>
					<button
						className='text-black p-2 focus:outline-none'
						onClick={toggleSidebar}
					>
						{/* Icon for the close button */}
						<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'/>
						</svg>
					</button>
				</div>
				<nav className='flex flex-col items-start px-4 mt-1 space-y-4'>
					{menus.map((item, index) => (
						<NavLink
							key={index}
							to={item.path}
							className='text-black text-md font-semibold hover:text-gray-600'
							onClick={toggleSidebar}
						>
							{item.label}
						</NavLink>
					))}
				</nav>
			</div>
		</>
	);
};

export default Navbar;
