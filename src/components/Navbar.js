import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar pb-5">
    <h1>Math Magicians</h1>
    <div>
      <Link to="/" className="px-4 fs-4 my-link">Home</Link>
      <Link to="/calculator" className="px-4 fs-4 my-link">Calculator</Link>
      <Link to="/quote" className="px-4 fs-4 my-link">Quote </Link>
    </div>
  </nav>
);

export default Navbar;
