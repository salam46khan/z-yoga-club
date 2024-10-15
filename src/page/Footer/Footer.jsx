import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css'

const Footer = () => {
    return (
        <div className='my-footer py-5 p-3 text-gray-200'>
            <div className="container">
                <div className='py-5 flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-4xl font-extrabold myTitle text-slate-900'>Z-Yoga Club</h1>
                        <p className='w-full md:w-3/4 pt-3'>
                            Z-Yoga Club is a voluntary wellness club dedicated to promoting physical and mental well-being through the practice of yoga and mindfulness. Our offline classes, workshops, and community events are designed to support every individual on their wellness journey.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col md:flex-row'>
                        <div className='w-full md:w-1/2'>
                            <p className='font-bold text-slate-900 mySub'>Quick Links</p>
                            <ul className='space-y-2 pt-4'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Classes & Schedule</a></li>
                                <li><a href="#">Membership & Plans</a></li>
                                <li><a href="#">Events & Workshops</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <p className='font-bold text-slate-900 mySub'>Contact Information</p>
                            <div className='pt-4'>
                                <p className='font-bold'>Z-Yoga Club</p>
                                <p>123 Wellness Avenue, Dhaka, Bangladesh</p>
                                <p><span className='font-bold'>Phone:</span> +880 123 456 7890</p>
                                <p><span className='font-bold'>Email:</span> info@zyogaclub.com</p>
                            </div>
                            <div className='pt-4 flex gap-3 justify-start items-center'>
                                <a className='h-12 w-12 flex justify-center items-center bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-200 rounded' href="">
                                    <FaFacebookF className='text-2xl'/>
                                </a>
                                <a className='h-12 w-12 flex justify-center items-center bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-200 rounded' href="">
                                    <FaInstagram className='text-2xl'/>
                                </a>
                                <a className='h-12 w-12 flex justify-center items-center bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-200 rounded' href="">
                                    <FaXTwitter className='text-2xl'/>
                                </a>
                                <a className='h-12 w-12 flex justify-center items-center bg-primaryColor text-white hover:bg-white hover:text-primaryColor duration-200 rounded' href="">
                                    <FaYoutube className='text-2xl'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='border-white' />
                    <p className='text-center py-3 '>© 2024 Z-Yoga Club. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;