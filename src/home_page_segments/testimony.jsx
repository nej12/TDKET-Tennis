import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiDoubleQuotesL } from "react-icons/ri";


const Testimony = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='py-16 px-10 flex bg-gray-100 bg-opacity-50'>
      <div className='w-2/3'>
      <RiDoubleQuotesL className='text-orange-500 text-9xl'/>

      <Slider {...settings} className=''>
            <div>
                <h1 className="text-start font-bold text-5xl leading-snug font-poppins pb-8">Together, We Can Change <br /> Lives For The Better!</h1>
                <h3 className='text-start pb-8 text-gray-500'>The project does not only focus on academic and sporting education, but also <br />on social group effects. Through joint learning and training with different <br /> generations, the children learn so-called soft skills, such as how to deal with <br />social interactions or how to take on responsibility in a group...</h3>
                <h2 className='font-poppins font-bold'>George Henry</h2>
                <h4 className='font-poppins text-gray-500 text-sm'>Donor</h4>
            </div>
            <div>
                <h1 className="text-start font-bold text-5xl leading-snug font-poppins pb-8">Together, We Can Change <br />Lives For The Better!</h1>
                <h3 className='text-start pb-8 text-gray-500'>The project does not only focus on academic and sporting education, but also <br />on social group effects. Through joint learning and training with different <br /> generations, the children learn so-called soft skills, such as how to deal with <br />social interactions or how to take on responsibility in a group...</h3>
                <h2 className='font-poppins font-bold'>George Henry</h2>
                <h4 className='font-poppins text-gray-500 text-sm'>Donor</h4>
            </div>
            <div>
                <h1 className="text-start font-bold text-5xl leading-snug font-poppins pb-8">Together, We Can Change <br /> Lives For The Better!</h1>
                <h3 className='text-start pb-8 text-gray-500'>The project does not only focus on academic and sporting education, but also <br />on social group effects. Through joint learning and training with different <br /> generations, the children learn so-called soft skills, such as how to deal with <br />social interactions or how to take on responsibility in a group...</h3>
                <h2 className='font-poppins font-bold'>George Henry</h2>
                <h4 className='font-poppins text-gray-500 text-sm'>Donor</h4>
            </div>
        </Slider> 
      </div>
        
        

        <div className='pl-12 w-1/3'>
        <p>My dots need fixing, oh and I am testimonial by the way</p>
        <iframe
            className="h-screen w-[22rem] rounded-2xl"
            src="https://www.youtube-nocookie.com/embed/SvQYfx4zw_k?wmode=transparent&vq=hd1080"
            title="TDKET SHORT VIDEO"
            allowFullScreen
            ></iframe>
            
        </div>
    
</div>
  );
};

export default Testimony;