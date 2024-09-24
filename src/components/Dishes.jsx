import React from 'react'
import DishesCard from '../layouts/DishesCard';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.png';
import img6 from '../assets/img/img6.jpg';

const Dishes = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
            <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>
                Our Dishes
            </h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                <DishesCard img={img1} title="Chicken Briyani" price="$10.99" />
                <DishesCard img={img2} title="Chicken Chow Mein" price="$12.59" />
                <DishesCard img={img3} title="Fish Fry" price="$9.14" />
                <DishesCard img={img4} title="Panner Masala" price="$16.76" />
                <DishesCard img={img5} title="Mutton Ghee Roast" price="$20.32" />
                <DishesCard img={img6} title="Sweetcorn Soup" price="$13.40" />
            </div>
        </div>
    )
}

export default Dishes;