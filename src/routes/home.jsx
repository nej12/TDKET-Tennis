import Achievements from '../home_page_segments/achievements'
import Famous_icons from '../home_page_segments/famous_icons'
import Footer from '../home_page_segments/footer'
import Gallery from '../home_page_segments/gallery'
import Header from '../home_page_segments/header'
import Hero from '../home_page_segments/hero'
import ProjectOffers from '../home_page_segments/project_offers'
import Short_video from '../home_page_segments/short_video'
import Testimony from '../home_page_segments/testimony'
import TopDonors from '../home_page_segments/top_donors'

function Home() {
  return (
    <div> 
        <Header />
        <Hero />
        <Short_video />
        <ProjectOffers />
        <Achievements />
        <TopDonors />
        <Gallery />
        <Testimony />
        <Famous_icons />
        <Footer />

      
    </div>
  )
}

export default Home
