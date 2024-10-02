import React from 'react';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import './About.css'
import { GrYoga } from 'react-icons/gr';
import { MdOutlineEmojiEvents } from 'react-icons/md';

const About = () => {
    return (
        <div className='py-10 md:py-14' id='about'>
            <div className="container flex flex-col md:flex-row justify-between items-center py-10 md:py-20 ">
                <div className='w-full md:w-1/2 p-3 md:p-6'>
                    <p className='font-extrabold tracking-wide mySub letter-spacing text-xl'>ABOUT US</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 font-extrabold'>Your Sanctuary for <span className='text-primaryColor'>
                        Mind and <br /> Body</span> Wellness</h4>
                    <p className='w-full max-w-lg'>
                        At Z-Yoga Club, we believe that yoga is a journey towards holistic well-being. Our welcoming community offers a variety of classes for all levels, led by experienced instructors who are passionate about guiding you. Join us to enhance your practice, find your balance, and connect with like-minded individuals.
                    </p>
                    <div className='flex gap-5 mt-8 justify-start items-stretch'>
                        <div className='about-card w-1/2 max-w-60'>
                            <div className="icon">
                                <GrYoga className='text-5xl text-primaryColor' />
                            </div>
                            <p className='mySub text-xl mt-5'>Expert Instructors</p>
                            <p className='mt-5 text-xs'>
                                Our certified instructors bring a wealth of knowledge and experience, guiding you on your journey with personalized attention and support.
                            </p>
                        </div>
                        <div className='about-card w-1/2 max-w-60'>
                            <div className="icon">
                                <MdOutlineEmojiEvents className='text-5xl text-primaryColor' />
                            </div>
                            <p className='mySub text-xl mt-5'>Community Events</p>
                            <p className='mt-5 text-xs'>
                                We host workshops, retreats, and special events to deepen your practice and strengthen the bonds within our community.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='w-full md:w-1/2 p-3 md:p-5'>
                    <div className='grid grid-cols-3 gap-3 p-3 md:p-6'>
                        <div className='bg bg-red-300 rounded-md overflow-hidden'>
                            <img className='h-full w-full object-fill' src={img1} alt="" />
                        </div>
                        <div className='bg bg-red-300 rounded-md overflow-hidden col-span-2 row-span-2'>
                            <img className='h-full w-full object-fill' src={img2} alt="" />
                        </div>
                        <div className='bg bg-red-300 rounded-md overflow-hidden row-span-2'>
                            <img className='h-full w-full object-fill' src={img3} alt="" />
                        </div>
                        <div className='bg bg-red-300 col-span-2 rounded-md overflow-hidden '>
                            <img className='h-full w-full object-fill' src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;