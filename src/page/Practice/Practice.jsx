import { FaPlayCircle } from 'react-icons/fa';
import vidPic from '../../assets/img/vid.jpg'
import './Practice.css'
import { Rings } from 'react-loader-spinner';
import { RxCross2 } from 'react-icons/rx';
import pdfFile from '../../assets/pdf/z-yego club.pdf'
import MyButton from '../../Components/MyButton';

const Practice = () => {
    return (
        <div className='py-10 md:py-20 p-3'>
            <div className="container flex flex-col md:flex-row gap-2 items-center">
                <div className='w-full md:w-2/5'>
                    <p className='font-extrabold tracking-wide mySub text-xl letter-spacing '>Practice & Flow</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 font-extrabold'>
                        Experience Yoga <span className='text-[#519700]'>Anytime, <br /> Anywhere</span>
                    </h4>
                    <p className='py-5 text-gray-600 w-full md:w-[75%]'>
                        At Z-Yoga Club, we believe that yoga is a journey, and we're here to support you every step of the way. With our Practice & Flow video series, you can experience the benefits of yoga from the comfort of your own home. Whether you're looking to improve your flexibility, strengthen your body, or find peace of mind, these videos are designed to guide you through your practice.
                    </p>

                    <div>
                        <a className='mt-4 inline-block' href={pdfFile} download={pdfFile} target='_blank'>
                            <MyButton>Join with Us</MyButton>
                        </a>
                    </div>
                </div>
                <div className='w-full md:w-3/5'>
                    <div className='relative border rounded-xl overflow-hidden'>
                        <img className='w-full' src={vidPic} alt="" />
                        <div className='absolute top-0 left-0 h-full w-full bg-[#000000b7] flex justify-center items-center'>
                            {/* <button className=' vid-btn'>

                            </button> */}

                            <button className="z-50 vid-btn relative" onClick={() => document.getElementById('my_modal_2').showModal()}>
                                <FaPlayCircle className='text-primaryColor text-7xl ' />


                            </button>
                            <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box p-0 overflow-hidden relative">
                                    <div className='border overflow-hidden h-96'>
                                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/gXuq4M5rU9E?si=9Jpv_AwD26PjqTpB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                    <div className="modal-action absolute top-0 right-5">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className=" h-12 w-12 rounded-full bg-[#7cfa334d] bg-opacity-50 flex justify-center items-center">
                                                <RxCross2 className='text-primaryColor text-3xl' />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practice;