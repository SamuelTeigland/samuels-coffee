import './navbar.css';
import { Cart } from '../../../icons/icons'

export default function Navbar() {
    return (
        <div className='navbar__container'>
            <div className='navbar__main--menu'>
                <div className='navbar__main--menu__left'>
                    <a href='/' className='navbar__main--menu__logo--container'>
                        <img src="/images/samuelsCoffeeWLogoFull.png" alt='Samuels Coffee Logo' />
                    </a>
                    <div className='navbar__main--menu__link--container'>
                        <a className='navbar__main--menu__link' href='#'>Coffee</a>
                        <a className='navbar__main--menu__link' href='#'>Best Sellers</a>
                        <a className='navbar__main--menu__link' href='#'>About Us</a>
                        <a className='navbar__main--menu__link' href='#'>Contact Us</a>
                        <a className='navbar__main--menu__link' href='#'>Account</a>
                    </div>
                </div>
                <div className='navbar__main--menu__right'>
                    <Cart />
                    <p>0</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}