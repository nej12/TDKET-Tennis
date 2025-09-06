import { FaBookOpen } from "react-icons/fa6";
import { SiTalenthouse } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const Four_Descriptions = () => {
    const descriptionsData = [
        {
            id: 1,
            logo: <FaBookOpen />,
            title: "Founded By Ethiopians",
            description: "In 2001, they chose 20 of the most talented children out of 120 to teach them how to play tennis. Their daily routine started at 6 a.m before school. Ten years later, this led to the founding of the NGO 'Tariku and Desta Kids Education through Tennis Development Ethiopia (TDKET)', which now supports 70 children.",
        },
        {
            id: 2,
            logo: <FaProjectDiagram />,
            title: "An Educational Project",
            description: "'Education' is the key to a better life for children from the poorest backgrounds in Addis Ababa. The 'medium' of educational support is tennis.",
        },
        {
            id: 3,
            logo: <SiTalenthouse />,
            title: "Promotes Talent",
            description: "The aim is to support young people who stand out through their commitment and enthusiasm for learning.",
        },
        {
            id: 4,
            logo: <TiContacts />,
            title: "Generation Contract",
            description: "The idea of the 'generation contract' is conveyed by older children taking on a mentoring role for younger children.",
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
            {descriptionsData.map(({ id, logo, title, description }) => (
                <div key={id} className="flex items-start p-4 border rounded-lg shadow-md">
                    <div className="text-3xl mr-8">{logo}</div>
                    <div>
                        <h3 className="font-bold text-xl">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Four_Descriptions;