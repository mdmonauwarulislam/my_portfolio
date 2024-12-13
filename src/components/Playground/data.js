import urlshortner from "../../assets/playground/urlshortner.png";
import todo from "../../assets/playground/TODO.jpg";
import multistep from "../../assets/playground/multistep.webp";
import swiggyui from "../../assets/playground/swiggy.jpeg";

export const projectsData = [
  {
    id: 1,
    projectName: "URL Shortner Backend",
    liveLink: "https://url-shortener2-nu.vercel.app/",
    hasLink: true,
    img: urlshortner,
  },
  {
    id: 2,
    projectName: "Todo List Web App",
    liveLink: "https://mdmonauwarulislam.github.io/ToDo-ContextAPI-Local/",
    hasLink: true,
    img: todo,
  },
  {
    id: 3,
    projectName: "Multiple Step Form",
    hasLink: true,
    liveLink: "https://multiple-step-frontend.vercel.app/",
    img: multistep,
  },
  {
    id: 4,
    projectName: "Swiggy UI Clone",
    hasLink: false,
    liveLink: "",
    GithubLink: "https://github.com/mdmonauwarulislam/Swiggy-UI",
    img: swiggyui,
  },
];
