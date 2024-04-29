import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#00ccff', padding: '5px' }}>
      <Link to="/Inicio" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Início</Link>
      <Link to="/About" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Quem Somos</Link>
      <Link to="/Home" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Faça login</Link>
    </nav>
  );
};

export default Navbar;
