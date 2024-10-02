import whyImg from '../assets/img/why-3.png'
import { IoBook } from "react-icons/io5";
import { PiHandPeaceFill, PiMaskSadFill, PiUsersThreeFill } from "react-icons/pi";
import { GiStrong } from "react-icons/gi";
const WhyContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 relative text-white">
            <div className="absolute hidden lg:block w-[80%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img className="w-full whyPic" src={whyImg} alt="" />
            </div>

            {/* hidden */}
            <div className=" col-span-3 h-36 hidden lg:block"></div>


            {/* top fast  */}
            <div className="lg:py-8 p-3 flex items-center lg:justify-end">
                <div className="why-card w-full lg:w-5/6 p-3">
                    <div className="flex items-end gap-2">
                        <div className="h-12 w-12 bg-[#97ff4150] flex justify-center items-center">
                            <GiStrong className="text-4xl text-primaryColor" />
                        </div>
                        <p className="mySub text-xl">Flexibility and Strength</p>
                    </div>
                    <p className="text-xs mt-2">
                        Experience improved flexibility and build strength through diverse yoga practices tailored to all levels.
                    </p>
                </div>
            </div>

            {/* hidden  */}
            <div className=" hidden lg:block "></div>

            {/* top last  */}
            <div className="lg:py-8 p-3 flex items-center">
                <div className="why-card w-full lg:w-5/6 p-3">
                    <div className="flex items-end gap-2">
                        <div className="h-12 w-12 bg-[#97ff4150] flex justify-center items-center">
                            <PiMaskSadFill className="text-4xl text-primaryColor" />
                        </div>
                        <p className="mySub text-xl">Reduce Stress and Anxiety</p>
                    </div>
                    <p className="text-xs mt-2">
                        Engage in mindful breathing and meditation techniques that help alleviate stress and promote mental clarity.
                    </p>
                </div>
            </div>



            {/* middle fast */}
            <div className="lg:py-8 p-3 lg:justify-center flex items-center">
                <div className="why-card w-full lg:w-5/6 p-3">
                    <div className="flex items-end gap-2">
                        <div className="h-12 w-12 bg-[#97ff4150] flex justify-center items-center">
                            <PiUsersThreeFill className="text-4xl text-primaryColor" />
                        </div>
                        <p className="mySub text-xl">Community Connection</p>
                    </div>
                    <p className="text-xs mt-2">
                        Join a supportive network of like-minded individuals who inspire and motivate each other on their wellness journeys.
                    </p>
                </div>
            </div>


            {/* hidden */}
            <div className=" hidden lg:block"></div>

            {/* middle last  */}
            <div className="lg:py-8 p-3 flex items-center lg:justify-center">
                <div className="why-card w-full lg:w-5/6 p-3">
                    <div className="flex items-end gap-2">
                        <div className="h-12 w-12 bg-[#97ff4150] flex justify-center items-center">
                            <IoBook className="text-4xl text-primaryColor" />
                        </div>
                        <p className="mySub text-xl">Expert Guidance</p>
                    </div>
                    <p className="text-xs mt-2">
                        Benefit from experienced instructors who provide personalized attention and adjustments to enhance your practice.
                    </p>
                </div>
            </div>


            {/* hidden */}
            <div className=" hidden lg:block"></div>



            {/* last item  */}
            <div className=" p-3 flex justify-center items-center  ">
                <div className="why-card w-full lg:w-5/6 p-3">
                    <div className="flex items-end gap-2">
                        <div className="h-12 w-12 bg-[#97ff4150] flex justify-center items-center">
                            <PiHandPeaceFill className="text-4xl text-primaryColor" />
                        </div>
                        <p className="mySub text-xl">Holistic Wellness</p>
                    </div>
                    <p className="text-xs mt-2">
                        Embrace a balanced lifestyle that incorporates physical, mental, and emotional well-being, leading to overall health improvements.
                    </p>
                </div>
            </div>


            {/* hidden */}
            <div className="hidden lg:block "></div>

        </div>
    );
};

export default WhyContent;