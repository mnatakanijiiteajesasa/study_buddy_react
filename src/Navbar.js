import Logo from './logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src= {Logo} alt="logo"/>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;