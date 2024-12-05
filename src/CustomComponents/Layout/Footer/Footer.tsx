import './Footer.css'
import { Link } from "react-router-dom";
import EmailIcon from "../../../assets/EmailIcon";
import LinkedinIcon from "../../../assets/LinkedinIcon";
import TwitterIcon from "../../../assets/TwitterIcon";

export default function Footer() {
  return (
    <footer className="content min-h-screen bg-tblack text-white flex flex-col justify-center items-center">
      <div className="w-4/5 mx-auto border-b-2 p-8 m-8 text-center">
        <h1 className="text-6xl">Contact</h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:w-4/5 md:mt-20 justify-center items-center space-y-16 md:space-y-0 p-8">
        {[
          {
            icon: <EmailIcon style="w-28 h-28" />,
            text: "arulrinojonathan@gmail.com",
            link: "",
          },
          {
            icon: <TwitterIcon style="w-28 h-28" />,
            text: "@RinoJonathanP",
            link: "",
          },
          {
            icon: <LinkedinIcon style="w-28 h-28" />,
            text: "rino-jonathan",
            link: "",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Link className="mb-4" to={item.link}>
              {item.icon}
            </Link>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
