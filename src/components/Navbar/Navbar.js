import './Navbar.scss'
import logo from '../../assets/coto.png'
import CartWidget from '../CarWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <p className="navbar__link">Sucursales</p>
                    <p className="navbar__link">Contacto</p>
                    <p className="navbar__link">Ayuda</p>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}