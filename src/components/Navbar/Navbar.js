import './Navbar.scss'
import logo from '../../assets/coto.png'
import CartWidget from '../CarWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header" >
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/limpieza' className="navbar__link">Limpieza</Link>
                    <Link to='/productos/carniceria' className="navbar__link">Carnes</Link>
                    <Link to='/productos/panaderia' className="navbar__link">Panaderia</Link>
                    <Link to='/productos/perfumeria' className="navbar__link">Perfumeria</Link>
                    <Link to='/productos/verduleria' className="navbar__link">Verduleria</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}
