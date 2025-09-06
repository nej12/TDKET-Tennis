import AboutOrganization from "../about_us_segments/about_organization"

import TopNav from "../about_us_segments/top_nav"
import Header from '../home_page_segments/header'
import Four_Descriptions from "../about_us_segments/four_descriptions"
import Footer from '../home_Page_segments/footer'
import Title from "../about_us_segments/title"
import Documentary from "../about_us_segments/documentary"


const AboutUs = () => {

  return (
    <div>
        <Header />
        <TopNav />  
        <AboutOrganization />
        <Title/>
        <Four_Descriptions/>
        <Documentary/>
        <Footer/>


      
    </div>
  )
}

export default AboutUs
