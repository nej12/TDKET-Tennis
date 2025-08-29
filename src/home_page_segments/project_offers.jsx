import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.png"

import { SlBookOpen } from "react-icons/sl";
import { GiTennisCourt } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";


const ProjectOffers = () => {
    const bottomOffers = [
        {
            id: 1,
            logo: <SlBookOpen />,
            name: "Education",
            description: "Lorum ultricies lacus turpis proin tempor faucibus",
        },
        {
            id: 2,
            logo: <GiTennisCourt />,
            name: "Ground Tennis",
            description: "Lorum ultricies lacus turpis proin tempor faucibus",
        },
        {
            id: 3,
            logo: <MdOutlineHealthAndSafety />,
            name: "Health Care",
            description: "Lorum ultricies lacus turpis proin tempor faucibus",
        },
        {
            id: 4,
            logo: <FaPeopleRoof />,
            name: "Balanced Diet",
            description: "Lorum ultricies lacus turpis proin tempor faucibus",
        }
    ]


  return (
    <div className="space-y-5">
        <div className="p-10"><h1 className="text-center font-bold text-5xl leading-snug font-poppins">The Project Offers</h1></div>      
        <div className="flex justify-around space-x-10 p-5 h-full">
            <div className=" rounded-xl shadow-2xl ">
                <img src= {img1} alt="" className="w-[100rem] h-[15rem] rounded-t-2xl"/>
                <h1 className="text-center font-bold text-2xl leading-snug font-poppins p-2">Training On The Tennis Court</h1>
                <h3 className="text-start text-gray-400 p-4">Dolor donec eget morbi nisi. Eu et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravide porttitor vel...</h3>
                <div className="p-4"><button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>
                
            </div>
            <div className=" rounded-xl shadow-2xl ">
            <img src= {img3} alt="" className="w-[100rem] h-[15rem] rounded-t-2xl"/>
            <h1 className="text-start font-bold text-2xl leading-snug font-poppins p-2">School And Health Care</h1>
                <h3 className="text-start text-gray-400 p-4">The project provides comprehensive support for children&apos;s education by covering all costs associated with private schooling. This includes...</h3>
                <div className="p-4"><button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>
            </div>
            <div className=" rounded-xl shadow-2xl ">
            <img src= {img2} alt="" className="w-[100rem] h-[15rem] rounded-t-2xl"/>
            <h1 className="text-center font-bold text-2xl leading-snug font-poppins p-2">Meal Provided By The Project</h1>
                <h3 className="text-start text-gray-400 p-4 leading-normal">Donation enable the children to receive regular meals, which are a basic requirement for performance on the field and in school...</h3>
                <div className="p-4"><button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>
            </div>
        </div>
        <div className="flex justify-around p-8 bg-gray-100 bg-opacity-50 space-x-6">
            {bottomOffers.map((item, id) => (
                <div key={id} className="flex p-4 space-x-6">
                     <div className="text-orange-500 text-4xl">{item.logo}</div>
                     <div className="space-y-2">
                        <h1 className="text-start font-bold text-2xl leading-snug font-poppins">{item.name}</h1>
                        <h1 className=" text-sm text-gray-400 font-poppins">{item.description}</h1>
                     </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectOffers
