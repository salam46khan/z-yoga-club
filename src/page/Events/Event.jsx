import Countdown from 'react-countdown';
import './Event.css'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const Event = () => {
    // const MindfulnessDate = new Date('2024-10-6T00:00:00'); 
    const MindfulnessDate = new Date('2025-02-15T09:00:00');
    const WeekendDate = new Date('2024-11-14T00:10:00');
    const HolisticDate = new Date('2024-12-05T08:00:00');
    const StressDate = new Date('2024-11-28T10:00:00');

    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
        })

    }, [])
    return (
        <div id='events' className='py-10 md:py-32 overflow-hidden p-3' data-scroll-container>
            <div className="container flex flex-col md:flex-row justify-center items-stretch gap-5" data-scroll-section>

                <div className='w-full md:w-1/2 flex flex-wrap justify-center items-center gap-3 md:gap-0' data-scroll-section>
                    <div className='w-full py-8' data-scroll data-scroll-speed="-0.05">
                        <p className='font-extrabold tracking-wide mySub letter-spacing text-xl'>Events & Workshops</p>
                        <h4 className='myTitle text-2xl md:text-4xl py-4 font-extrabold'>
                            Join Our Exclusive <span className='text-secondaryColor'>Wellness <br /> Events and Workshops</span>
                        </h4>
                    </div>
                    <div className='w-full md:w-1/2 text-center p-2 py-12 flex flex-col justify-center items-center'>
                        <div>
                            <h4 className='mySub text-2xl'>Mindfulness & Meditation</h4>
                            <p className='text-xl py-4 text-gray-500'>February 15, 2025</p>
                        </div>
                        <div className='myTitle text-3xl lg:text-4xl'>
                            {
                                MindfulnessDate > 0 ? <Countdown date={MindfulnessDate} /> : <p>Day: Hour: Min: Sec</p>
                            }
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 bg-[#a9d30340] text-center p-2 py-12 flex flex-col justify-center items-center'>
                        <div>
                            <h4 className='mySub text-2xl '>Weekend Yoga Retreat</h4>
                            <p className='text-xl py-4 text-gray-600'>November 14, 2024</p>
                        </div>
                        <div className='myTitle text-3xl lg:text-4xl text-secondaryColor'>
                            {
                                MindfulnessDate > 0 ? <Countdown date={WeekendDate} /> : <p>Day: Hour: Min: Sec</p>
                            }
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 bg-[#a9d30340] text-center p-2 py-12 flex flex-col justify-center items-center'>
                        <div>
                            <h4 className='mySub text-2xl '>Holistic Wellness Day</h4>
                            <p className='text-xl py-4 text-gray-600'>December 5, 2024</p>
                        </div>
                        <div className='myTitle text-3xl lg:text-4xl text-secondaryColor'>
                            {
                                MindfulnessDate > 0 ? <Countdown date={HolisticDate} /> : <p>Day: Hour: Min: Sec</p>
                            }
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 text-center p-2 py-12 flex flex-col justify-center items-center'>
                        <div>
                            <h4 className='mySub text-2xl '>Stress Relief Workshop</h4>
                            <p className='text-xl py-4 text-gray-600'>November 28, 2024</p>
                        </div>
                        <div className='myTitle text-3xl lg:text-4xl'>
                            {
                                MindfulnessDate > 0 ? <Countdown date={StressDate} /> : <p>Day: Hour: Min: Sec</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='event-pic w-full md:w-1/2 min-h-80' data-scroll data-scroll-speed="-0.15"></div>
            </div>
        </div>
    );
};

export default Event;