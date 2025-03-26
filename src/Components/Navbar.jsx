import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
        <div className="menu">
            <ul>
                <li><Link className="link" to={'/'}>Home</Link></li>
                <li><Link className="link" to={'/about'}>About</Link></li>
                <li><Link className="link" to={'/news'}>News</Link></li>
                <li><Link className="link" to={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar