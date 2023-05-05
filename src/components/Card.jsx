import React from 'react';

const card = () => {
  return (
    <div>
      <div className='card w-72 px-2 py-8 mb-6 border rounded-2xl shadow-md'>
        <figure>
          <img className='rounded-full w-40 h-40' src='/img/Jesse.jpg' alt='Shoes' />
        </figure>
        <div className='card-body p-6'>
          <h2 className=' text-center text-lg border-b mx-auto p-2 mb-4 border-gray-400'>
            Jesse Hamberg
          </h2>

          <div className='card-actions justify-start grid grid-cols-3 '>
            <div className='badge badge-outline'>React</div>
            <div className='badge badge-outline'>Express</div>
            <div className='badge badge-outline'>MongoDB</div>
            <div className='badge badge-outline'>React</div>
            <div className='badge badge-outline'>Express</div>
            <div className='badge badge-outline'>MongoDB</div>
            <div className='badge badge-outline'>React</div>
            <div className='badge badge-outline'>Express</div>
            <div className='badge badge-outline'>MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
