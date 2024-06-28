import React from 'react'
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
	return (
		<>
		  <section className='py-20'>
				<div className='flex items-center justify-center '>
					<form>
						<div className='relative'>
						<input type="search" name="search" id="search" className='form-input   p-2 pr-8 rounded-md w-96 sm:w-[60vw] lg:w-[64vw] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] ' placeholder='Search your Assets....'/>
						<IoIosSearch className='absolute top-3 right-2' size={20} />
						</div>
						
					</form>
				</div>
			</section>
		</>
	)
}

export default HeroSection