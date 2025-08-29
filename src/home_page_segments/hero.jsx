
import { TbMessageCircleFilled } from "react-icons/tb";
import { SiGooglegemini } from "react-icons/si";
import backgroundImage from "../assets/images/hero_background.png"

const Hero = () => {
  return (
    <div className="h-full bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
        
        <div className='p-14'><h1 className=' text-white font-bold text-7xl leading-snug tracking-wide font-poppins'>Tariku And Desta Kids' <br /> Education Through <br />Tennis Development</h1></div>
        <div><h5 className=' text-gray-400 pl-16'>TDKET is a non-profit in Addis Ababa, Ethiopia, that uses <br />tennis to educate underprivileged children, empowering <br />them with essential skills to drive positive change in their <br /> communities.</h5></div>
        <div><h3 className='text-white p-16 flex space-x-10 text-xl'><span> <span className='text-orange-500 font-bold pr-2 text-2xl'>216</span> Children Served Over The Years</span>  <span> <span className='pr-2 text-2xl text-orange-500 font-bold'>100</span>  Current Children Served</span></h3></div>
        <div className='flex justify-start space-x-10 m-auto font-bold pl-32 pb-5'><div className='text-gray-500 flex space-x-3'><TbMessageCircleFilled className="transform scale-x-[-1] size-6"/> <h4 className='text-gray-500'>Logoipsum</h4></div> <div className='text-gray-500 flex space-x-3'><SiGooglegemini className='size-6'/> <h4 className='text-gray-500'>Logoipsum</h4></div> </div>
    </div>
  )
}

export default Hero
