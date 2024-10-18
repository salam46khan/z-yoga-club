import './Hero.css'
import pdfFile from '../../assets/pdf/z-yego club.pdf'
import MyButton from '../../Components/MyButton';
import Headroom from 'react-headroom';
import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {

    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
        })

    }, [])

    useGSAP(() => {
        gsap.timeline()
            .from(".hero-content-1", {
                opacity: 0,
                duration: 0.5,
                delay: 1,
                stagger: 0.6,
                scale:0.7,
            })
    })

    return (
        <div className="myHero relative overflow-hidden" id='hero'>

            <div className='z-50 relative'>
                <Headroom>
                    <Navbar></Navbar>
                </Headroom>
            </div>


            <div className='absolute hidden h-full w-36 top-0 right-10 md:flex items-center overflow-hidden justify-center'>
                <h1 className='rotate-90 side-text myTitle text-nowrap text-7xl font-bold'>Z-YOGA CLUB</h1>
            </div>
            <div className="container py-20 p-2 flex items-end h-[90%]" data-scroll-container>
                <div className=' w-full md:w-1/2' data-scroll-section>
                    <h1 className='myTitle text-5xl md:text-7xl font-extrabold text-white hero-content-1' data-scroll data-scroll-speed="0.2">Cultivate <span className='text-primaryColor'>Calm & <br /> Confidence</span></h1>
                    <p className='w-full max-w-xl mySub text-gray-200 text-xl hero-content-1' data-scroll data-scroll-speed="0.17">
                        Join us to cultivate peace and strength.
                        Embrace a community dedicated to wellness.
                    </p>
                    <a className='mt-4 inline-block hero-content-1' href={pdfFile} download={pdfFile} target='_blank' data-scroll data-scroll-speed="0.1">
                        <MyButton>Download</MyButton>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;