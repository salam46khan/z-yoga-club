import { PiSunHorizonBold } from 'react-icons/pi';
import classPic from '../../assets/svg/Online calendar-amico.svg'
import './Class.css'
import { BsCloudMoon } from 'react-icons/bs';
const Class = () => {
    return (
        <div id="class" className="py-10 md:py-20 p-3">
            <div className="container flex flex-col md:flex-row justify-center gap-5 items-center">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img className='w-full md:w-[80%]' src={classPic} alt="" />
                </div>
                <div className='md:p-5 w-full md:w-1/2'>
                    <p className='font-extrabold tracking-wide mySub letter-spacing text-xl'>Classes & Schedule</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 font-extrabold'>
                        Flexible Class Timings to Fit <span className='text-primaryColor'>
                            Your <br /> Daily Routine
                        </span>
                    </h4>
                    <div className='flex justify-start gap-5 pb-5 items-stretch'>
                        <div className="Class-time w-1/2 max-w-xs">
                            <div className='icon'>
                                <PiSunHorizonBold className='text-5xl text-primaryColor' />
                            </div>
                            <h4 className='text-primaryColor mt-2 py-2 text-xl mySub'>
                                Morning Session
                            </h4>
                            <p className='font-extrabold'>
                                7:00 AM - 8:00 AM
                            </p>
                        </div>
                        <div className="Class-time w-1/2 max-w-xs">
                            <div className='icon'>
                                <BsCloudMoon className='text-5xl text-primaryColor' />
                            </div>
                            <h4 className='text-primaryColor mt-2 py-2 text-xl mySub'>
                                Evening Session
                            </h4>
                            <p className='font-extrabold'>
                                6:00 PM - 7:00 PM
                            </p>
                        </div>
                    </div>
                    <p className='w-full max-w-xl py-2'>
                        At Z-Yoga Club, we understand that your schedule can be hectic, which is why we offer yoga classes twice a day to help you find balance and wellness at a time that suits you.
                    </p>
                    <h4 className='text-xl font-bold italic text-slate-950 mySub'>
                        Note: Please be informed that Friday and Saturday are holidays. Classes will resume on Sunday.
                    </h4>
                </div>
            </div>
        </div >
    );
};

export default Class;