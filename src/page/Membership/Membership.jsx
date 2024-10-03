import './Membership.css'
import pdfFile from '../../assets/pdf/z-yego club.pdf'
import { PiCrown } from 'react-icons/pi';
import { TbCurrencyTaka } from 'react-icons/tb';
import MyButton from '../../Components/MyButton';
const Membership = () => {
    return (
        <div className="py-10 md:py-20 bg-[#1b1919]" id="membership">
            <div className="container flex flex-col md:flex-row items-center gap-5">

                <div className="w-full md:w-2/5 p-3">
                    <p className='font-extrabold tracking-wide mySub text-xl letter-spacing text-white'>Membership & Plans</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 text-white font-extrabold'>
                        Tailored Membership Options for <span className='text-primaryColor'>Your Wellness</span>
                    </h4>
                    <p className='py-6 text-gray-200 w-full md:w-[75%]'>
                        At Z-Yoga Club, we believe in providing flexible membership plans that fit your wellness needs. Whether you're looking for a short-term introduction or a long-term commitment to a healthier lifestyle, we have the perfect plan for you. Choose a membership that helps you achieve your wellness goals with the support of our community.
                    </p>

                    <div>
                        <a className='mt-4 inline-block' href={pdfFile} download={pdfFile} target='_blank'>
                            <MyButton>Join with Us</MyButton>
                        </a>
                    </div>
                </div>


                <div className="w-full md:w-3/5 p-3 md:p-10 flex flex-col md:flex-row justify-center gap-5 md:items-stretch items-center">

                    {/* card 1 */}
                    <div className="member-card w-full max-w-md md:max-w-xs rounded-lg overflow-hidden">
                        <div className='icon'>
                            <PiCrown className='text-primaryColor text-6xl' />
                        </div>
                        <div className='flex justify-center items-center myTitle pt-6'>
                            <TbCurrencyTaka className='text-3xl' />
                            <p className='text-6xl'>100/</p>
                            <p className='text-3xl px-1'>1 mon</p>
                        </div>
                        <h4 className='text-primaryColor text-center text-xl mySub py-4'>Basic</h4>

                        <div>
                            <ol className='list'>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>
                                        Perfect for those new to yoga
                                    </span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>short-term wellness experience</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Access to all offline yoga classes</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>community events and workshops</span>
                                </li>
                            </ol>
                        </div>

                        <div className='flex justify-center pt-5'>
                            <a className='mt-4 inline-block' href={pdfFile} download={pdfFile} target='_blank'>
                                <MyButton>Join with Us</MyButton>
                            </a>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="member-card w-full max-w-md md:max-w-xs rounded-lg overflow-hidden">
                        <div className='icon'>
                            <PiCrown className='text-primaryColor text-6xl' />
                        </div>
                        <div className='flex justify-center items-center myTitle pt-6'>
                            <TbCurrencyTaka className='text-3xl' />
                            <p className='text-6xl'>500/</p>
                            <p className='text-3xl px-1'>5 mon</p>
                        </div>
                        <h4 className='text-primaryColor text-center text-xl mySub py-4'>Standard</h4>

                        <div>
                            <ol className='list'>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Special wellness workshops</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Long-term wellness and growth</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Access to all offline yoga classes</span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-primaryColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>community events and workshops</span>
                                </li>
                            </ol>
                        </div>

                        <div className='flex justify-center pt-5'>
                            <a className='mt-4 inline-block' href={pdfFile} download={pdfFile} target='_blank'>
                                <MyButton>Join with Us</MyButton>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Membership;