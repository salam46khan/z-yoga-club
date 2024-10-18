import React, { useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import './Contact.css'
import { FiPhone } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import MyButton from '../../Components/MyButton';
import LocomotiveScroll from 'locomotive-scroll';

const Contact = () => {
    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
        })

    }, [])
    return (
        <div id='contact' className='py-10 md:py-20 p-3' data-scroll-container>
            <div className="container contact-content flex flex-col md:flex-row justify-center items-center">
                <div className='w-full md:w-1/2 p-5 md:p-10 py-20' data-scroll-section>
                    <div className='flex items-center gap-4 text-gray-400 py-5' data-scroll data-scroll-speed="-0.05">
                        <div className='h-12 w-12 icon'>
                            <CiLocationOn className='text-3xl text-primaryColor' />
                        </div>
                        <div>
                            <h4 className='text-xl font-bold text-primaryColor'>Address</h4>
                            <p>Kaliganj Upozila, Satkhira</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 py-5' data-scroll data-scroll-speed="-0.05">
                        <div className='h-12 w-12 icon'>
                            <FiPhone className='text-3xl text-primaryColor' />
                        </div>
                        <div>
                            <h4 className='text-xl font-bold text-primaryColor'>
                                Let's Talk
                            </h4>
                            <p>+8801771-393709</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 py-5' data-scroll data-scroll-speed="-0.05">
                        <div className='h-12 w-12 icon'>
                            <MdMailOutline className='text-3xl text-primaryColor' />
                        </div>
                        <div>
                            <h4 className='text-xl font-bold text-primaryColor'>
                                E-mail
                            </h4>
                            <p>z-yoga-club@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 bg-[#1b1919] p-5 md:p-10 py-10'>
                    <div>
                        <p className='font-extrabold text-white tracking-wide mySub text-xl letter-spacing '>Contact Us</p>
                        <h4 className='myTitle text-white text-2xl md:text-4xl py-4 font-extrabold'>
                            We're Here to Help You on <br /> Your <span className='text-primaryColor'>Wellness Journey</span>
                        </h4>
                    </div>
                    <div className='mt-5'>
                        <form className="">
                            <div className='flex flex-col md:flex-row justify-center items-center md:gap-5 '>
                                <div className="form-control w-full md:w-1/2 py-2">
                                    <label className="label">
                                        <span className="label-text text-white">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Type Your Name" className="input input-bordered bg-[#a9d30320] rounded-full focus:outline-none text-gray-300" required />
                                </div>
                                <div className="form-control w-full md:w-1/2 py-2">
                                    <label className="label">
                                        <span className="label-text text-white">Your Email</span>
                                    </label>
                                    <input type="email" placeholder="Type Your Email" className="input input-bordered bg-[#a9d30320] rounded-full focus:outline-none text-gray-300" required />
                                </div>

                            </div>

                            <div className="form-control py-2">
                                <label className="label">
                                    <span className="label-text text-white">Subject</span>
                                </label>
                                <input type="text" placeholder="Type Subject" className="input input-bordered bg-[#a9d30320] rounded-full focus:outline-none text-gray-300" required />
                            </div>
                            <div className="form-control py-2">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea type="email" placeholder="Type Your Email" className="textarea textarea-bordered bg-[#a9d30320] rounded-full focus:outline-none text-gray-300" required />
                            </div>

                            <div className="form-control mt-6 ">
                                <button>
                                    <MyButton>Submit</MyButton>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;