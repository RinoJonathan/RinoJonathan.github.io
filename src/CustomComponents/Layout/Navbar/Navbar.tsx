import { Link } from "react-router-dom";

import TwitterIcon from "../../../assets/TwitterIcon";
import GithubIcon from "../../../assets/GithubIcon";
import LinkedinIcon from "../../../assets/LinkedinIcon";


export default function Navbar() {

  // const [menuState, setMenuState] = useState(false)
  // const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })
  
  // const toggleMenu = () => {
  //   setMenuState(menuState => !menuState)
  // }

  return (
    <nav className="fixed p-8 z-40 w-full min-h-20 grid grid-cols-12 gap-4 bg-gradient-to-b from-tblack to-transparent ">
        
        {/* { (isMobileOrTablet && menuState) &&         
    <div className="absolute -z-2 bg-red-100  bg-opacity-30  w-56 min-h-8 p-4 py-20 mx-4">
          <div className="w-full flex flex-col">
          <Link className="my-2" to={''}> 
          Main
          </Link>
          <Link className="my-2"to={''}> 
          Projects
          </Link>
          <Link className="my-2" to={''}> 
          Contact
          </Link>
          </div>
        </div>} */}
        
        <div className=" z-10  col-span-2 content-center">
          

          {/* {isMobileOrTablet ? <button  onClick={toggleMenu}>
          <MenuIcon  />
          </button> : <>
          <span className="p-4 text-white text-4xl font-serif ">Rino</span>
          </> } */}
          
          <span className="p-4 text-white text-4xl font-serif ">Rino</span>
          
        </div>
        <div className="col-span-6 content-center"></div>

        <div className="col-span-4 flex flex-row content-center justify-end ">
          

          <Link className="mx-4 my-auto" to={'https://twitter.com/RinoJonathanP'} target="_blank" rel="noopener noreferrer"> 
          <TwitterIcon/>
          </Link>
          <Link  className="mx-4 my-auto" to={'https://github.com/JustinFrost47' } target="_blank" rel="noopener noreferrer"> 
          <GithubIcon/>
          </Link>
          <Link className="mx-4 my-auto" to={'https://www.linkedin.com/in/rino-jonathan/'} target="_blank" rel="noopener noreferrer"> 
          <LinkedinIcon/>
          </Link>

          
          
        </div>



    </nav>
  )
}
