import './navbar.css';
import { Cart, Hamburger } from '../../../icons/icons'
import { useState } from 'react';

export default function Navbar() {
    const [ visible, isVisible ] = useState(false);

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
                    <a href='#' className='navbar__cart--container'>
                        <Cart />
                        <p>0</p>
                    </a>
                    <div className='navbar__hamburger--container' onClick={() => {
                        isVisible(!visible);
                    }}>
                        <Hamburger />
                    </div>
                </div>
            </div>


            <div className={ visible === true ? 'navbar__small--menu navbar__shown' : 'navbar__small--menu navbar__hidden'}>
                <div className='navbar__small--link__container'>
                    <a onClick={() => {
                        isVisible(!visible);
                    }} className='navbar__small--link' href='#'>Coffee</a>
                    <a onClick={() => {
                        isVisible(!visible);
                    }} className='navbar__small--link' href='#'>Best Sellers</a>
                    <a onClick={() => {
                        isVisible(!visible);
                    }} className='navbar__small--link' href='#'>About Us</a>
                    <a onClick={() => {
                        isVisible(!visible);
                    }} className='navbar__small--link' href='#'>Contact Us</a>
                    <a onClick={() => {
                        isVisible(!visible);
                    }} className='navbar__small--link' href='#'>Account</a>
                    <a onClick={() => {
                        isVisible(!visible);
                    }} className='navbar__cart--link'>
                        <div className='navbar__cart--subcontainer'>
                            <h3>Cart</h3>
                        </div>
                        <div className='navbar__cart--subcontainer'>
                            <p>0</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}