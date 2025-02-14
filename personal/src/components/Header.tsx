import { Link, NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Home</Link>
        <div className="flex space-x-4">
          <NavLink to="/get-started" className={({isActive}) => `block py-2 duration-200 ${isActive ? "text-orange-400" : "text-white"}`}>Get Started</NavLink>
          <NavLink to="/login" className={({isActive}) => `block py-2 duration-200 ${isActive ? "text-orange-400" : "text-white"}`}>Login</NavLink>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={({isActive}) => `block py-2 duration-200 ${isActive ? "text-orange-400" : "text-white"}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => `block py-2 duration-200 ${isActive ? "text-orange-400" : "text-white"}`}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => `block py-2 duration-200 ${isActive ? "text-orange-400" : "text-white"}`}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
