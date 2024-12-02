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
    <div className=" w-full min-h-20 grid grid-cols-12 gap-4 bg-gradient-to-b from-[#262829] to-transparent ">
        
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
          

          <Link className="mx-4 my-auto" to={''}> 
          <TwitterIcon/>
          </Link>
          <Link  className="mx-4 my-auto" to={''}> 
          <GithubIcon/>
          </Link>
          <Link className="mx-4 my-auto" to={''}> 
          <LinkedinIcon/>
          </Link>

          
          
        </div>



    </div>
  )
}
