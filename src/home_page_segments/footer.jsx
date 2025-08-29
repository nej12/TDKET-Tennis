
const Footer = () => {
  return (
    <div className="bg-black p-16 text-white font-poppins flex justify-between">
        <div className="w-1/4 space-y-4">
            <span className="flex justify-start align-text-bottom space-x-2 p-2"><img src="/logo.png" className="size-6" alt="Logo" /> <h4 className="text-md font-medium p-1">TDKET</h4></span> 
            <span className="flex"><h1 className="font-medium">Phone: &nbsp;</h1> <h1 className="text-gray-400"> +251945494048</h1></span>
            <span className="flex"><h1 className="font-medium">Address: &nbsp;</h1> <h1 className="text-gray-400"> &nbsp;Ethiopia, Addis Ababa, &nbsp;Kirokos, Mexico, Genet &nbsp;Hotel</h1></span>
        </div>
        <div>
          <h1 className="pb-4">About Us</h1>
          <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">Volunteers</a></li>
          <li><a href="">Partners</a></li>
          <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h1 className="pb-4">Useful Links</h1>
          <ul>
            <li><a href="">F.A.Q</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Reports</a></li>
            <li><a href="">Terms Of Use</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h1 className="pb-4">Social Media</h1>
          <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Tiktok</a></li>
          </ul>
        </div>
      
    </div>
  )
}

export default Footer
