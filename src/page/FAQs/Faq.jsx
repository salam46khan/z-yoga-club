import { useEffect, useState } from 'react';
import faqPic from '../../assets/svg/FAQs-amico.svg'
const Faq = () => {
    const [faqData, setFaqData] = useState([]);

    useEffect(() => {
        fetch('faqs.json')
            .then(res => res.json())
            .then(data => setFaqData(data))
    }, [])
    return (
        <div className="p-3 py-10 md:py-20 bg-[#1b1919]">
            <div className="container flex gap-4 justify-center items-center">
                <div className="w-full md:h-1/2">
                    <img className='w-full' src={faqPic} alt="" />
                </div>
                <div className="w-full md:h-1/2">
                    <p className='font-extrabold text-white tracking-wide mySub text-xl letter-spacing '>Frequently Asked Questions</p>
                    <h4 className='myTitle text-white text-2xl md:text-4xl py-4 font-extrabold'>
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