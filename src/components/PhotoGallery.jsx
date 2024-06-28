import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import ImageCard from './ImageCard';

const PhotoGallery = () => {
  const images = [
    {
      id: 1,
      imageUrl: '/image/prism.jpg',
      title: 'coder99',
      price: 20,
      icon1: <FaShoppingCart size={24} />,
      icon2: <IoIosHeart size={24}  />,
    },
    {
      id: 2,
      imageUrl: '/image/prism.jpg',
      title: 'forestLover',
      price: 25,
      icon1: <FaShoppingCart size={24} />,
      icon2: <IoIosHeart size={24} />,
    },
		{
      id: 2,
      imageUrl: '/image/prism.jpg',
      title: 'forestLover',
      price: 25,
      icon1: <FaShoppingCart size={24} />,
      icon2: <IoIosHeart size={24} />,
    },
		{
      id: 2,
      imageUrl: '/image/prism.jpg',
      title: 'forestLover',
      price: 25,
      icon1: <FaShoppingCart size={24} />,
      icon2: <IoIosHeart size={24} />,
    },
		{
      id: 2,
      imageUrl: '/image/prism.jpg',
      title: 'forestLover',
      price: 25,
      icon1: <FaShoppingCart size={24} />,
      icon2: <IoIosHeart size={24} />,
    },
		{
      id: 2,
      imageUrl: '/image/prism.jpg',
      title: 'forestLover',
      price: 25,
      icon1: <FaShoppingCart size={24} />,
      icon2: <IoIosHeart size={24} />,
    },
		{
      id: 2,
      imageUrl: '/image/prism.jpg',
      title: 'forestLover',
      price: 25,
      icon1: <FaShoppingCart size={24} />,
      icon2: <IoIosHeart size={24} />,
    },
    // Add more image objects as needed
  ];
	return (
		<>
			<section className='lg:px-24 md:px-16 sm:px-12 px-4 py-6'>
				<div className='bg-gray-100 flex items-center justify-center py-5 rounded-lg'>
					<h1 className='text-3xl font-semibold'>Photo Gallery</h1>
				</div>

				{/* image card ... */}

				<div className='items-center gap-5 mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
					{images.map((image) => (
						<ImageCard
							key={image.id}
							id={image.id}
							imageUrl={image.imageUrl}
							title={image.title}
							price={image.price}
							icon1={image.icon1}
							icon2={image.icon2}
						/>
					))}
				</div>

				{/* <div className='items-center gap-5 mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
						<div className="card shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px] rounded-md p-4">
							<div className='w-full h-[200px] overflow-hidden rounded-md'>
							<img src="/image/prism.jpg" alt="" className=' w-full h-full hover:scale-150 ease-linear duration-300 transform cursor-pointer'/>
							</div>		

							<div className='font-medium text-white bg-black inline-block px-5 py-1 mt-4 rounded-full text-sm'>
								<h1>Hello world</h1>
							</div>
							
							<div className='mt-3 flex items-end justify-between'>
								<div className=''>
                  <p className='text-lg font-semibold'>The Beach</p>
									<p className='text-gray-500'>Price : $20</p>
								</div>
								<div className='flex items-center gap-3'>
								<FaShoppingCart size={24} className='cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>
								<IoIosHeart size={24} className='text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>


								</div>
							</div>

						</div>
						


					 </div> */}
			</section>
		</>
	);
};

export default PhotoGallery;
