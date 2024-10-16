import './Navbar.css'
import logo from '../../assets/img/logo.png'
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import pdfFile from '../../assets/pdf/z-yego club.pdf'


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)


    const container = useRef()
    const tl = useRef()
    const toggleTimeline = () => {
        tl.current.reversed(!tl.current.reversed())
    }

    useGSAP(() => {
        tl.current = gsap.timeline()
            .from('.mob-nav', {
                x: 100,
                duration: 1,
                opacity: 0
            })
            .from('.mob-nav ul li', {
                opacity: 0,
                duration: 1,
                stagger: 0.4
            })
            .reverse()
    }, { scope: container }
    )

    return (
        <div className="my-nav p-3 w-full  z-50">
            <div className="container flex justify-between items-center">
                <div>
                    <div className="logo">
                        <a href="#">
                            <img className='h-12 w-12' src={logo} alt="" />
                        </a>
                    </div>
                </div>
                <div className=''>
                    <div className='hidden md:block'>
                        <ul className='flex gap-2 items-center text-primaryColor'>
                            <li><a className='nav-item' href="#">Home</a></li>
                            <li><a className='nav-item' href="#about">About</a></li>
                            <li><a className='nav-item' href="#choose">Fetcher</a></li>
                            <li><a className='nav-item' href="#schedule">Schedule</a></li>
                            <li><a className='nav-item' href="#events">Events</a></li>
                            <li><a className='nav-item' href="#contact">Contact Us</a></li>
                            <li>
                                <a className='inline-block hover:bg-opacity-100 duration-200 hover:text-black bg-primaryColor bg-opacity-20 py-2 px-4' href={pdfFile} download={pdfFile} target='_blank'>
                                    Download
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className='block md:hidden w-full' ref={container}>


                        <button onClick={() => setNavOpen(!navOpen)} className="btn btn-circle bg-primaryColor bg-opacity-30 border-none text-primaryColor">
                            {
                                navOpen ?
                                    <svg
                                        className="swap-on fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512">
                                        <polygon
                                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                    </svg>
                                    :
                                    <svg
                                        className="swap-off fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512">
                                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                    </svg>

                            }
                        </button>
                        <div className={`mob-nav-content absolute right-0 ease-in-out duration-500 top-16 translate-y-2 w-full z-50 ${navOpen ? 'translate-x-[100%] opacity-0' : "translate-x-0 opacity-100"}`}>
                            <ul className='flex flex-col gap-2 text-primaryColor'>
                                <li><a className='nav-item' href="#">Home</a></li>
                                <li><a className='nav-item' href="#about">About</a></li>
                                <li><a className='nav-item' href="#choose">Fetcher</a></li>
                                <li><a className='nav-item' href="#schedule">Schedule</a></li>
                                <li><a className='nav-item' href="#events">Events</a></li>
                                <li><a className='nav-item' href="#contact">Contact Us</a></li>
                                <li>
                                    <a className='inline-block hover:bg-opacity-100 duration-200 hover:text-black bg-primaryColor bg-opacity-20 py-2 px-4' href={pdfFile} download={pdfFile} target='_blank'>
                                        Download
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;