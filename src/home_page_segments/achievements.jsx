import aimg1 from "../assets/images/aimg1.jpg"
import aimg2 from "../assets/images/aimg2.jpg"
import aimg3 from "../assets/images/aimg3.jpg"
import aimg4 from "../assets/images/aimg4.jpg"

import { BsRocketTakeoffFill } from "react-icons/bs";
import { BsBox2HeartFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";


const Achievements = () => {
    const bottomAchievements = [
    {
        id: 1,
        logo: <BsRocketTakeoffFill />,
        amount: "1.2k+",
        name: "Medals Locally",
    },
    {
        id: 2,
        logo: <BsBox2HeartFill />,
        amount: "100",
        name: "Medals Internationally",
    },
    {
        id: 3,
        logo: <FaGlobe />,
        amount: "480",
        name: "Cups World Wide",
    },
    {
        id: 4,
        logo: <FaHandHoldingHeart />,
        amount: "1.4m",
        name: "Cups Locally",
    }
]


  return (
    <div>
        <div className="p-10"><h1 className="text-center font-bold text-5xl leading-snug font-poppins">Achievements</h1></div>      
        <div className="flex justify-around p-20">
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                <div className=" rounded-xl shadow-2xl w-[25rem]">
                    <img src= {aimg1} alt="" className="rounded-t-2xl w-full h-64"/>
                    <h1 className="text-start font-bold text-2xl leading-snug font-poppins p-3">Local Recognition</h1>
                    <h3 className="text-start text-gray-400 p-4">Dolor donec eget morbi nisi. Eu et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravide porttitor vel...</h3>
                    <div className="p-4">
                        <div className=" h-3 bg-gray-200 rounded-md overflow-hidden">
                            <div className="h-full bg-orange-500 w-1/2"></div>
                        </div>
                    </div>
                    <div className="flex justify-between px-6">
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins">Goal: $12000</h3>
                            <h5 className="font-light font-poppins text-xs text-gray-700">Raised: $8000</h5>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins text-end">14</h3> 
                            <h5 className="font-light font-poppins text-xs text-gray-600">donations</h5>
                        </div>
                    </div>        
                    <div className="p-4"><button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>   
                </div>
                
                <div className=" rounded-xl shadow-2xl w-[25rem]">
                    <img src= {aimg2} alt="" className="rounded-t-2xl w-full h-64"/>
                    <h1 className="text-start font-bold text-2xl leading-snug font-poppins p-3">World Wide Recognition</h1>
                    <h3 className="text-start text-gray-400 p-4">Dolor donec eget morbi nisi. Eu et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravide porttitor vel...</h3>
                    <div className="p-4">
                        <div className=" h-3 bg-gray-200 rounded-md overflow-hidden">
                            <div className="h-full bg-orange-500 w-2/3"></div>
                        </div>
                    </div>
                    <div className="flex justify-between px-6">
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins">Goal: $15000</h3>
                            <h5 className="font-light font-poppins text-xs text-gray-700">Raised: $8000</h5>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins text-end">25</h3> 
                            <h5 className="font-light font-poppins text-xs text-gray-600">donations</h5>
                        </div>
                    </div>        
                    <div className="p-4"><button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>   
                </div>

                <div className=" rounded-xl shadow-2xl w-[25rem]">
                    <img src= {aimg3} alt="" className="rounded-t-2xl w-full h-64"/>
                    <h1 className="text-start font-bold text-2xl leading-snug font-poppins p-3">Local Competitions</h1>
                    <h3 className="text-start text-gray-400 p-4">Dolor donec eget morbi nisi. Eu et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravide porttitor vel...</h3>
                    <div className="p-4">
                        <div className=" h-3 bg-gray-200 rounded-md overflow-hidden">
                            <div className="h-full bg-orange-500 w-3/4"></div>
                        </div>
                    </div>
                    <div className="flex justify-between px-6">
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins">Goal: $60000</h3>
                            <h5 className="font-light font-poppins text-xs text-gray-700">Raised: $32000</h5>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins text-end">12</h3> 
                            <h5 className="font-light font-poppins text-xs text-gray-600">donations</h5>
                        </div>
                    </div>        
                    <div className="p-4"><button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>   
                </div>

                <div className=" rounded-xl shadow-2xl w-[25rem]">
                    <img src= {aimg4} alt="" className="rounded-t-2xl w-full h-64"/>
                    <h1 className="text-start font-bold text-2xl leading-snug font-poppins p-3">International Competition</h1>
                    <h3 className="text-start text-gray-400 p-4">Dolor donec eget morbi nisi. Eu et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravide porttitor vel...</h3>
                    <div className="p-4">
                        <div className=" h-3 bg-gray-200 rounded-md overflow-hidden">
                            <div className="h-full bg-orange-500 w-3.5"></div>
                        </div>
                    </div>
                    <div className="flex justify-between px-6">
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins">Goal: $120000</h3>
                            <h5 className="font-light font-poppins text-xs text-gray-700">Raised: $8000</h5>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold font-poppins text-end">14</h3> 
                            <h5 className="font-light font-poppins text-xs text-gray-600">donations</h5>
                        </div>
                    </div>        
                    <div className="p-4"><button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>   
                </div>
                
            </div>
        </div>

        <div className="flex justify-around m-12 p-8">
            {bottomAchievements.map((item, id) => (
                <div key={id} className="flex flex-col justify-center items-center space-y-4">
                     <div className="text-orange-500 text-4xl">{item.logo}</div>
                     <h1 className="text-center font-bold text-5xl leading-snug font-poppins">{item.amount}</h1>
                     <h1 className=" text-2xl text-gray-400 font-poppins font-semibold">{item.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Achievements
