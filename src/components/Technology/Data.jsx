import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si"
import { SiRedux } from "react-icons/si";


export const data = [
    {
        icon: <FaHtml5 fontSize={30} />,
        title: "HTML",
        id: Math.random(),
    },
    {
        icon: <FaReact fontSize={30} />,
        title: "React",
        id: Math.random(),
    },
    {
        icon: <FaCss3 fontSize={30} />,
        title: "CSS",
        id: Math.random(),
    },
    {
        icon: <SiRedux  fontSize={30}/>,
        title: "Redux",
        id: Math.random(),
    },
    {
        icon: <SiJavascript fontSize={30} />,
        title: "javaScript",
        id: Math.random(),
    },
    {
        icon: <SiNextdotjs fontSize={30} />,
        title: "Next js",
        id: Math.random(),
    },
]