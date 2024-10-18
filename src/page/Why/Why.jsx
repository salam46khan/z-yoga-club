import LocomotiveScroll from "locomotive-scroll";
import WhyContent from "../../Components/WhyContent";
import './Why.css'
import { useEffect } from "react";
const Why = () => {
    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
        })

    }, [])
    return (
        <div id="choose" className="bg-[#1b1919] py-10 md:py-28 p-3 overflow-hidden" data-scroll-container>
            <div className="container" data-scroll-section>
                <div className="text-center" data-scroll data-scroll-speed="-0.1">
                    <p className='font-extrabold tracking-wide mySub text-xl letter-spacing text-white'>Why Join Here</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 text-white font-extrabold'>
                        Discover the Transformative <span className="text-primaryColor">Benefits of Yoga</span>
                    </h4>
                </div>

                <div className="lg:px-10">
                    <WhyContent></WhyContent>
                </div>
            </div>
        </div>
    );
};

export default Why;