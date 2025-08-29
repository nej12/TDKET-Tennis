import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Dimg1 from "../assets/images/dimg1.png"
import Dimg2 from "../assets/images/dimg2.png"
import Dimg3 from "../assets/images/dimg3.png"
import Dimg4 from "../assets/images/dimg4.jfif"

import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const TopDonors = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  

  return (
    
    <div className='bg-gray-100 font-poppins h-screen mb-16'>
      <div className="p-10"><h1 className="text-center font-bold text-5xl leading-snug font-poppins">Our Top Donors</h1></div>
      


      <div className='w-full px-10'>

        <Slider {...settings} className='h-fit'>
            <div>
              <div className="flex p-8 h-[30rem] justify-center space-x-6">
                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                  <img src={Dimg1} className="rounded-t-xl w-full h-2/3" />
                  <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>

                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                <img src={Dimg2} className="rounded-t-xl w-full h-2/3" />
                <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>

                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                <img src={Dimg3} className="rounded-t-xl w-full h-2/3" />
                <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>
              </div> 
            </div>

            <div>
              <div className="flex p-8 h-[30rem] justify-center space-x-6">
                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                  <img src={Dimg4} className="rounded-t-xl w-full h-2/3" />
                  <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>

                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                <img src={Dimg1} className="rounded-t-xl w-full h-2/3" />
                <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>

                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                <img src={Dimg2} className="rounded-t-xl w-full h-2/3" />
                <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>
              </div>
            </div>

            <div>
              <div className="flex p-8 h-[30rem] justify-center space-x-6">
                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                  <img src={Dimg3} className="rounded-t-xl w-full h-2/3" />
                  <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>

                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                <img src={Dimg4} className="rounded-t-xl w-full h-2/3" />
                <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>

                <div className="space-y-4 rounded-xl bg-white pb-4 w-1/3">
                <img src={Dimg1} className="rounded-t-xl w-full h-2/3" />
                <h1 className="text-center font-semibold text-2xl">Herr Schuler</h1>
                  <h2 className="text-center text-sm text-orange-500">Volunteer</h2>
                  <div className=" flex justify-center space-x-4">
                  <FaFacebook />
                  <BsTwitterX />
                  <FaInstagram />
                  </div>

                </div>
           </div>
            
            </div>
        </Slider> 
      </div>
      
    </div>
  )
}

export default TopDonors
