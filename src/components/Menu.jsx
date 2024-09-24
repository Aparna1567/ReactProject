import React from 'react';
import DishesCard from '../layouts/DishesCard';
import img1 from '../assets/img/menu1.png';
import img2 from '../assets/img/menu2.jpg';
import img3 from '../assets/img/menu3.png';

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>Premium Menu</h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img={img1} title="Delicious Dish" price="$10.45"/>
            <DishesCard img={img2} title="Delicious Dish" price="$22.67"/>
            <DishesCard img={img3} title="Delicious Dish" price="$14.99"/>
        </div>
    </div>
  )
}

export default Menu