import React from 'react';
import img from '../assets/img/about.png';
import Button from '../layouts/Button';

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
          <img src={img} alt="img" />
            <div className='space-y-4 lg:pt-14'>
                <h3 className='font-semibold text-4xl text-center md:text-start'>Why choose us?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero earum, amet officiis eum ad cumque reprehenderit eaque quos blanditiis repudiandae, dicta culpa quidem dolore incidunt mollitia harum est. Quaerat, nihil?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor totam delectus dolorum, nihil laboriosam modi consequuntur minus esse quas!</p>
                <div className='flex justify-center lg:justify-start'>
                    <Button title="Learn More" />
                </div>
            </div>
        </div>
    )
}

export default About