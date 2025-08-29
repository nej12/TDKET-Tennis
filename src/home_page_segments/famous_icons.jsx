import { LuHeartHandshake } from "react-icons/lu";
import { GiIronCross } from "react-icons/gi";
import { LiaGlobeSolid } from "react-icons/lia";
import { FaMoon } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";


const Famous_icons = () => {
  return (
    <div className="flex justify-between px-24 py-16">
        <LuHeartHandshake  className=" text-8xl text-gray-400"/>    
        <GiIronCross className=" text-8xl text-gray-400"/>
        <LiaGlobeSolid className=" text-8xl text-gray-400"/>
        <FaMoon className=" text-8xl text-gray-400"/>
        <FaHandshake className=" text-8xl text-gray-400"/>
    </div>
  )
}

export default Famous_icons
