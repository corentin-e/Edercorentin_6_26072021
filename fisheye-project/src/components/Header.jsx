import logo from './logo.PNG';
import './header.css';



const Header = () => (
    <div className="header__position-items">
        <div className="header__logo-position"><img className="header__logo-style" src={logo} alt="logo" /></div>
        <div className="header__title-page">Nos Photographes</div>
    </div>
)
export default Header;