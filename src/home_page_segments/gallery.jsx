import gimg1 from "../assets/images/gimg1.jpg"
import gimg2 from "../assets/images/gimg2.jpg"
import gimg3 from "../assets/images/gimg3.jpg"
import gimg4 from "../assets/images/gimg4.jpeg"
import gimg5 from "../assets/images/gimg5.jpg"
import gimg6 from "../assets/images/gimg6.jpg"

const Gallery = () => {
  return (
    <div>
        <div className="p-10"><h1 className="text-center font-bold text-5xl leading-snug font-poppins">Our Gallery</h1></div> 
        <div className="grid grid-cols-3 grid-rows-2 gap-8 p-8">
          <div className="flex items-center justify-center">
              <img src={gimg1} alt="" className="object-cover h-80 w-full rounded-2xl" />
          </div>
          <div className="flex items-center justify-center">
              <img src={gimg2} alt="" className="object-cover h-80 w-full rounded-2xl" />
          </div>
          <div className="flex items-center justify-center">
              <img src={gimg3} alt="" className="object-cover h-80 w-full rounded-2xl" />
          </div>
          <div className="flex items-center justify-center">
              <img src={gimg4} alt="" className="object-cover h-80 w-full rounded-2xl" />
          </div>
          <div className="flex items-center justify-center">
              <img src={gimg5} alt="" className="object-cover h-80 w-full rounded-2xl" />
          </div>
          <div className="flex items-center justify-center">
              <img src={gimg6} alt="" className="object-cover h-80 w-full rounded-2xl" />
          </div>
    </div>
    <div className=" p-8 flex justify-center"><button className=' bg-orange-500 w-64 text-white rounded-xl p-4 font-poppins font-bold'>VIEW MORE &#x21B4;</button></div> 
    </div>
  )
}

export default Gallery
