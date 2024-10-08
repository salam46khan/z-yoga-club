import { BiSolidQuoteLeft } from "react-icons/bi";

const Testi = ({name}) => {
    return (
        <div className="test-item w-full">
            <BiSolidQuoteLeft className="text-6xl mx-auto mt-6 text-primaryColor" />
            <p className="text-center p-4 py-8">
            Joining Z-Yoga Club has truly transformed my life. I’ve gained not just physical strength but also mental clarity. The instructors are so patient and encouraging, and the community here is incredibly supportive. I leave every class feeling rejuvenated and at peace.
            </p>
            <div className="w-full h-24 flex gap-4 bg-primaryColor bg-opacity-15 items-center p-4">
                <img className="h-16 w-16 rounded-full object-cover" src="https://i.ibb.co.com/q9ycNCD/woman-4.jpg" alt="" />
                <div>
                    <p className="text-2xl mySub text-primaryColor">{name}</p>
                    <p>__Member</p>
                </div>
            </div>
        </div>
    );
};

export default Testi;