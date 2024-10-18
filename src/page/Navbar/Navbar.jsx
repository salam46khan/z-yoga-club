import './Navbar.css'
import logo from '../../assets/img/logo.png'
import React, { useRef, useState } from 'react';
import pdfFile from '../../assets/pdf/z-yego club.pdf'
import { Link } from 'react-scroll';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const container = useRef();
    const tl = useRef();

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

   


    // const container = useRef()
    // const tl = useRef()
    // const toggleTimeline = () => {
    //     tl.current.reversed(!tl.current.reversed())
    // }

    useGSAP(() => {
        gsap.timeline()
            .from(".logo", {
                scale: 0,
                opacity: 0,
                duration: 0.5
            })
            .from('ul li', {
                y: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
            })

    })




    return (
        <div className="my-nav p-3 w-full  z-50">
            <div className="container flex justify-between items-center">
                <div>
                    <div className="logo cursor-pointer">
                        <Link to={"hero"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <img className='h-12 w-12' src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <div className='hidden md:block'>
                        <ul className='flex gap-2 items-center text-primaryColor'>
                            <li>
                                <Link
                                    to={"hero"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to={"about"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to={"choose"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Feature
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to={"schedule"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Schedule
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to={"events"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to={"contact"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <a className='inline-block hover:bg-opacity-100 duration-200 hover:text-black bg-primaryColor bg-opacity-20 py-2 px-4' href={pdfFile} download={pdfFile} target='_blank'>
                                    Download
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className='block md:hidden w-full' ref={container}>


                        <button onClick={handleNav} className="btn btn-circle bg-primaryColor bg-opacity-30 border-none text-primaryColor">
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
                        <div className={`mob-nav-content absolute right-0 ease-in-out duration-500 top-16 translate-y-2 w-full z-50 ${navOpen ? "translate-x-0 opacity-100" : 'translate-x-[100%] opacity-0'}`}>
{/* 
                        ${navOpen ? "translate-x-0 opacity-100" : 'translate-x-[100%] opacity-0'}
                         
                         */}
                            <ul className='flex flex-col gap-2 text-primaryColor'>
                                <li>
                                    <Link
                                        to={"hero"}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        activeClass="active"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to={"about"}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </li>




                                <li>
                                    <Link
                                        activeClass="active"
                                        to={"choose"}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Feature
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to={"schedule"}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Schedule
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to={"events"}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to={"contact"}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
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