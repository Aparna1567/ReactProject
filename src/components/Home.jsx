import React from 'react';
import Button from '../layouts/Button';

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/image.png')] bg-cover bg-no-repeat">
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-whitecol font-semibold text-6xl'>Order Tasty & Fresh Food anytime!</h1>
        <p className='text-yel'>Feel the joy of mouthwatering food.</p>
        <div className='lg:pl-44'>
          <Button title="Order Now" />
        </div>
      </div >
    </div>
  )
}

export default Home