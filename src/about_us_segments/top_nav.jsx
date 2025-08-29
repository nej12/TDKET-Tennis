import { MdKeyboardArrowRight } from "react-icons/md";


const TopNav = () => {
    const goBack = () => {
        window.history.back();
      };

  return (
    <div>
        <div className="flex justify-center mt-8 font-poppins">
            <button onClick={goBack} className="text-gray-400 hover:text-black">Home</button>
            <MdKeyboardArrowRight className="size-5 mt-0.5"/>
            <a href={window.location.href}>About us</a>
        </div>
        
        
      
    </div>
  )
}

export default TopNav
