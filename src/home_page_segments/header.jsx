
const Header = () => {
  return (
    <header className="p-6 bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" className="h-20" alt="Logo" />
          <ul className="flex text-gray-400 ml-28 space-x-10">
            <li className=" hover:text-gray-200 hover:font-bold"><a href="">Home</a></li>
            <li className=" hover:text-gray-200 hover:font-bold"><a href="/about_us">About Us</a></li>
            <li className=" hover:text-gray-200 hover:font-bold"><a href="">News</a></li>
            <li className=" hover:text-gray-200 hover:font-bold"><a href="">TDKET Open</a></li>
            <li className=" hover:text-gray-200 hover:font-bold"><a href="">Events</a></li>
            <li className=" hover:text-gray-200 hover:font-bold"><a href="">Membership</a></li>
            <li className=" hover:text-gray-200 hover:font-bold"><a href="">Contact Us</a></li>
          </ul>
        </div>
        <button className="bg-orange-500 text-white px-10 py-2 rounded-full">Donate</button>
        <button className="bg-orange-500 text-white px-10 py-2 rounded-full">EN</button>
      </div>
    </header>
  )
}

export default Header
