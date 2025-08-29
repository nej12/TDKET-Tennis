import { FaHeartbeat } from "react-icons/fa";

import aimg5 from "../assets/images/aimg5.png"
import aimg7 from "../assets/images/aimg7.png"



const AboutOrganization = () => {
  return (
    <div className="flex space-x-8 my-32 mx-4 overflow-x-hidden">
        <div className="w-1/2">
            <h1 className="font-bold text-5xl leading-snug font-poppins mb-6">About Our Organization</h1>
            <span className="flex space-x-6 p-4"><div className="bg-orange-500 size-12 rounded-full justify-center items-center flex"><FaHeartbeat className="text-4xl text-white p-1"/></div><h2 className="font-bold text-3xl leading-snug font-poppins">Our Mission</h2></span>
            <p className="text-gray-500 p-4">TDKET&apos;s mission is to improve the living conditions of children in Addis Ababa through sports and education. The children should grow up to be independent, self-sufficient individuals with the prospect of a bright future. To this end, various Organizations work together to support TDKET, financially, materially, knowledge wise etc...</p>
            <span className="flex space-x-6 p-4"><div className="bg-orange-500 size-12 rounded-full justify-center items-center flex"><FaHeartbeat className="text-4xl text-white p-1"/></div><h2 className="font-bold text-3xl leading-snug font-poppins">Our Vision</h2></span>
            <p className="text-gray-500 p-4">Our vision is to give some of Ethiopia&apos;s poorest children the opportunity for successful socialization through tennis. They should become elite performers on their own accord. Successful school attendance, social interaction and support for one another, and the necessary discipline on the court are the path to success.</p>
        </div> 

        <div className="w-1/2 flex space-x-5">
            <img src={aimg5} className="w-1/2 rounded-2xl blur-sm" />
            <img src={aimg7} className="w-[46%] rounded-2xl blur-sm" />
        </div>    
    </div>
  )
}

export default AboutOrganization
