import founder from "../assets/images/founder.png"

const Title = () => {
  return (
    <div>
        <div className="p-10"><h1 className="text-center font-bold text-8xl leading-snug font-poppins">Founders & History</h1></div> 
        <div className="p-8 flex justify-between space-x-4 items-center h-screen">
          <img src={founder} className="rounded-3xl w-1/2 h-full" />
          <div className="w-auto font-poppins text-gray-500 font-light"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laborum distinctio, blanditiis facilis veniam accusamus eum velit, ullam ipsam, maxime perspiciatis aliquid ducimus? Veritatis aut quas nobis, laborum porro facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere deserunt excepturi veniam, rem ex explicabo error hic animi iure. Distinctio fugit vel facere nobis provident neque ratione culpa similique qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ad iusto omnis impedit ab quis minima voluptatibus vitae illo perspiciatis eveniet voluptatum quas, blanditiis perferendis laborum sint, sequi error possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus enim ipsa corrupti possimus iste porro nihil magni, atque fugit minima cumque veniam nulla architecto neque, facere, quos illo necessitatibus eligendi!</p></div>
        </div>
      
    </div>
  )
}

export default Title
