import { FaBookOpen } from "react-icons/fa6";
import { SiTalenthouse } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";




const FourDescriptions = () => {
    const descriptionsData = [
        {
            id: 1,
            logo: <FaBookOpen />,
            title: "Founded By Ethiopians",
            description: "In 2001, they chose 20 of the most talented children out of 120 to teach them how to play tennis. Their daily routine started at 6 a.m before school. Ten year later, this led to the founding of the NGO 'Tariku and Desta Kids Education through Tennis Development Ethiopia(TDKET)', which now supports 70 children. They managed to win patrons from Germany. At the same time, however, it is and remains a project by Ethiopians for Ethiopians.",
        },
        {
            id: 2,
            logo: <FaProjectDiagram />,
            title: "An Educational Project",
            description: "'Education' is the key to a better life for children from the poorest backgrounds in Addis Ababa. The 'medium' of educational support is tennis. Special emphasis is placed on academic development, tutoring and additional lessons, and successful participation in tournaments. The children are fully looked after by the project, and the parents ar given responsibility for their children's performance development through educational measures at parents' evenings.",
        },
        {
            id: 3,
            logo: <SiTalenthouse />,
            title: "Promotes Talent",
            description: "The aim is to support young people who stand out through their commitment, enthusiasm for learning and driven to achieve maximum results in both sports and school. Scholarships for secondary schools are an important part of the project.",
        },
        {
            id: 4,
            logo: <TiContacts />,
            title: "Generation contract",
            description: "The idea of the so-called 'generation contract' is conveyed by older children from the project taking on a mentoring role for younger children beyond family boundaries. Yonas Gebre is a great role model. He grew up in ",
        }
    ]
  return (
    <div>
           
    </div>
  )
}

export default FourDescriptions
