import React from 'react';

const ImageCard = ({ id, imageUrl, title, price, icon1, icon2 }) => {
  const formattedTitle = '@' + title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className="card hover:shadow-2xl shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px] rounded-md p-4">
      <div className='w-full h-[200px] overflow-hidden rounded-md'>
        <img src={imageUrl} alt={title} className='w-full h-full hover:scale-150 ease-linear duration-300 transform cursor-pointer'/>
      </div>		
      <div className='font-medium text-white bg-black inline-block px-5 py-1 mt-4 rounded-full text-sm'>
        <h1>{formattedTitle}</h1>
      </div>
      <div className='mt-3 flex items-end justify-between'>
        <div>
          <p className='text-lg font-semibold'>{title}</p>
          <p className='text-gray-500'>Price: ${price}</p>
        </div>
        <div className='flex items-center gap-3'>
          <div className='cursor-pointer hover:scale-110 transition-all ease-linear duration-300'>
            {icon1}
          </div>
          <div className='cursor-pointer hover:scale-110 transition-all ease-linear duration-300 text-red-500' >
            {icon2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
