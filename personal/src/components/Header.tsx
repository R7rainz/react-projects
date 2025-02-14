import {Link, NavLink} from 'react-router-dom';

export default function Header(){
  return(
    <header>
      <nav>
        <div>
          <Link to="/" className='flex items-center'>Home</Link>
          <div className='flex items-center lg:order-2'>
            <Link to='#'>Login</Link>
            <Link to='#'>Get Started</Link>
          </div>
          <div>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}