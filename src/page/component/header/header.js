import React from 'react';
import Logo from './logo.svg';
import './header.css'

function Header() {
    return (
        <div className="App">
            <div className="bg">
                <section className="wrapper">
                    <div className="bg__inner">
                        <div className="logo">
                            <img src={Logo} alt="Логотип" className="header__logo" />
                            <div className="logo__text"> <span>ППОС СВФУ</span> <br /> им М.К.Аммосова</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Header;
