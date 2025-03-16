import {Link} from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
export default function Header(){
  return(
    <header className = "ttop-0 shadow-md bg-white dark:bg-black w-full">
      <nav>
        <div>
          <Link to="/" className="flex items-center">
            <img src="" className="mr-3 h-10 rounded-full" alt="logo"/>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to="/login" className="text-black dark:text-white">Log In</Link>
          </div>
          <div className="flex items-center lg:order-3">
            <Link to="/signup" className="text-black dark:text-white">Sign Up</Link>
          </div>
          <div>
            <ModeToggle/>
          </div>
        </div>
      </nav>
    </header>
  )
}