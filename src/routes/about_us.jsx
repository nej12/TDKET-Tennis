import AboutOrganization from "../about_us_segments/about_organization"
import Title from "../about_us_segments/title"
import TopNav from "../about_us_segments/top_nav"
import Header from '../home_page_segments/header'


const AboutUs = () => {

  return (
    <div>
        <Header />
        <TopNav />  
        <Title />      
        <AboutOrganization />
      
    </div>
  )
}

export default AboutUs
