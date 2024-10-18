import { useEffect, useState } from 'react';
import faqPic from '../../assets/svg/FAQs-amico.svg'
import LocomotiveScroll from 'locomotive-scroll';
const Faq = () => {
    const [faqData, setFaqData] = useState([]);

    useEffect(() => {
        fetch('faqs.json')
            .then(res => res.json())
            .then(data => setFaqData(data))
    }, [])


    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
        })

    }, [])
    return (
        <div className="p-3 py-10 md:py-32 bg-[#1b1919] overflow-hidden" data-scroll-container>
            <div className="container flex flex-col md:flex-row gap-4 justify-center items-center" data-scroll-scetion>
                <div className="w-full md:h-1/2" data->
                    <img className='w-[80%] mx-auto' src={faqPic} alt="" data-scroll data-scroll-speed="-0.2" />
                </div>
                <div className="w-full py-10 md:h-1/2">
                    <p className='font-extrabold text-white tracking-wide mySub text-xl letter-spacing ' data-scroll data-scroll-speed="-0.03">FAQ</p>
                    <h4 className='myTitle text-white text-2xl md:text-4xl py-4 font-extrabold' data-scroll data-scroll-speed="-0.05">
                        Find Answers to Your Questions <br />about <span className='text-primaryColor'> Z-Yoga Club</span>
                    </h4>

                    <div className='py-5'>

                        {
                            faqData.map(faq =>
                                <div key={faq.id} className="collapse collapse-arrow my-1">
                                    <input type="radio" name="my-accordion-2" defaultChecked />
                                    <div className="collapse-title bg-[#a9d30320]  text-primaryColor mySub">{faq.question}</div>
                                    <div className="collapse-content text-gray-200 bg-[#a6d30308]">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;