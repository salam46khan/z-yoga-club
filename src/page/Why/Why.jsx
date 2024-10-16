import WhyContent from "../../Components/WhyContent";
import './Why.css'
const Why = () => {
    return (
        <div id="choose" className="bg-[#1b1919] py-10 md:py-20 p-3">
            <div className="container">
                <div className="text-center">
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