import './Hero.css'
import pdfFile from '../../assets/pdf/z-yego club.pdf'
import MyButton from '../../Components/MyButton';
const Hero = () => {
    return (
        <div className="myHero p-2 py-20 relative overflow-hidden">
            <div className='absolute hidden h-full w-36 top-0 right-10 md:flex items-center overflow-hidden justify-center'>
                <h1 className='rotate-90 side-text myTitle text-nowrap text-7xl font-bold'>Z-YOGA CLUB</h1>
            </div>
            <div className="container flex items-end h-full">
                <div className=' w-full md:w-1/2'>
                    <h1 className='myTitle text-5xl md:text-7xl font-extrabold text-white'>Cultivate <span className='text-primaryColor'>Calm & <br /> Confidence</span></h1>
                    <p className='w-full max-w-xl mySub text-gray-200 text-xl'>
                        Join us to cultivate peace and strength.
                        Embrace a community dedicated to wellness.
                    </p>
                    <a className='mt-4 inline-block' href={pdfFile} download={pdfFile} target='_blank'>
                        <MyButton>Download</MyButton>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;