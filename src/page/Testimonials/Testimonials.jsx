import { useEffect, useState } from 'react';
import Testi from '../../Components/Testi';
import './Testimonials.css'



// import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiSolidQuoteLeft } from 'react-icons/bi';


const Testimonials = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    // Function to update slidesPerView based on window width
    const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width <= 425) {
            setSlidesPerView(1);
        } else if (width <= 800) {
            setSlidesPerView(3);
        } else {
            setSlidesPerView(3);
        }
    };

    useEffect(() => {
        updateSlidesPerView();

        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);


    return (
        <div className="py-10 md:py-20 p-3" id='testimonial'>
            <div className="container">
                <div className="text-center">
                    <p className='font-extrabold tracking-wide mySub text-xl letter-spacing text-white'>Testimonial</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 text-white font-extrabold'>
                        Real Stories of <span className="text-primaryColor">Transformation and Wellness</span> at Z-Yoga Club
                    </h4>
                </div>
                <div className='pt-10'>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"

                    >

                        {
                            comment.map(comment =>
                                <SwiperSlide>
                                    <div className="test-item w-full">
                                        <BiSolidQuoteLeft className="text-6xl mx-auto mt-6 text-primaryColor" />
                                        <p className="text-center p-4 py-8">
                                            {comment.comment.length>250 ? comment.comment.slice(0,250)+'...': comment.comment}
                                        </p>
                                        <div className="w-full h-24 flex gap-4 bg-primaryColor bg-opacity-15 items-center p-4">
                                            <img className="h-16 w-16 rounded-full object-cover" src={comment.imgUrl} alt="" />
                                            <div>
                                                <p className="text-2xl mySub text-primaryColor">{comment.name}</p>
                                                <p>__Member</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                        }
                        
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;